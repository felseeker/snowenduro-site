import { existsSync } from "node:fs";
import { appendFile, mkdir, readFile, realpath, rename, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputPath = path.resolve(root, process.env.CRM_CATALOG_OUTPUT || "data/products.crm.json");
const publicDir = path.resolve(root, process.env.CRM_PUBLIC_DIR || "public");
const inputFile = process.env.CRM_PRODUCTS_JSON_FILE;
const queueUrl = process.env.CRM_SYNC_QUEUE_URL ? new URL(process.env.CRM_SYNC_QUEUE_URL) : null;
const apiUrl = process.env.CRM_PUBLIC_PRODUCTS_URL ? new URL(process.env.CRM_PUBLIC_PRODUCTS_URL) : null;
const syncToken = process.env.CRM_SYNC_CALLBACK_TOKEN || "";
const allowedAvailability = new Set(["in_stock", "on_order", "out_of_stock"]);
const allowedCategories = new Set(["snowbike", "snowmobile"]);
const uploadedAssetCache = new Map();
let publicationId = "";
let pending = false;

function output(name, value) {
  if (process.env.GITHUB_OUTPUT) return appendFile(process.env.GITHUB_OUTPUT, `${name}=${value}\n`, "utf8");
  return Promise.resolve();
}

if (!inputFile && !queueUrl && !apiUrl) throw new Error("Set CRM_SYNC_QUEUE_URL or CRM_PUBLIC_PRODUCTS_URL.");
if (queueUrl && queueUrl.protocol !== "https:") throw new Error("The CRM sync queue must use HTTPS.");
if (apiUrl && apiUrl.protocol !== "https:" && apiUrl.hostname !== "127.0.0.1" && apiUrl.hostname !== "localhost") {
  throw new Error("The CRM catalog endpoint must use HTTPS.");
}

let raw;
if (inputFile) {
  raw = JSON.parse(await readFile(path.resolve(root, inputFile), "utf8"));
  pending = true;
} else if (queueUrl) {
  if (!syncToken) throw new Error("CRM_SYNC_CALLBACK_TOKEN is required for catalog sync.");
  const response = await fetch(queueUrl, {
    headers: { Authorization: `Bearer ${syncToken}`, Accept: "application/json" },
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`CRM sync queue returned HTTP ${response.status}.`);
  const queue = await response.json();
  if (!queue.pending) {
    await output("pending", "false");
    await output("changed", "false");
    await output("publication_id", "");
    console.log("No catalog publication is waiting.");
    process.exit(0);
  }
  pending = true;
  publicationId = String(queue.publication_id || "");
  if (!/^[a-f0-9-]{36}$/i.test(publicationId)) throw new Error("CRM returned an invalid publication ID.");
  raw = queue.products;
} else {
  raw = await fetchProducts(apiUrl);
}

if (!Array.isArray(raw) || raw.length === 0 || raw.length > 500) {
  throw new Error("CRM returned an empty catalog or more than 500 products; the current website catalog was left unchanged.");
}

const products = [];
const slugs = new Set();
let changed = false;
for (const [productIndex, row] of raw.entries()) {
  const source = row?.data && typeof row.data === "object" ? row.data : row;
  const product = {
    ...source,
    slug: row?.slug || source.slug,
    name: row?.name || source.name,
    category: row?.category || source.category,
    availability: row?.availability || source.availability || "on_order",
  };
  validateProduct(product, productIndex);
  if (slugs.has(product.slug)) throw new Error(`Duplicate product slug: ${product.slug}`);
  slugs.add(product.slug);

  let imageIndex = 0;
  product.image = await rewriteImage(product.image, product.slug, imageIndex++);
  product.gallery = await Promise.all(product.gallery.map(async (photo) => ({
    ...photo,
    src: await rewriteImage(photo.src, product.slug, imageIndex++),
  })));
  products.push(product);
}

await mkdir(path.dirname(outputPath), { recursive: true });
const serialized = `${JSON.stringify(products, null, 2)}\n`;
const previous = existsSync(outputPath) ? await readFile(outputPath, "utf8") : "";
if (previous !== serialized) {
  const temporaryPath = `${outputPath}.tmp`;
  await writeFile(temporaryPath, serialized, "utf8");
  await rename(temporaryPath, outputPath);
  changed = true;
}
await output("pending", pending ? "true" : "false");
await output("changed", changed ? "true" : "false");
await output("publication_id", publicationId);
console.log(`Catalog prepared: ${products.length} products${changed ? " (updated)" : " (unchanged)"}.`);

async function fetchProducts(url) {
  const response = await fetch(url, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`CRM catalog request failed with HTTP ${response.status}.`);
  return response.json();
}

function validateProduct(product, index) {
  if (!product || typeof product !== "object") throw new Error(`Product ${index + 1} is invalid.`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(product.slug || "")) throw new Error(`Product ${index + 1} has an invalid slug.`);
  if (!product.name || typeof product.name !== "string") throw new Error(`Product ${product.slug} has no name.`);
  if (!allowedCategories.has(product.category)) throw new Error(`Product ${product.slug} has an invalid category.`);
  if (!allowedAvailability.has(product.availability)) throw new Error(`Product ${product.slug} has an invalid availability status.`);
  if (product.price !== null && (!Number.isFinite(product.price) || product.price < 0)) throw new Error(`Product ${product.slug} has an invalid price.`);
  if (!product.image || typeof product.image !== "string" || !Array.isArray(product.gallery) || !product.gallery.length) {
    throw new Error(`Product ${product.slug} needs a main photo and a gallery.`);
  }
  if (!Array.isArray(product.tags) || !Array.isArray(product.specs)) throw new Error(`Product ${product.slug} has invalid tags or specifications.`);
  for (const field of ["brand", "eyebrow", "purpose", "summary", "imageAlt", "useCase", "engine", "horsepower", "track", "seats"]) {
    if (typeof product[field] !== "string") throw new Error(`Product ${product.slug} is missing ${field}.`);
  }
  if (product.gallery.some((photo) => !photo || typeof photo.src !== "string" || typeof photo.alt !== "string" || typeof photo.label !== "string")) {
    throw new Error(`Product ${product.slug} has an invalid gallery entry.`);
  }
}

async function rewriteImage(source, slug, index) {
  if (source.startsWith("/media/")) {
    const publicRoot = await realpath(publicDir);
    const candidate = path.resolve(publicRoot, `.${decodeURIComponent(source)}`);
    if (!candidate.startsWith(`${publicRoot}${path.sep}`)) throw new Error(`Unsafe product image path: ${source}`);
    if (!existsSync(candidate)) throw new Error(`Product image is missing from the website repository: ${source}`);
    const actualPath = await realpath(candidate);
    if (!actualPath.startsWith(`${publicRoot}${path.sep}`)) throw new Error(`Product image escapes the website asset folder: ${source}`);
    return source;
  }

  if (!source.startsWith("/uploads/") || !apiUrl) throw new Error(`Unsupported product image source: ${source}`);
  const assetUrl = new URL(source, apiUrl);
  const match = assetUrl.pathname.match(/^\/uploads\/([a-f0-9]{32})\.(jpg|png|webp|avif)$/i);
  if (assetUrl.origin !== apiUrl.origin || !match || assetUrl.search || assetUrl.hash) throw new Error(`Invalid uploaded image path: ${source}`);
  const cacheKey = `${slug}:${assetUrl.pathname}`;
  if (uploadedAssetCache.has(cacheKey)) return uploadedAssetCache.get(cacheKey);

  const response = await fetch(assetUrl, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`Could not download an uploaded image for ${slug} (HTTP ${response.status}).`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (!bytes.length || bytes.length > 2 * 1024 * 1024) throw new Error(`Uploaded image for ${slug} is empty or too large.`);
  const extension = match[2].toLowerCase();
  const contentType = response.headers.get("content-type")?.split(";")[0].toLowerCase();
  const expectedType = { jpg: "image/jpeg", png: "image/png", webp: "image/webp", avif: "image/avif" }[extension];
  if (contentType !== expectedType) throw new Error(`Uploaded image for ${slug} has an unexpected content type.`);

  const relativePath = `/media/products/crm/${slug}-${index}.${extension}`;
  const destination = path.resolve(publicDir, `.${relativePath}`);
  if (!destination.startsWith(`${publicDir}${path.sep}`)) throw new Error(`Unsafe asset destination for ${slug}.`);
  await mkdir(path.dirname(destination), { recursive: true });
  const old = existsSync(destination) ? await readFile(destination) : null;
  if (!old || !old.equals(bytes)) {
    await writeFile(destination, bytes);
    changed = true;
  }
  uploadedAssetCache.set(cacheKey, relativePath);
  return relativePath;
}
