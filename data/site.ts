export const site = {
  name: "SnowEnduro",
  domain: "snowenduro.ru",
  description:
    "Snowbike-комплекты для эндуро, модели снегоходов AODES и информация о заказе зимней техники.",
  location: "Направление поставки — через Владивосток",
  telegramUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
} as const;

export const requestHref = "#request";

export function getTelegramHref(fallback = requestHref) {
  return site.telegramUrl.trim() || fallback;
}
