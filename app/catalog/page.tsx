import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, Snowflake, PackageSearch } from "lucide-react";
import { CatalogExplorer } from "@/components/CatalogExplorer";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { formatPrice, priceNote, snowmobiles } from "@/data/products";

export const metadata: Metadata = {
  title: "Каталог снегоходов AODES под заказ",
  description: "Три модели AODES Snowcross: 800 SWT, 900 WT и 900 SWT. Цены из предложений, наличие и итоговую стоимость подтверждаем перед заказом.",
  alternates: { canonical: "/catalog" },
  openGraph: { title: "Каталог снегоходов AODES под заказ", description: "AODES Snowcross 800 SWT, 900 WT и 900 SWT. Цена и параметры предложений с перепроверкой перед заказом.", url: "/catalog" },
};

const modelHighlights = [
  { icon: <Snowflake size={17} />, name: "Рыхлый снег", text: "900 SWT · гусеница 600 мм", slug: "aodes-snowcross-900-swt" },
  { icon: <Compass size={17} />, name: "Смешанные маршруты", text: "900 WT · гусеница 500 мм", slug: "aodes-snowcross-900-wt" },
  { icon: <PackageSearch size={17} />, name: "Компактнее по объёму", text: "800 SWT · 800 см³", slug: "aodes-snowcross-800-swt" },
];

export default function CatalogPage() {
  return (
    <>
      <section className="page-hero page-hero--catalog">
        <Image className="page-hero__image" src="/media/snowmobile-rider.jpg" alt="Снегоход движется по снежному склону" fill loading="eager" sizes="100vw" />
        <div className="page-hero__veil" />
        <div className="page-shell page-hero__inner">
          <div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><span>Снегоходы</span></div>
          <span className="eyebrow"><span className="eyebrow__pip" />AODES Snowcross / Под заказ</span>
          <h1>Три модели.<br /><em>Три маршрута.</em></h1>
          <p>800 SWT, 900 WT и 900 SWT. Сравните характеристики и цены опубликованных предложений; наличие и итоговую стоимость подтвердим перед оформлением.</p>
          <div className="page-hero__actions"><a className="button button--primary" href="#catalog">Сравнить модели <ArrowRight size={17} /></a><Link className="button button--ghost" href="/delivery"><span className="play-mark"><ArrowUpRight size={14} /></span>Как устроена доставка</Link></div>
          <div className="page-hero__facts"><span><Snowflake size={17} />Три конкретные модели</span><span><Compass size={17} />По разным маршрутам</span><span><ArrowUpRight size={17} />От {formatPrice(Math.min(...snowmobiles.map((item) => item.price)))}</span></div>
        </div>
      </section>

      <section className="section page-shell" id="catalog">
        <SectionHeading eyebrow="Снегоходы AODES Snowcross" title="Выберите подходящую модель" description="Фильтруйте по объёму двигателя и сценарию. Параметры в карточках относятся к опубликованным предложениям." />
        <CatalogExplorer />
        <div className="catalog-note"><span className="catalog-note__symbol">i</span><p>{priceNote}</p></div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <SectionHeading eyebrow="По ширине гусеницы и объёму" title="Разница в нескольких деталях" description="Начните с условий маршрута, затем сравните точные параметры выбранной версии." />
          <div className="use-type-grid">
            {modelHighlights.map((item, index) => <Link className="use-type-card" href={`/catalog/${item.slug}`} key={item.slug}><span className="use-type-card__index">0{index + 1}</span><span className="use-type-card__icon">{item.icon}</span><h3>{item.name}</h3><p>{item.text}</p><span className="text-link">Открыть модель <ArrowUpRight size={15} /></span></Link>)}
          </div>
          <div className="catalog-note"><span className="catalog-note__symbol">i</span><p>Для AODES Snowcross 800 SWT ширина гусеницы в выбранном предложении не указана; перед заказом её нужно подтвердить.</p></div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="supplier-band"><div className="supplier-band__image"><Image src="/media/snowmobile-tour.jpg" alt="Зимний маршрут по заснеженной долине" fill sizes="(max-width: 800px) 100vw, 52vw" /><span className="eyebrow">Перед оформлением</span></div><div className="supplier-band__copy"><span className="eyebrow"><span className="eyebrow__pip" />Без сюрпризов</span><h2>Сначала проверить.<br />Потом заказывать.</h2><p>Уточним, доступна ли конкретная комплектация, какие документы входят в предложение и как меняется цена с учётом доставки.</p><Link className="button button--outline" href="/delivery">Порядок заказа <ArrowRight size={16} /></Link></div></div>
      </section>

      <FinalCTA eyebrow="Заявки временно не принимаются" title="Посмотрите модели и условия." description="Форма внизу сайта демонстрационная: она проверяет поля, но не отправляет запрос и не сохраняет введённые данные." topic="snowmobile" />
    </>
  );
}
