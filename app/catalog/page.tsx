import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, Snowflake, PackageSearch } from "lucide-react";
import { CatalogExplorer } from "@/components/CatalogExplorer";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { formatPrice, priceNote, snowmobiles } from "@/data/products";

export const metadata: Metadata = {
  title: "Каталог снегоходов из Китая под заказ",
  description: "Каталог WOIDEAL, TaoMotor и AODES: новые и б/у снегоходы, ориентировочные цены и проверка конкретной версии перед заказом.",
  alternates: { canonical: "/catalog" },
  openGraph: { title: "Каталог снегоходов под заказ", description: "Сравните модели WOIDEAL, TaoMotor и AODES. Проверяем конкретные предложения, включая технику с пробегом.", url: "/catalog" },
};

const modelHighlights = [
  { icon: <PackageSearch size={17} />, name: "Компактные модели", text: "WD150 · WD160 · TaoMotor Snowfox", slug: "woideal-wd160" },
  { icon: <Compass size={17} />, name: "Для маршрута и хозяйства", text: "Snowcross 800 WT · AlpineCross 1000", slug: "aodes-snowcross-800-wt" },
  { icon: <Snowflake size={17} />, name: "Широкий выбор AODES", text: "Snowcross 1000 WT · SWT", slug: "aodes-snowcross-1000-wt" },
];

function modelWord(count: number) {
  const lastTwo = count % 100;
  if (lastTwo >= 11 && lastTwo <= 14) return "моделей";
  const last = count % 10;
  if (last === 1) return "модель";
  if (last >= 2 && last <= 4) return "модели";
  return "моделей";
}

const pricedModels = snowmobiles.flatMap((item) => item.price === null ? [] : [item.price]);
const minPrice = Math.min(...pricedModels);

export default function CatalogPage() {
  return (
    <>
      <section className="page-hero page-hero--catalog">
        <Image className="page-hero__image" src="/media/snowmobile-rider.jpg" alt="Снегоход движется по снежному склону" fill loading="eager" sizes="100vw" />
        <div className="page-hero__veil" />
        <div className="page-shell page-hero__inner">
          <div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><span>Снегоходы</span></div>
          <span className="eyebrow"><span className="eyebrow__pip" />Китайские модели / Под заказ</span>
          <h1>Снегоход<br /><em>под ваш маршрут.</em></h1>
          <p>WOIDEAL, TaoMotor и AODES: новые модели, складские остатки и техника с пробегом. По каждому предложению сверяем версию, состояние, наличие и документы.</p>
          <div className="page-hero__actions"><a className="button button--primary" href="#catalog">Сравнить модели <ArrowRight size={17} /></a><Link className="button button--ghost" href="/delivery"><span className="play-mark"><ArrowUpRight size={14} /></span>Как устроена доставка</Link></div>
          <div className="page-hero__facts"><span><Snowflake size={17} />{snowmobiles.length} {modelWord(snowmobiles.length)}</span><span><Compass size={17} />Новые и б/у варианты</span><span><ArrowUpRight size={17} />Ориентир от {formatPrice(minPrice)}</span></div>
        </div>
      </section>

      <section className="section page-shell" id="catalog">
        <SectionHeading eyebrow="Снегоходы под заказ" title="Выберите подходящую модель" description="Ищем новые версии, складские остатки и б/у экземпляры. Уточняйте доступность конкретного предложения и экспортное исполнение до оплаты." />
        <CatalogExplorer />
        <div className="catalog-note"><span className="catalog-note__symbol">i</span><p>{priceNote}</p></div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <SectionHeading eyebrow="По сценарию и версии" title="Сначала — условия поставки" description="Для новых моделей из китайского каталога и техники с пробегом важно подтвердить конкретный экземпляр и его документы." />
          <div className="use-type-grid">
            {modelHighlights.map((item, index) => <Link className="use-type-card" href={`/catalog/${item.slug}`} key={item.slug}><span className="use-type-card__index">0{index + 1}</span><span className="use-type-card__icon">{item.icon}</span><h3>{item.name}</h3><p>{item.text}</p><span className="text-link">Открыть модель <ArrowUpRight size={15} /></span></Link>)}
          </div>
          <div className="catalog-note"><span className="catalog-note__symbol">i</span><p>Новые WD200-A, WD250-A и WD700 показаны в китайском каталоге WOIDEAL. Возможность экспорта именно этой версии и её комплектацию необходимо подтвердить поставщику до заказа. Старые WD200/WD250 в каталог не включены.</p></div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="supplier-band"><div className="supplier-band__image"><Image src="/media/snowmobile-tour.jpg" alt="Зимний маршрут по заснеженной долине" fill sizes="(max-width: 800px) 100vw, 52vw" /><span className="eyebrow">Перед оформлением</span></div><div className="supplier-band__copy"><span className="eyebrow"><span className="eyebrow__pip" />Без сюрпризов</span><h2>Сначала проверить.<br />Потом заказывать.</h2><p>Уточним, доступна ли конкретная комплектация, какие документы входят в предложение и как меняется цена с учётом доставки.</p><Link className="button button--outline" href="/delivery">Порядок заказа <ArrowRight size={16} /></Link></div></div>
      </section>

      <FinalCTA eyebrow="Связаться с менеджерами" title="Проверьте конкретное предложение." description="Наличие, комплектацию, экспортное исполнение и итоговую стоимость нужно подтвердить до оплаты. Форма пока демонстрационная; контакты менеджеров доступны ниже." topic="snowmobile" />
    </>
  );
}
