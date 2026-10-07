import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Compass, Fish, Mountain, Snowflake } from "lucide-react";
import { CatalogExplorer } from "@/components/CatalogExplorer";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { SupplierPlaceholder } from "@/components/SupplierPlaceholder";

export const metadata: Metadata = {
  title: "Каталог снегоходов под заказ",
  description: "Направления под разные зимние задачи. Марку, модель, комплектацию и цену подтверждаем у поставщика до заказа.",
  alternates: { canonical: "/catalog" },
  openGraph: { title: "Каталог снегоходов под заказ", description: "Направления под разные зимние задачи. Марку, модель, комплектацию и цену подтверждаем у поставщика до заказа.", url: "/catalog" },
};

const useTypes = [
  { icon: <Compass size={17} />, name: "Путешествия", text: "Для маршрутов и дальних зимних выездов.", slug: "touring" },
  { icon: <BriefcaseBusiness size={17} />, name: "Работа", text: "Для практичных задач и движения по местности.", slug: "utility" },
  { icon: <Fish size={17} />, name: "Охота и рыбалка", text: "Для поездок к удалённым местам и отдыха.", slug: "hunting" },
  { icon: <Mountain size={17} />, name: "Активное катание", text: "Для рельефа и динамичных зимних маршрутов.", slug: "mountain" },
];

export default function CatalogPage() {
  return (
    <>
      <section className="page-hero page-hero--catalog">
        <Image className="page-hero__image" src="/media/snowmobile-rider.jpg" alt="Снегоход движется по снежному склону" fill loading="eager" sizes="100vw" />
        <div className="page-hero__veil" />
        <div className="page-shell page-hero__inner">
          <div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><span>Снегоходы</span></div>
          <span className="eyebrow"><span className="eyebrow__pip" />Каталог / Под заказ</span>
          <h1>Снегоход<br />под ваш <em>маршрут.</em></h1>
          <p>Подбор по назначению, местности и задачам. Марка, модель, характеристики и стоимость — после подтверждения поставщика.</p>
          <div className="page-hero__actions"><a className="button button--primary" href="#catalog">Посмотреть направления <ArrowRight size={17} /></a><Link className="button button--ghost" href="/delivery"><span className="play-mark"><ArrowUpRight size={14} /></span>Как устроена доставка</Link></div>
          <div className="page-hero__facts"><span><Snowflake size={17} />Зимние категории</span><span><Compass size={17} />Подбор по задачам</span><span><ArrowUpRight size={17} />Цена по запросу</span></div>
        </div>
      </section>

      <section className="section page-shell" id="catalog">
        <SectionHeading eyebrow="Сначала задача" title="Найдите свой формат" description="Категории помогают начать подбор. Фактические модели и параметры появляются после ответа поставщика." />
        <CatalogExplorer />
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <SectionHeading eyebrow="По типу маршрута" title="От первого выезда до рабочего дня" description="Выберите задачу — обсудим условия, наличие и доступные модели без предположений о характеристиках." />
          <div className="use-type-grid">
            {useTypes.map((item, index) => <Link className="use-type-card" href={`/catalog/${item.slug}`} key={item.name}><span className="use-type-card__index">0{index + 1}</span><span className="use-type-card__icon">{item.icon}</span><h3>{item.name}</h3><p>{item.text}</p><span className="text-link">Подобрать <ArrowUpRight size={15} /></span></Link>)}
          </div>
          <div className="catalog-note"><span className="catalog-note__symbol">i</span><p>Карточки помогают выбрать сценарий. Фото, марку, технические характеристики, комплектацию, цену и сроки по конкретному предложению подтвердим у поставщика.</p></div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="supplier-band"><div className="supplier-band__image"><Image src="/media/snowmobile-tour.jpg" alt="Зимний маршрут в снежной долине" fill sizes="(max-width: 800px) 100vw, 52vw" /><span className="eyebrow">Зимний маршрут</span></div><div className="supplier-band__copy"><span className="eyebrow"><span className="eyebrow__pip" />До подтверждения заказа</span><h2>Сначала — факты.<br />Потом — техника.</h2><p>По выбранной модели запросим у поставщика фото, видео, документы, доступную комплектацию и условия поставки.</p><Link className="button button--outline" href="/delivery">Посмотреть порядок заказа <ArrowRight size={16} /></Link></div></div>
          <SupplierPlaceholder compact />
      </section>

      <FinalCTA title="Поможем выбрать снегоход." description="Расскажите, для чего нужна техника и в каком регионе планируете её использовать. Начнём с подбора и проверки предложений." topic="snowmobile" />
    </>
  );
}
