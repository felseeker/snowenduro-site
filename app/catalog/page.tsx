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
  description: "Снегоходы WOIDEAL, TaoMotor и AODES для коротких поездок, зимних маршрутов и хозяйственных задач. Сравните характеристики и ориентировочные цены.",
  alternates: { canonical: "/catalog" },
  openGraph: { title: "Каталог снегоходов под заказ", description: "Компактные и полноразмерные модели WOIDEAL, TaoMotor и AODES для разных зимних маршрутов.", url: "/catalog" },
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
          <p>Компактные снегоходы для коротких поездок и полноразмерные модели для зимних маршрутов, глубокого снега и хозяйственных задач. Сравните двигатель, гусеницу и характер каждой машины.</p>
          <div className="page-hero__actions"><a className="button button--primary" href="#catalog">Сравнить модели <ArrowRight size={17} /></a><Link className="button button--ghost" href="/delivery"><span className="play-mark"><ArrowUpRight size={14} /></span>Как устроена доставка</Link></div>
          <div className="page-hero__facts"><span><Snowflake size={17} />{snowmobiles.length} {modelWord(snowmobiles.length)}</span><span><Compass size={17} />Компактные и полноразмерные</span><span><ArrowUpRight size={17} />Ориентир от {formatPrice(minPrice)}</span></div>
        </div>
      </section>

      <section className="section page-shell" id="catalog">
        <SectionHeading eyebrow="Каталог снегоходов" title="Выберите подходящую модель" description="Сравните мощность, размер гусеницы и посадку. У каждой модели — ориентировочная цена и особенности для зимнего маршрута." />
        <CatalogExplorer />
        <div className="catalog-note"><span className="catalog-note__symbol">i</span><p>{priceNote}</p></div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <SectionHeading eyebrow="По размеру и назначению" title="Разный характер. Одна зима." description="От компактных двухместных машин до полноразмерных платформ с мощными двигателями и широкой гусеницей." />
          <div className="use-type-grid">
            {modelHighlights.map((item, index) => <Link className="use-type-card" href={`/catalog/${item.slug}`} key={item.slug}><span className="use-type-card__index">0{index + 1}</span><span className="use-type-card__icon">{item.icon}</span><h3>{item.name}</h3><p>{item.text}</p><span className="text-link">Открыть модель <ArrowUpRight size={15} /></span></Link>)}
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="supplier-band"><div className="supplier-band__image"><Image src="/media/snowmobile-tour.jpg" alt="Снегоход на зимнем маршруте в горах" fill sizes="(max-width: 800px) 100vw, 52vw" /><span className="eyebrow">Выбор по сценарию</span></div><div className="supplier-band__copy"><span className="eyebrow"><span className="eyebrow__pip" />От компактных до утилитарных</span><h2>Подберите технику<br />под свой маршрут.</h2><p>Компактные модели легче и манёвреннее. Полноразмерные увереннее идут по рыхлому снегу и подходят для длинных маршрутов, но требуют больше пространства.</p><Link className="button button--outline" href="#catalog">Сравнить характеристики <ArrowRight size={16} /></Link></div></div>
      </section>

      <FinalCTA eyebrow="Подбор по задаче" title="Найдите снегоход под свой маршрут." description="Расскажите, где и как планируете ездить. Менеджеры помогут сопоставить ваши задачи с классом, мощностью и гусеницей модели." topic="snowmobile" />
    </>
  );
}
