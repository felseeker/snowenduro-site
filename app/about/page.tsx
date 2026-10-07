import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileCheck2, MapPin, MessageCircle, PackageSearch, ShieldCheck, Truck } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroVideo } from "@/components/HeroVideo";
import { RouteMap } from "@/components/RouteMap";
import { SectionHeading } from "@/components/SectionHeading";
import { getTelegramHref, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Подбор техники и контакты",
  description: "Направления SnowEnduro: Snowbike-комплекты для эндуро и снегоходы AODES под заказ. Сравнение предложений и порядок уточнения поставки.",
  alternates: { canonical: "/about" },
  openGraph: { title: "Подбор техники и контакты", description: "Snowbike-комплекты для эндуро и снегоходы AODES под заказ.", url: "/about" },
};

const beforeOrder = [
  { icon: <PackageSearch size={18} />, title: "Модель и наличие", text: "Повторно сверить конкретное предложение и возможность заказа." },
  { icon: <FileCheck2 size={18} />, title: "Комплектация и документы", text: "Проверить, что входит в поставку и какие документы предоставляет продавец." },
  { icon: <ShieldCheck size={18} />, title: "Итоговая стоимость", text: "Уточнить цену техники, доставки и оформления до любого платежа." },
  { icon: <Truck size={18} />, title: "Маршрут получения", text: "Согласовать точки и способ доставки для выбранной модели и города." },
];

