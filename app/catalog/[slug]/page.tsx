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
import { SupplierPlaceholder } from "@/components/SupplierPlaceholder";
import { getSnowmobile, snowmobiles } from "@/data/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

const allImages = [
  { src: "/media/snowmobile-rider.jpg", alt: "Снегоход на снежном горном маршруте", label: "Зимний маршрут" },
  { src: "/media/snowmobile-tour.jpg", alt: "Заснеженная равнина с маршрутами", label: "Открытая местность" },
  { src: "/media/snowmobile-alpine.jpg", alt: "Снегоход в горах", label: "Рельеф" },
  { src: "/media/snowmobile-action.jpg", alt: "Движение по снежному склону", label: "В движении" },
];

const specs = [
  ["Марка и модель", "После подтверждения поставщика"],
  ["Объём и тип двигателя", "Уточняется"],
  ["Мощность", "Уточняется"],
  ["Ходовая часть и гусеница", "Уточняется"],
  ["Количество мест", "Уточняется"],
  ["Заводское оснащение", "После подтверждения поставщика"],
];

const productFaq: FaqItem[] = [
  { question: "Как узнать точную цену?", answer: "Запросим актуальное предложение на выбранную категорию и проверим состав поставки. Цена фиксируется после подтверждения поставщика и согласования условий." },
  { question: "Почему здесь нет технических характеристик?", answer: "Пока не подтверждены конкретная марка и модель. Мы не переносим демонстрационные цифры на реальное предложение." },
  { question: "Можно ли посмотреть фото конкретного снегохода?", answer: "До согласования заказа запросим свежие фото и видео выбранной техники, а также уточним комплектацию и документы." },
  { question: "Можно ли изменить оснащение?", answer: "Возможные варианты зависят от модели и наличия. Сначала получим список доступных опций от поставщика." },
  { question: "Сколько займёт доставка?", answer: "Срок зависит от наличия, маршрута, оформления и города получения. Точную оценку дадим после проверки конкретного заказа." },
];

export function generateStaticParams() {
  return snowmobiles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getSnowmobile(slug);
  if (!item) return { title: "Снегоход под заказ" };
  const canonical = `/catalog/${item.slug}`;
  return {
    title: `${item.name} под заказ`,
    description: `${item.summary} Марка, модель и характеристики уточняются у поставщика.`,
    alternates: { canonical },
    openGraph: { title: `${item.name} под заказ`, description: `${item.summary} Марка, модель и характеристики уточняются у поставщика.`, url: canonical, images: [{ url: item.image, alt: item.imageAlt }] },
  };
}

