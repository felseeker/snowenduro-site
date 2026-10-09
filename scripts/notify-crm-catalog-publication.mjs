const endpoint = process.env.CRM_SYNC_CALLBACK_URL;
const token = process.env.CRM_SYNC_CALLBACK_TOKEN;
const publicationId = process.env.PUBLICATION_ID;
const status = process.env.PUBLICATION_STATUS;

if (!endpoint || !token || !/^[a-f0-9-]{36}$/i.test(publicationId || "") || !["succeeded", "failed"].includes(status || "")) {
  throw new Error("Catalog publication callback is not configured.");
}

const workflowUrl = `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`;
const payload = {
  publication_id: publicationId,
  status,
  workflow_url: workflowUrl,
  error_message: status === "failed" ? "Сборка или публикация сайта завершилась ошибкой. Откройте историю GitHub Actions." : null,
};
const response = await fetch(endpoint, {
  method: "POST",
  headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify(payload),
  signal: AbortSignal.timeout(15_000),
});
if (!response.ok) throw new Error(`CRM publication callback failed with HTTP ${response.status}.`);
