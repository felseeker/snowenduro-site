import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, FileCheck2, MapPin, MessageCircle, PackageSearch, ShieldCheck, Truck } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { SupplierPlaceholder } from "@/components/SupplierPlaceholder";
import { formatContact, getTelegramHref, site } from "@/data/site";

export const metadata: Metadata = {
  title: "О SnowEnduro и контакты",
  description: "Работаем с заказами на Snowbike-комплекты и снегоходы под заказ. Рассказываем, как подбираем технику и что подтверждаем до покупки.",
  alternates: { canonical: "/about" },
  openGraph: { title: "О SnowEnduro и контакты", description: "Работаем с заказами на Snowbike-комплекты и снегоходы под заказ. Рассказываем, как подбираем технику и что подтверждаем до покупки.", url: "/about" },
};

const workflow = [
  { icon: <PackageSearch size={18} />, title: "Подбираем под запрос", text: "Сначала понимаем задачу, бюджетный диапазон и город получения." },
  { icon: <BadgeCheck size={18} />, title: "Запрашиваем подтверждение", text: "Проверяем модель, наличие, характеристики и доступную комплектацию у поставщика." },
  { icon: <FileCheck2 size={18} />, title: "Согласуем до заказа", text: "Фиксируем условия и доступные документы после проверки конкретного предложения." },
  { icon: <Truck size={18} />, title: "Сопровождаем маршрут", text: "Организуем поставку через Владивосток и обсуждаем дальнейшую доставку." },
];

