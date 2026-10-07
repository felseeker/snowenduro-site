export const site = {
  name: "SnowEnduro",
  domain: "snowenduro.ru",
  description:
    "Snowbike-комплекты для эндуро и снегоходы под заказ из Китая. Подбор, проверка и доставка через Владивосток.",
  location: "Доставка через Владивосток",
  telegramUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
} as const;

export const requestHref = "#request";

export function getTelegramHref(fallback = requestHref) {
  return site.telegramUrl.trim() || fallback;
}

export function formatContact(value: string, placeholder = "Уточняется") {
  return value.trim() || placeholder;
}
