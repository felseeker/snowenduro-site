import catalogData from "./products.crm.json";

export type ProductCategory = "snowbike" | "snowmobile";
export type ProductAvailability = "in_stock" | "on_order" | "out_of_stock";
export type ProductSpec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  brand: string;
  eyebrow: string;
  purpose: string;
  summary: string;
  image: string;
  imageAlt: string;
  imageTreatment?: "cutout" | "scene";
  gallery: { src: string; alt: string; label: string; treatment?: "cutout" | "scene" }[];
  tags: string[];
  price: number | null;
  availability?: ProductAvailability;
  useCase: string;
  engine: string;
  horsepower: string;
  track: string;
  seats: string;
  specs: ProductSpec[];
};

export const priceNote = "Стоимость предварительная. Точную цену, комплектацию и сроки поставки уточняйте у менеджеров.";

const importedCatalog = catalogData as unknown as Product[];

export const products: Product[] = importedCatalog.map((item) => ({
  ...item,
  availability: item.availability ?? "on_order",
}));

export const snowbikeKits = products.filter((item) => item.category === "snowbike");
export const snowmobiles = products.filter((item) => item.category === "snowmobile");

export function formatPrice(price: number | null) {
  if (price === null) return "Цена по запросу";
  return `${new Intl.NumberFormat("ru-RU").format(price)} ₽`;
}

export function displayPrice(price: number | null) {
  return price === null ? "Цена по запросу" : `Ориентировочная цена: ${formatPrice(price)}`;
}

export function getProductSeoDescription(item: Product) {
  const category = item.category === "snowbike" ? "комплект для эндуро" : "снегоход";
  const details = item.tags.slice(0, 2).join(", ");
  const price = item.price === null ? "цена по запросу" : `ориентир ${formatPrice(item.price)}`;
  const description = `${item.name} — ${category}; ${details}; ${price}. Фото и характеристики SnowEnduro.`;
  if (description.length <= 160) return description;
  return `${description.slice(0, 157).replace(/\s+\S*$/, "").trimEnd()}…`;
}

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}
