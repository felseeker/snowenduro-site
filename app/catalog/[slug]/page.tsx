import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { FinalCTA } from "@/components/FinalCTA";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { displayPrice, getProduct, getProductSeoDescription, priceNote, products, type Product, type ProductSpec } from "@/data/products";
import { site } from "@/data/site";

type ProductPageProps = { params: Promise<{ slug: string }> };

function isCustomerFacingSpec(spec: ProductSpec) {
  return !/(постав|экспорт|цена|налич|документ|уточн|подтверд|сверить|провер|состояни|предложени|совместимость)/i.test(`${spec.label} ${spec.value}`);
}

function productFaq(item: Product): FaqItem[] {
  const limit = item.summary.match(/(?:Ограничение|Особенность):\s*(.+)$/)?.[1] ?? "Сопоставьте характеристики с маршрутом и условиями езды.";
  return [
    { question: `В чём сильная сторона ${item.name}?`, answer: item.summary.split(/(?:Ограничение|Особенность):/)[0].replace(/^Плюсы:\s*/, "") },
    { question: "Что учитывать при выборе?", answer: limit },
    { question: "Какие параметры важны на снегу?", answer: "Смотрите на мощность двигателя, длину и ширину гусеницы, высоту грунтозацепа и количество посадочных мест. Они определяют тягу, плавучесть и сценарий использования." },
  ];
}

export function generateStaticParams() {
  return products.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getProduct(slug);
  if (!item) return { title: "Зимняя техника под заказ" };
  const canonical = `/catalog/${item.slug}/`;
  const description = getProductSeoDescription(item);
  return {
    title: `${item.name} — характеристики и цена`,
    description,
    alternates: { canonical },
    openGraph: { title: `${item.name} — SnowEnduro`, description, url: canonical, images: [{ url: item.image, alt: item.imageAlt }] },
    twitter: { card: "summary_large_image", title: `${item.name} — характеристики и цена`, description, images: [item.image] },
  };
}

export default async function SnowmobileProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const item = getProduct(slug);
  if (!item) notFound();

  const similar = products.filter((other) => other.category === item.category && other.slug !== item.slug).slice(0, 4);
  const categoryHref = item.category === "snowbike" ? "/snowbike" : "/catalog";
  const categoryLabel = item.category === "snowbike" ? "Snowbike" : "Снегоходы";
  const technicalSpecs = item.specs.filter(isCustomerFacingSpec);
  const highlights = technicalSpecs.slice(0, 5);
  const canonicalUrl = `https://${site.domain}/catalog/${item.slug}/`;
  const imageUrls = [...new Set(item.gallery.map((photo) => new URL(photo.src, `https://${site.domain}`).toString()))];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: item.name,
        description: getProductSeoDescription(item),
        image: imageUrls,
        brand: { "@type": "Brand", name: item.brand },
        category: item.category === "snowbike" ? "Гусеничный комплект для эндуро" : "Снегоход",
        url: canonicalUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: `https://${site.domain}/` },
          { "@type": "ListItem", position: 2, name: categoryLabel, item: `https://${site.domain}${categoryHref}/` },
          { "@type": "ListItem", position: 3, name: item.name, item: canonicalUrl },
        ],
      },
    ],
  };
  const structuredDataJson = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataJson }} />
      <section className="product-detail-hero page-shell">
        <div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><Link href={categoryHref}>{categoryLabel}</Link><span>/</span><span>{item.name}</span></div>
        <div className="product-detail-hero__grid">
          <ProductGallery images={item.gallery} />
          <div className="product-summary">
            <span className="eyebrow"><span className="eyebrow__pip" />{item.brand} / {item.purpose}</span>
            <h1>{item.name}<br /><em>под заказ.</em></h1>
            <p>{item.summary}</p>
            <div className="product-summary__tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="product-summary__price"><span>Цена</span><strong>{displayPrice(item.price)}</strong>{item.price !== null && <small>{priceNote}</small>}</div>
            <div className="product-summary__actions"><Link className="button button--primary" href="/about#contacts">Связаться с менеджерами <ArrowRight size={16} /></Link><Link className="button button--outline" href="/delivery">Условия заказа</Link></div>
          </div>
        </div>
      </section>

      <section className="spec-strip page-shell" aria-label="Ключевые параметры модели">
        {highlights.map((spec, index) => <div className="spec-strip__item" key={spec.label}><span>0{index + 1}</span><strong>{spec.value}</strong><small>{spec.label}</small></div>)}
      </section>

      <section className="section section--alternate">
        <div className="page-shell product-info-grid">
          <div className={`product-story-image${item.imageTreatment === "cutout" ? " product-story-image--cutout" : ""}${item.imageTreatment === "scene" ? " product-story-image--scene" : ""}`}>
            {item.imageTreatment === "scene" && <Image className="product-story-image__ambient" src={item.image} alt="" aria-hidden="true" fill sizes="(max-width: 800px) 100vw, 50vw" />}
            <Image className={item.imageTreatment === "scene" ? "product-story-image__scene" : undefined} src={item.image} alt={item.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" />
            <div><span className="eyebrow">{item.eyebrow}</span><h2>{item.useCase === "Глубокий снег" ? <>Для рыхлого<br />зимнего снега.</> : <>Для смешанных<br />зимних маршрутов.</>}</h2></div>
          </div>
            <div className="product-info-copy"><span className="eyebrow">Плюсы и особенности</span><h2>Характер<br /><em>{item.name}.</em></h2><p>{item.summary}</p><Link className="text-link" href={categoryHref}>Другие модели категории <ArrowUpRight size={15} /></Link></div>
        </div>
      </section>

      <section className="section page-shell">
          <SectionHeading eyebrow="Характеристики модели" title="Технические данные" description="Основные параметры, которые помогают сравнить технику и подобрать её под свой маршрут." />
        <div className="spec-card">
          <div className="spec-card__heading"><div><span className="eyebrow">{item.name}</span><h3>Характеристики</h3></div></div>
          <div className="spec-list">{technicalSpecs.map((spec, index) => <div className="spec-row" key={spec.label}><span className="spec-row__number">0{index + 1}</span><span>{spec.label}</span><strong>{spec.value}</strong></div>)}</div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="faq-layout"><div><SectionHeading eyebrow="О модели" title="Особенности и выбор" description="Коротко о сильных сторонах и параметрах, которые влияют на поведение техники на снегу." /></div><FaqList items={productFaq(item)} /></div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell"><SectionHeading eyebrow="Другие модели" title="Сравните варианты" link={{ href: categoryHref, label: "Вся категория" }} /><div className="related-products">{similar.map((other, index) => <ProductCard item={other} index={index} compact key={other.slug} />)}</div></div>
      </section>

      <FinalCTA eyebrow="Подбор техники" title="Выберите модель под свой маршрут." description="Сравните характер техники, мощность и гусеницу. Менеджеры подскажут, какая конфигурация лучше подходит под ваши задачи." topic={item.category} />
    </>
  );
}
