import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, FileCheck2, MapPin, ShieldCheck, Truck } from "lucide-react";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { FinalCTA } from "@/components/FinalCTA";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { formatPrice, getSnowmobile, priceNote, snowmobiles } from "@/data/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

const productFaq: FaqItem[] = [
  { question: "Цена на странице окончательная?", answer: "Это цена опубликованного предложения. Перед оформлением нужно повторно проверить наличие, комплектацию, доставку и итоговую стоимость." },
  { question: "Модель точно есть в наличии?", answer: "Статус предложения может измениться. Фактическое наличие и срок поставки нужно подтвердить до заказа." },
  { question: "На фотографиях именно эта модель?", answer: "Фотографии относятся к модели. Цвет и доступную комплектацию конкретной поставки следует подтвердить отдельно." },
  { question: "Какие документы идут с техникой?", answer: "Состав документов зависит от конкретного предложения. Его нужно согласовать до оплаты." },
  { question: "Сколько займёт доставка?", answer: "Срок зависит от наличия, маршрута, оформления и города получения. Его можно оценить после подтверждения этих условий." },
];

export function generateStaticParams() {
  return snowmobiles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getSnowmobile(slug);
  if (!item) return { title: "Снегоход AODES Snowcross" };
  const canonical = `/catalog/${item.slug}`;
  const description = `${item.summary} Цена предложения — ${formatPrice(item.price)}. Актуальность проверяется перед оформлением.`;
  return {
    title: `${item.name} — цена и характеристики`,
    description,
    alternates: { canonical },
    openGraph: { title: `${item.name} под заказ`, description, url: canonical, images: [{ url: item.image, alt: item.imageAlt }] },
  };
}

export default async function SnowmobileProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const item = getSnowmobile(slug);
  if (!item) notFound();

  const similar = snowmobiles.filter((other) => other.slug !== item.slug);
  const highlights = [
    { label: "Двигатель", value: item.engine },
    { label: "Мощность", value: item.horsepower },
    { label: "Гусеница", value: item.track },
    { label: "Посадка", value: item.seats },
    { label: "Статус", value: item.availability },
  ];

  return (
    <>
      <section className="product-detail-hero page-shell">
        <div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><Link href="/catalog">Снегоходы</Link><span>/</span><span>{item.name}</span></div>
        <div className="product-detail-hero__grid">
          <ProductGallery images={item.gallery} />
          <div className="product-summary">
            <span className="eyebrow"><span className="eyebrow__pip" />AODES Snowcross / {item.purpose}</span>
            <h1>{item.name}<br /><em>под заказ.</em></h1>
            <p>{item.summary}</p>
            <div className="product-summary__tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="product-summary__price"><span>Цена предложения</span><strong>{formatPrice(item.price)}</strong><small>{priceNote}</small></div>
            <div className="product-summary__actions"><a className="button button--primary" href="#request">Посмотреть форму <ArrowRight size={16} /></a><Link className="button button--outline" href="/delivery">Условия заказа</Link></div>
            <div className="product-summary__benefits"><span><ShieldCheck size={16} />Наличие перепроверить</span><span><Truck size={16} />Маршрут согласовать</span><span><FileCheck2 size={16} />Условия до оплаты</span></div>
          </div>
        </div>
      </section>

      <section className="spec-strip page-shell" aria-label="Ключевые параметры предложения">
        {highlights.map((spec, index) => <div className="spec-strip__item" key={spec.label}><span>0{index + 1}</span><strong>{spec.value}</strong><small>{spec.label}</small></div>)}
      </section>

      <section className="section section--alternate">
        <div className="page-shell product-info-grid">
          <div className="product-story-image"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" /><div><span className="eyebrow">{item.eyebrow}</span><h2>{item.useCase === "Глубокий снег" ? <>Для рыхлого<br />зимнего снега.</> : <>Для смешанных<br />зимних маршрутов.</>}</h2></div></div>
          <div className="product-info-copy"><span className="eyebrow">О модели</span><h2>{item.name}<br /><em>{formatPrice(item.price)}</em></h2><p>{item.summary} Цена и наличие относятся к опубликованному предложению, условия нужно проверить перед заказом.</p><div className="product-check-list"><span><Check size={15} /> Характеристики указаны в карточке</span><span><Check size={15} /> Наличие проверяется заново</span><span><Check size={15} /> Итоговая стоимость согласуется до оплаты</span></div><Link className="text-link" href="/catalog">Сравнить с другими моделями <ArrowUpRight size={15} /></Link></div>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading eyebrow="Параметры предложения" title="Что известно о модели" description="Значения приведены для указанной версии. Перед заказом перепроверьте спецификацию конкретной поставки." />
        <div className="spec-card">
          <div className="spec-card__heading"><div><span className="eyebrow">{item.name}</span><h3>Технические характеристики</h3></div><span className="spec-status"><span className="status-dot" />Нужна проверка перед заказом</span></div>
          <div className="spec-list">{item.specs.map((spec, index) => <div className="spec-row" key={spec.label}><span className="spec-row__number">0{index + 1}</span><span>{spec.label}</span><strong>{spec.value}</strong></div>)}</div>
        </div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <div className="section-heading section-heading--split"><div className="section-heading__copy"><span className="eyebrow"><span className="eyebrow__pip" />Доставка под заказ</span><h2>Маршрут зависит<br />от предложения.</h2><p>Точку отправления, оформление и срок нужно согласовать для конкретной модели и города получения.</p></div><Link className="text-link section-heading__link" href="/delivery">Все этапы и условия <ArrowUpRight size={16} /></Link></div>
          <div className="delivery-steps-mini"><div><span>01 / Модель</span><h3>Сверить предложение</h3><p>Повторно проверить комплектацию и наличие.</p></div><div><span>02 / Условия</span><h3>Узнать итоговую цену</h3><p>Согласовать состав и стоимость до оплаты.</p></div><div><span>03 / Доставка</span><h3>Уточнить маршрут</h3><p>Выбрать перевозку и точку получения.</p></div><div><span>04 / Получение</span><h3>Проверить документы</h3><p>Сверить документы и порядок передачи.</p></div></div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="faq-layout"><div><SectionHeading eyebrow="Перед заказом" title="Частые вопросы" description="Цена и условия на странице относятся к опубликованному предложению." /><span className="faq-meta"><MapPin size={14} />Маршрут согласуется отдельно</span></div><FaqList items={productFaq} /></div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell"><SectionHeading eyebrow="Другие модели" title="Сравните варианты" link={{ href: "/catalog", label: "Весь каталог" }} /><div className="related-products">{similar.map((other, index) => <ProductCard item={other} index={index} compact key={other.slug} />)}</div></div>
      </section>

      <FinalCTA eyebrow="Заявки временно не принимаются" title="Изучите условия перед выбором." description="Форма ниже демонстрационная: она проверяет заполнение, но не отправляет сообщение и не сохраняет введённые данные." topic="snowmobile" />
    </>
  );
}