export default function AboutPage() {
  const telegramReady = Boolean(site.telegramUrl.trim());
  const phoneReady = Boolean(site.phone.trim());
  const emailReady = Boolean(site.email.trim());
  const hasContact = telegramReady || phoneReady || emailReady;

  return (
    <>
      <section className="page-hero page-hero--about">
        <Image className="page-hero__image" src="/media/snowbike-ai-hero.jpg" alt="Snowbike на зимнем маршруте" fill loading="eager" sizes="100vw" />
        <div className="page-hero__veil" />
        <div className="page-shell page-hero__inner">
          <div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><span>Контакты</span></div>
          <span className="eyebrow"><span className="eyebrow__pip" />SnowEnduro / Зимняя техника</span>
          <h1>Техника для<br /><em>зимних маршрутов.</em></h1>
          <p>На сайте собраны два направления: Snowbike-комплекты для эндуро и конкретные модели снегоходов AODES под заказ.</p>
          <div className="page-hero__actions"><Link className="button button--primary" href="/catalog">Каталог снегоходов <ArrowRight size={17} /></Link><Link className="button button--ghost" href="/delivery"><span className="play-mark"><Truck size={14} /></span>Порядок заказа</Link></div>
          <div className="page-hero__facts"><span><ShieldCheck size={17} />Проверка предложения</span><span><FileCheck2 size={17} />Условия до оформления</span><span><MapPin size={17} />Маршрут по согласованию</span></div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="about-intro-grid"><div><span className="eyebrow"><span className="eyebrow__pip" />О проекте</span><h2>Два направления.<br /><em>Один зимний сезон.</em></h2></div><div><p className="about-intro-grid__lead">SnowEnduro — каталог для выбора техники под зимние маршруты.</p><p>В карточках снегоходов указаны параметры и цены опубликованных предложений. До заказа их нужно заново проверить: наличие, комплектацию, документы, доставку и итоговую стоимость.</p><Link className="text-link" href="/catalog">Сравнить снегоходы <ArrowUpRight size={15} /></Link></div></div>
        <div className="about-image-feature"><Image src="/media/snowmobile-rider.jpg" alt="Снегоход на заснеженном зимнем маршруте" fill sizes="100vw" /><div className="about-image-feature__veil" /><div className="about-image-feature__copy"><span className="eyebrow">Зимние маршруты / SnowEnduro</span><h2>Выбор начинается<br />с вашей задачи.</h2><p>Эндуро со Snowbike-комплектом или снегоход под заказ.</p></div><span className="about-image-feature__meta">Snowbike · снегоходы · доставка</span></div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <SectionHeading eyebrow="Перед оформлением" title="Что проверить до оплаты" description="Эти условия относятся к конкретной модели и заказу, поэтому их важно согласовать заранее." />
          <div className="workflow-grid">{beforeOrder.map((item, index) => <article className="workflow-card" key={item.title}><span className="workflow-card__top"><b>0{index + 1}</b><span>{item.icon}</span></span><span className="workflow-card__line" /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="section-heading section-heading--split"><div className="section-heading__copy"><span className="eyebrow"><span className="eyebrow__pip" />Восточное направление</span><h2>Китай — Уссурийск — Владивосток.</h2><p>На схеме показан возможный путь поставки. Фактический маршрут и точку получения согласуем для конкретного предложения.</p></div><Link className="text-link section-heading__link" href="/delivery">Этапы и условия доставки <ArrowUpRight size={16} /></Link></div>
        <div className="contact-route-card"><RouteMap /><div className="contact-route-card__copy"><span className="eyebrow">Маршрут по согласованию</span><h3>Без срока до подтверждения.</h3><p>Сначала сверяем модель и предложение, затем обсуждаем перевозку и получение в вашем городе.</p><Link className="text-link" href="/delivery">Подробнее о доставке <ArrowRight size={15} /></Link></div></div>
      </section>

      <section className="section section--alternate" id="contacts">
        <div className="page-shell">
          <SectionHeading eyebrow="Контакты" title={hasContact ? "Выберите удобный канал" : "Канал связи пока не подключён"} description={hasContact ? "Контакты, доступные сейчас." : "Пока не выбран канал для приёма заявок. Форма ниже только проверяет поля и никуда не отправляет данные."} />
          <div className="contact-grid">
            {telegramReady && <article className="contact-card"><span className="contact-card__icon"><MessageCircle size={19} /></span><span className="eyebrow">Мессенджер</span><h3>Telegram</h3><p>Открыть чат для обсуждения выбора техники.</p><a className="button button--outline" href={getTelegramHref()}>Открыть Telegram <ArrowUpRight size={15} /></a></article>}
            {phoneReady && <article className="contact-card"><span className="contact-card__icon"><MessageCircle size={19} /></span><span className="eyebrow">Телефон</span><h3>{site.phone}</h3><p>Позвонить по вопросу модели и заказа.</p><a className="text-link" href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>Позвонить <ArrowUpRight size={15} /></a></article>}
            {emailReady && <article className="contact-card"><span className="contact-card__icon"><FileCheck2 size={19} /></span><span className="eyebrow">Электронная почта</span><h3>{site.email}</h3><p>Написать по выбору техники и условиям заказа.</p><a className="text-link" href={`mailto:${site.email}`}>Написать <ArrowUpRight size={15} /></a></article>}
            {!hasContact && <article className="contact-card contact-card--empty"><span className="contact-card__icon"><MessageCircle size={19} /></span><span className="eyebrow">Временно</span><h3>Заявки не принимаются</h3><p>Демонстрационная форма позволяет посмотреть обязательные поля. После проверки данные не сохраняются и сообщение не отправляется.</p><a className="button button--outline" href="#request">Посмотреть форму <ArrowUpRight size={15} /></a></article>}
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="about-motion-film">
          <div className="about-motion-film__visual">
            <HeroVideo />
            <span className="about-motion-film__veil" />
            <div className="about-motion-film__copy"><span className="eyebrow"><span className="eyebrow__pip" />Сезон в движении</span><h2>Зима не ставит<br /><em>маршрут на паузу.</em></h2></div>
            <span className="about-motion-film__meta">ЗИМНИЕ МАРШРУТЫ / SNOWENDURO</span>
          </div>
          <div className="about-motion-film__side"><span className="eyebrow">Сначала — направление</span><h3>Snowbike или снегоход?</h3><p>Сравните зимний комплект для своего эндуро и готовые модели в каталоге.</p><Link className="text-link" href="/snowbike">Как устроен Snowbike <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <FinalCTA eyebrow="Запросы временно отключены" title="Сначала посмотрите варианты." description="Форма ниже демонстрационная: она проверит заполнение, но не отправит заявку и не сохранит контактные данные." />
    </>
  );
}
