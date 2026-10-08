import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Bike, Check, Compass, Snowflake, Truck } from "lucide-react";
import { DeliveryRoute } from "@/components/DeliveryRoute";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroVideo } from "@/components/HeroVideo";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TransformationStory } from "@/components/TransformationStory";
import { snowmobiles } from "@/data/products";

export const metadata: Metadata = {
  title: "Snowbike и снегоходы под заказ",
  description: "Два зимних направления: Snowbike-комплекты для эндуро и подбор снегохода из Китая с доставкой через Владивосток.",
  alternates: { canonical: "/" },
  openGraph: { title: "Snowbike и снегоходы под заказ", description: "Два зимних направления: Snowbike-комплекты для эндуро и подбор снегохода из Китая с доставкой через Владивосток.", url: "/" },
};

const processSteps = [
  { no: "01", title: "Знакомимся с задачей", text: "Где планируете ездить, на чём уже катаетесь и что хотите получить зимой." },
  { no: "02", title: "Подбираем направление", text: "Snowbike-комплект к вашему эндуро или снегоход под конкретный сценарий." },
  { no: "03", title: "Запрашиваем подтверждение", text: "Уточняем наличие, комплектность, документы и актуальные материалы выбранной техники." },
  { no: "04", title: "Согласуем заказ", text: "Фиксируем модель и условия после подтверждения поставщика." },
  { no: "05", title: "Организуем доставку", text: "Планируем маршрут через Уссурийск и Владивосток, затем — в ваш регион." },
  { no: "06", title: "Передаём технику", text: "Согласуем место, документы и способ получения под заказ и ваш город." },
];

