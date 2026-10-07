import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { getTelegramHref, site } from "@/data/site";

const footerLinks = [
  { label: "Snowbike", href: "/snowbike" },
  { label: "Каталог снегоходов", href: "/catalog" },
  { label: "Доставка и заказ", href: "/delivery" },
  { label: "О нас и контакты", href: "/about" },
];

export function SiteFooter() {
  const telegramHref = getTelegramHref();
  const configuredTelegram = Boolean(site.telegramUrl.trim());

  return (
    <footer className="site-footer">
      <div className="site-footer__main page-shell">
        <div className="site-footer__brand">
          <BrandMark />
          <p>Техника для зимних маршрутов. Подбор снегоходов и Snowbike-комплектов с доставкой через Владивосток.</p>
          <span className="site-footer__location">{site.location}</span>
        </div>
        <div className="site-footer__links">
          <span className="eyebrow">Навигация</span>
          {footerLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/privacy">Конфиденциальность</Link>
        </div>
        <div className="site-footer__contact">
          <span className="eyebrow">Связаться</span>
          <a href={configuredTelegram ? telegramHref : "/#request"}>
            <MessageCircle size={15} /> {configuredTelegram ? "Telegram" : "Оставить заявку"} <ArrowUpRight size={14} />
          </a>
          {site.phone.trim() ? <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}><Phone size={15} /> {site.phone}</a> : <span><Phone size={15} /> Телефон — уточняется</span>}
          {site.email.trim() ? <a href={`mailto:${site.email}`}><Mail size={15} /> {site.email}</a> : <span><Mail size={15} /> Email — уточняется</span>}
        </div>
      </div>
      <div className="site-footer__bottom page-shell">
        <span>© {new Date().getFullYear()} SnowEnduro</span>
        <span className="site-footer__ai-note">Часть визуальных материалов сайта создана с помощью ИИ. Фото конкретной техники и её комплектацию подтвердим у поставщика до заказа.</span>
        <Link href="/privacy">Политика конфиденциальности</Link>
      </div>
    </footer>
  );
}
