import Link from "next/link";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { managers, site } from "@/data/site";

const footerLinks = [
  { label: "Snowbike", href: "/snowbike" },
  { label: "Каталог снегоходов", href: "/catalog" },
  { label: "Доставка и заказ", href: "/delivery" },
  { label: "Контакты", href: "/about#contacts" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main page-shell">
        <div className="site-footer__brand">
          <BrandMark />
          <p>Snowbike-комплекты для эндуро и снегоходы под заказ из Китая.</p>
          <span className="site-footer__location">{site.location}</span>
        </div>
        <div className="site-footer__links">
          <span className="eyebrow">Навигация</span>
          {footerLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/privacy">Конфиденциальность</Link>
        </div>
        <div className="site-footer__contact">
          <span className="eyebrow">Связаться</span>
          {managers.map((manager) => <div className="site-footer__manager" key={manager.name}>
            <strong>{manager.name}</strong>
            <a href={manager.phoneHref}><Phone size={15} /> {manager.phone}</a>
            <a href={manager.telegramHref} target="_blank" rel="noreferrer"><MessageCircle size={15} /> {manager.telegram} <ArrowUpRight size={14} /></a>
          </div>)}
        </div>
      </div>
      <div className="site-footer__bottom page-shell">
        <span>© {new Date().getFullYear()} SnowEnduro</span>
        <Link href="/privacy">Политика конфиденциальности</Link>
      </div>
    </footer>
  );
}