const reasons = [
  { icon: <Compass size={19} />, title: "Под задачу", text: "Подбираем не по громким цифрам, а по тому, где и как вы собираетесь ездить." },
  { icon: <Check size={19} />, title: "Проверка до заказа", text: "Состав, наличие и параметры подтверждаются у поставщика до фиксации условий." },
  { icon: <Truck size={19} />, title: "Понятный маршрут", text: "Объясняем этапы доставки и отдельно уточняем, что зависит от конкретного заказа." },
  { icon: <Snowflake size={19} />, title: "Два зимних формата", text: "Снегоход под ваш сценарий или Snowbike на базе совместимого эндуро." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero--home">
        <div className="hero-video"><HeroVideo /><div className="hero-video__veil" /></div>
        <div className="hero__inner page-shell">
          <div className="hero__copy">
            <span className="eyebrow"><span className="eyebrow__pip" />Техника для зимних маршрутов</span>
            <h1>Зима начинается<br />там, где заканчивается <em>дорога.</em></h1>
            <p>Snowbike-комплекты для эндуро и снегоходы из Китая под заказ. Сравните варианты и проверьте условия до оформления.</p>
            <div className="hero__actions">
              <Link className="button button--primary" href="/catalog">Выбрать направление <ArrowRight size={17} /></Link>
              <Link className="button button--ghost" href="/snowbike"><span className="play-mark"><ArrowUpRight size={14} /></span>Открыть Snowbike</Link>
            </div>
          </div>
          <div className="hero__footer">
            <div className="hero__signals">
              <span><span className="signal-icon"><Bike size={16} /></span><span><strong>Snowbike</strong><small>Комплект к эндуро</small></span></span>
              <span><span className="signal-icon"><Snowflake size={16} /></span><span><strong>Снегоходы</strong><small>Подбор под заказ</small></span></span>
              <span><span className="signal-icon"><Truck size={16} /></span><span><strong>Доставка</strong><small>Через Владивосток</small></span></span>
            </div>
            <a className="hero__scroll" href="#directions"><span>Прокрутите, чтобы выбрать</span><ArrowDown size={15} /></a>
          </div>
        </div>
        <span className="hero__frame-number">01 <i>/</i> WINTER SERIES</span>
      </section>

      <section className="section page-shell" id="directions">
        <SectionHeading eyebrow="Два способа продолжить сезон" title="Выберите свой зимний формат" description="Отправная точка — ваша техника, маршрут и ожидания. Остальное уточним вместе." />
        <div className="direction-grid">
          <Link href="/catalog" className="direction-card direction-card--sled">
            <Image src="/media/snowmobile-rider.jpg" alt="Снегоход на заснеженном горном маршруте" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <span className="direction-card__veil" />
            <span className="direction-card__top"><span className="eyebrow">01 / Снегоходы</span><ArrowUpRight size={18} /></span>
            <span className="direction-card__content"><span className="direction-card__tag">Под заказ из Китая</span><strong>Для маршрутов,<br />работы и отдыха.</strong><span className="text-link">Смотреть направления <ArrowRight size={15} /></span></span>
          </Link>
          <Link href="/snowbike" className="direction-card direction-card--snowbike">
            <Image src="/media/snowbike-ai-hero.jpg" alt="Эндуро со Snowbike-комплектом на зимнем склоне" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <span className="direction-card__veil" />
            <span className="direction-card__top"><span className="eyebrow">02 / Snowbike</span><ArrowUpRight size={18} /></span>
            <span className="direction-card__content"><span className="direction-card__tag">Эндуро меняет сезон</span><strong>Твой мотоцикл.<br />Новый маршрут.</strong><span className="text-link">Проверить совместимость <ArrowRight size={15} /></span></span>
          </Link>
        </div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <SectionHeading eyebrow="Механика зимнего перехода" title="Ваш эндуро. Новый зимний сценарий." description="Сначала проверяем основу и совместимость. Затем подбираем комплект: задний гусеничный модуль и передний лыжный узел." link={{ href: "/snowbike", label: "Всё о Snowbike" }} />
          <TransformationStory />
          <div className="inline-note"><span className="inline-note__mark">i</span><p>Конструкция и доступные комплекты различаются. Совместимость конкретного мотоцикла подтверждается перед оформлением.</p></div>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading eyebrow="Подборка моделей" title="Снегоход под вашу задачу" description="В каталоге — компактные модели для коротких поездок и полноразмерная техника для маршрутов, рыхлого снега и хозяйственных задач." link={{ href: "/catalog", label: "Все модели" }} />
        <div className="horizontal-rail">
          {snowmobiles.slice(0, 4).map((item, index) => <ProductCard key={item.slug} item={item} index={index} compact />)}
        </div>
        <div className="rail-hint"><span>Смахните, чтобы посмотреть</span><span className="rail-hint__line" /></div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <SectionHeading eyebrow="Прозрачно от запроса до получения" title="Как устроен заказ" description="Условия и данные фиксируем после того, как поставщик подтвердит конкретную модель и комплектацию." link={{ href: "/delivery", label: "О заказе и доставке" }} />
          <div className="process-grid">
            {processSteps.map((item) => <article className="process-card" key={item.no}><span className="process-card__no">{item.no}</span><span className="process-card__rule" /><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="route-section-heading"><div><SectionHeading eyebrow="Логистика без туманных обещаний" title="Китай → Владивосток → ваш регион" description="Схема показывает основные точки маршрута. Точный путь, документы и сроки зависят от выбранной модели и подтверждаются до заказа." /></div><span className="route-stamp">Схема маршрута<br /><strong>по согласованию</strong></span></div>
        <DeliveryRoute />
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <div className="section-heading section-heading--split">
            <div className="section-heading__copy"><span className="eyebrow"><span className="eyebrow__pip" />Из зимних маршрутов</span><h2>Техника ближе,<br />чем кажется.</h2><p>Фото показывают зимние сценарии. Для заказа мы отдельно запросим у поставщика материалы выбранной техники.</p></div>
            <Link className="text-link section-heading__link" href="/about">О проекте <ArrowUpRight size={16} /></Link>
          </div>
          <div className="winter-media-grid">
            <div className="winter-media-grid__main"><Image src="/media/snowmobile-tour.jpg" alt="Снежная равнина с зимними маршрутами" fill sizes="(max-width: 800px) 100vw, 55vw" /><span className="winter-media-grid__caption"><span>Зимний маршрут</span><span>01 / 03</span></span></div>
            <div className="winter-media-grid__side"><div><Image src="/media/snowmobile-action.jpg" alt="Снегоход на снежном рельефе" fill sizes="(max-width: 800px) 90vw, 25vw" /><span>Рельеф и скорость</span></div><div><Image src="/media/snowbike-ai-hero.jpg" alt="Snowbike в глубоком снегу" fill sizes="(max-width: 800px) 90vw, 25vw" /><span>Свобода вне трассы</span></div></div>
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading eyebrow="Спокойный процесс" title="Важное — до оплаты" description="Не показываем неподтверждённые цены и цифры. Сначала проверяем факты по конкретному заказу." />
        <div className="reason-grid">
          {reasons.map((item) => <article className="reason-card" key={item.title}><span className="reason-card__icon">{item.icon}</span><span className="eyebrow">SnowEnduro / {item.title}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <FinalCTA eyebrow="Контакты менеджеров" title="Выберите свой зимний маршрут." description="Сравните модели и условия поставки. Форма ниже демонстрационная, а связаться можно напрямую по телефону или в Telegram." />
    </>
  );
}
