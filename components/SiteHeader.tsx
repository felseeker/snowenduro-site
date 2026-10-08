"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";

const navItems = [
  { label: "Snowbike", href: "/snowbike" },
  { label: "Снегоходы", href: "/catalog" },
  { label: "Доставка", href: "/delivery" },
  { label: "Контакты", href: "/about" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Перейти к содержанию</a>
      <header className="site-header">
        <div className="site-header__inner">
          <BrandMark />
          <nav className="site-nav" aria-label="Основная навигация">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link key={item.href} href={item.href} className={active ? "is-active" : ""} aria-current={active ? "page" : undefined}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="site-header__actions">
            <Link className="button button--small button--outline header-cta" href="/about#contacts">
              Подобрать технику <ArrowUpRight size={15} strokeWidth={1.8} />
            </Link>
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>
      <div id="mobile-navigation" className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Мобильная навигация">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              <span className="mobile-nav__index">0{index + 1}</span>
              <span>{item.label}</span>
              <ArrowUpRight size={17} strokeWidth={1.6} />
            </Link>
          ))}
          <Link className="button button--primary mobile-nav__cta" href="/about#contacts" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            Подобрать технику <ArrowUpRight size={16} />
          </Link>
        </nav>
        <span className="mobile-nav__note">Зимняя техника под ваш маршрут</span>
      </div>
      {menuOpen && <button className="mobile-nav__scrim" onClick={closeMenu} aria-label="Закрыть меню" tabIndex={-1} />}
    </>
  );
}