export default function AboutPage() {
  const telegramReady = Boolean(site.telegramUrl.trim());

  return (
    <>
      <section className="page-hero page-hero--about">
        <Image className="page-hero__image" src="/media/snowbike-ai-hero.jpg" alt="Snowbike на зимнем горном маршруте" fill loading="eager" sizes="100vw" />
        <div className="page-hero__veil" />
        <div className="page-shell page-hero__inner">
          <div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><span>О нас</span></div>
          <span className="eyebrow"><span className="eyebrow__pip" />SnowEnduro / Под заказ</span>
          <h1>Мы работаем<br />для тех, кто <em>едет дальше.</em></h1>
          <p>Подбираем снегоходы из Китая и Snowbike-комплекты для эндуро. Работаем под заказ, поэтому каждое предложение проверяем отдельно.</p>
          <div className="page-hero__actions"><a className="button button--primary" href="#contacts">Связаться <ArrowRight size={17} /></a><Link className="button button--ghost" href="/delivery"><span className="play-mark"><Truck size={14} /></span>Посмотреть процесс</Link></div>
          <div className="page-hero__facts"><span><ShieldCheck size={17} />Без собственного склада</span><span><FileCheck2 size={17} />Проверка до заказа</span><span><MapPin size={17} />Через Владивосток</span></div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="about-intro-grid"><div><span className="eyebrow"><span className="eyebrow__pip" />Что мы делаем</span><h2>Не склад техники.<br /><em>Подбор и поставка.</em></h2></div><div><p className="about-intro-grid__lead">Мы не держим технику на собственном складе. Ищем подходящее предложение, проверяем детали у поставщика и сопровождаем согласованный заказ.</p><p>Цены, характеристики, наличие и сроки не переносим из демонстрационных макетов. Они появляются на сайте только после подтверждения конкретной модели.</p><Link className="text-link" href="/catalog">Выбрать направление <ArrowUpRight size={15} /></Link></div></div>
        <div className="about-image-feature"><Image src="/media/snowmobile-rider.jpg" alt="Зимний маршрут на снегоходе" fill sizes="100vw" /><div className="about-image-feature__veil" /><div className="about-image-feature__copy"><span className="eyebrow">SnowEnduro / зима</span><h2>Техника — под<br />ваш маршрут.</h2><p>Снегоходы под заказ и Snowbike-комплекты для эндуро.</p></div><span className="about-image-feature__meta">Подбор · подтверждение · доставка</span></div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <SectionHeading eyebrow="Наш процесс" title="Четыре этапа до ясности" description="Показываем, что известно, и отдельно отмечаем, что нужно подтвердить." />
          <div className="workflow-grid">{workflow.map((item, index) => <article className="workflow-card" key={item.title}><span className="workflow-card__top"><b>0{index + 1}</b><span>{item.icon}</span></span><span className="workflow-card__line" /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          <div className="business-model-note"><span className="business-model-note__icon"><ShieldCheck size={20} /></span><div><span className="eyebrow">Работаем под заказ</span><h3>Каждое предложение проверяется отдельно.</h3><p>Перед оформлением уточняем у поставщика фактическую модель, состав, доступные документы и условия отправки.</p></div><Link className="text-link" href="/delivery">Этапы заказа <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="section-heading section-heading--split"><div className="section-heading__copy"><span className="eyebrow"><span className="eyebrow__pip" />Подтверждаем, а не угадываем</span><h2>Фото и условия<br />до заказа.</h2><p>Запросим доступные материалы выбранной техники, чтобы вы видели актуальное предложение.</p></div><span className="route-stamp">Китай → <strong>Владивосток</strong></span></div>
        <div className="about-media-grid"><div className="about-media-grid__main"><Image src="/media/snowmobile-tour.jpg" alt="Снежная равнина и зимние маршруты" fill sizes="(max-width: 800px) 100vw, 53vw" /><span className="eyebrow">Зимний маршрут</span></div><div className="about-media-grid__stack"><div><Image src="/media/snowmobile-alpine.jpg" alt="Снегоход на горном склоне" fill sizes="(max-width: 800px) 100vw, 28vw" /><span>Маршрут и рельеф</span></div><div><Image src="/media/snowmobile-action.jpg" alt="Снегоход в движении" fill sizes="(max-width: 800px) 100vw, 28vw" /><span>Зимний сценарий</span></div></div></div>
        <SupplierPlaceholder />
      </section>

      <section className="section section--alternate" id="contacts">
        <div className="page-shell">
          <SectionHeading eyebrow="Контакты" title="Давайте обсудим маршрут" description="Связаться можно удобным способом. Контактные данные добавим перед публикацией." />
          <div className="contact-grid">
            <article className="contact-card"><span className="contact-card__icon"><MessageCircle size={19} /></span><span className="eyebrow">Мессенджер</span><h3>Telegram</h3><p>{telegramReady ? "Напишите нам, чтобы обсудить задачу." : "Telegram-ссылка будет добавлена в настройках сайта."}</p>{telegramReady ? <a className="button button--outline" href={getTelegramHref()}>Открыть Telegram <ArrowUpRight size={15} /></a> : <a className="button button--outline" href="#request">Оставить запрос <ArrowUpRight size={15} /></a>}</article>
            <article className="contact-card"><span className="contact-card__icon"><MapPin size={19} /></span><span className="eyebrow">Регион</span><h3>Владивосток</h3><p>Точка маршрута и передачи техники уточняется для конкретного заказа.</p><Link className="text-link" href="/delivery">Посмотреть маршрут <ArrowUpRight size={15} /></Link></article>
            <article className="contact-card"><span className="contact-card__icon"><MessageCircle size={19} /></span><span className="eyebrow">Телефон</span><h3>{formatContact(site.phone)}</h3><p>Подключим номер, по которому можно обсудить подбор и доставку.</p></article>
            <article className="contact-card"><span className="contact-card__icon"><FileCheck2 size={19} /></span><span className="eyebrow">Электронная почта</span><h3>{formatContact(site.email)}</h3><p>Для коммерческих предложений и вопросов по документам.</p></article>
          </div>
          <div className="contact-route-card"><div className="contact-route-card__map"><div className="route-map-lines" /><span className="route-map-node route-map-node--china">Китай</span><span className="route-map-node route-map-node--ussuriysk">Уссурийск</span><span className="route-map-node route-map-node--vladivostok">Владивосток</span></div><div className="contact-route-card__copy"><span className="eyebrow">Восточные ворота</span><h3>Китай — Уссурийск — Владивосток</h3><p>География заказа: маршрут и точка передачи подтверждаются после выбора модели.</p><Link className="text-link" href="/delivery">Узнать о доставке <ArrowRight size={15} /></Link></div></div>
        </div>
      </section>

      <FinalCTA eyebrow="Связаться с SnowEnduro" title="Давайте подберём вашу технику." description="Напишите, что ищете, где планируете ездить и в каком городе хотите получить заказ." />
    </>
  );
}