export default async function SnowmobileProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const item = getSnowmobile(slug);
  if (!item) notFound();

  const similar = snowmobiles.filter((other) => other.slug !== item.slug).slice(0, 3);
  const gallery = [{ src: item.image, alt: item.imageAlt, label: item.eyebrow }, ...allImages.filter((image) => image.src !== item.image).slice(0, 3)];

  return (
    <>
      <section className="product-detail-hero page-shell">
        <div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><Link href="/catalog">Снегоходы</Link><span>/</span><span>{item.name}</span></div>
        <div className="product-detail-hero__grid">
          <ProductGallery images={gallery} />
          <div className="product-summary">
            <span className="eyebrow"><span className="eyebrow__pip" />Снегоход / {item.purpose}</span>
            <h1>{item.name}<br /><em>под заказ.</em></h1>
            <p>{item.summary}</p>
            <div className="product-summary__tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="product-summary__price"><span>Стоимость поставки</span><strong>Цена по запросу</strong><small>После подтверждения поставщика</small></div>
            <div className="product-summary__actions"><a className="button button--primary" href="#request">Запросить подбор <ArrowRight size={16} /></a><Link className="button button--outline" href="/delivery">Условия доставки</Link></div>
            <div className="product-summary__benefits"><span><ShieldCheck size={16} />Проверка поставщиком</span><span><Truck size={16} />Маршрут под заказ</span><span><FileCheck2 size={16} />Условия до оплаты</span></div>
          </div>
        </div>
      </section>

      <section className="spec-strip page-shell" aria-label="Статусы характеристик">
        {["Марка / модель", "Двигатель", "Оснащение", "Наличие", "Цена"].map((label, index) => <div className="spec-strip__item" key={label}><span>0{index + 1}</span><strong>{index === 4 ? "По запросу" : "Уточняется"}</strong><small>{label}</small></div>)}
      </section>

      <section className="section section--alternate">
        <div className="page-shell product-info-grid">
          <div className="product-story-image"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" /><div><span className="eyebrow">{item.eyebrow}</span><h2>Сценарий начинается<br />с вашего маршрута.</h2></div></div>
          <div className="product-info-copy"><span className="eyebrow">Подбор без догадок</span><h2>Сначала задача.<br /><em>Затем конкретная модель.</em></h2><p>Опишем, где и как вы планируете ездить. По ответу поставщика сверим доступные варианты и покажем, что входит в заказ.</p><div className="product-check-list"><span><Check size={15} /> Назначение и местность</span><span><Check size={15} /> Доступная модель и оснащение</span><span><Check size={15} /> Фото и документы перед заказом</span></div><Link className="text-link" href="/catalog">Вернуться к направлениям <ArrowUpRight size={15} /></Link></div>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading eyebrow="После ответа поставщика" title="Техническая карточка" description="Добавим подтверждённые данные именно для модели, доступной к заказу." />
        <div className="spec-card">
          <div className="spec-card__heading"><div><span className="eyebrow">Параметры</span><h3>Пока уточняются</h3></div><span className="spec-status"><span className="status-dot" />Проверяем по предложению</span></div>
          <div className="spec-list">{specs.map(([label, value], index) => <div className="spec-row" key={label}><span className="spec-row__number">0{index + 1}</span><span>{label}</span><strong>{value}</strong></div>)}</div>
        </div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <div className="section-heading section-heading--split"><div className="section-heading__copy"><span className="eyebrow"><span className="eyebrow__pip" />Поставка и маршрут</span><h2>Из Китая<br />к вашему маршруту.</h2><p>Точка отправления, этапы оформления и срок зависят от конкретной модели и условий перевозки.</p></div><Link className="text-link section-heading__link" href="/delivery">Все этапы доставки <ArrowUpRight size={16} /></Link></div>
          <div className="delivery-steps-mini"><div><span>01 / Подтверждение</span><h3>Модель и комплектация</h3><p>Поставщик подтверждает доступность и параметры.</p></div><div><span>02 / Согласование</span><h3>Условия заказа</h3><p>Фиксируем стоимость и документы до оплаты.</p></div><div><span>03 / Маршрут</span><h3>Китай → Россия</h3><p>Способ и срок доставки уточняются отдельно.</p></div><div><span>04 / Получение</span><h3>Ваш регион</h3><p>Передача или внутренняя доставка по согласованию.</p></div></div>
          <SupplierPlaceholder compact />
        </div>
      </section>

      <section className="section page-shell">
        <div className="faq-layout"><div><SectionHeading eyebrow="Перед оформлением" title="Частые вопросы" description="О конкретной модели расскажем после её подтверждения." /><span className="faq-meta"><MapPin size={14} />Доставка через Владивосток</span></div><FaqList items={productFaq} /></div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell"><SectionHeading eyebrow="Другие направления" title="Возможно, подойдёт другое" link={{ href: "/catalog", label: "Весь каталог" }} /><div className="related-products">{similar.map((other, index) => <ProductCard item={other} index={index} compact key={other.slug} />)}</div></div>
      </section>

      <FinalCTA eyebrow={`Запрос по направлению / ${item.name}`} title="Подберём технику под вашу задачу." description="Оставьте контакт и кратко опишите маршрут. Сначала подтвердим доступную модель и условия поставки." topic="snowmobile" />
    </>
  );
}
