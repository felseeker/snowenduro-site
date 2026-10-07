import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Box, ClipboardCheck, FileCheck2, MapPin, ShieldCheck, Snowflake, Star, Truck } from "lucide-react";
import { DeliveryRoute } from "@/components/DeliveryRoute";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Доставка снегоходов и Snowbike-комплектов",
  description: "Как устроен заказ зимней техники из Китая через Уссурийск и Владивосток. Сроки и условия подтверждаются для каждой поставки.",
  alternates: { canonical: "/delivery" },
  openGraph: { title: "Доставка снегоходов и Snowbike-комплектов", description: "Как устроен заказ зимней техники из Китая через Уссурийск и Владивосток. Сроки и условия подтверждаются для каждой поставки.", url: "/delivery" },
};

const orderSteps = [
  { no: "01", icon: <ClipboardCheck size={18} />, title: "Оставляете запрос", text: "Указываете модель, задачу и город получения после подключения канала связи." },
  { no: "02", icon: <Snowflake size={18} />, title: "Выбираете технику", text: "Сверяете подходящие модели и сценарии использования." },
  { no: "03", icon: <BadgeCheck size={18} />, title: "Подтверждаете предложение", text: "Проверяете наличие, характеристики, комплектацию и документы." },
  { no: "04", icon: <FileCheck2 size={18} />, title: "Согласуете условия", text: "До заказа фиксируете модель, состав поставки и итоговую стоимость." },
  { no: "05", icon: <Box size={18} />, title: "Готовите документы", text: "Сверяете документы и последовательность оформления." },
  { no: "06", icon: <Truck size={18} />, title: "Согласуете маршрут", text: "Определяете перевозку, точки пути и город получения." },
  { no: "07", icon: <MapPin size={18} />, title: "Получаете технику", text: "Проверяете комплект и документы при передаче заказа." },
  { no: "08", icon: <Star size={18} />, title: "Оставляете отзыв", text: "После завершённого заказа отзыв поможет другим покупателям оценить опыт.", optional: true },
];

const factors = [
  { title: "Наличие у поставщика", text: "Готовность к отгрузке зависит от подтверждённой модели и её наличия." },
  { title: "Сезонная загрузка", text: "Загруженность маршрутов и перевозчиков может меняться в течение сезона." },
  { title: "Оформление", text: "Набор документов и последовательность процедур зависят от типа техники и схемы поставки." },
  { title: "Город получения", text: "Доставку по России рассчитываем отдельно, когда известен населённый пункт." },
];

const faqs: FaqItem[] = [
  { question: "Сколько занимает доставка до Владивостока?", answer: "Срок зависит от наличия, маршрута, сезонной загрузки и оформления. Его можно оценить после подтверждения модели и плана перевозки." },
  { question: "Можно ли отправить технику в мой город?", answer: "Внутреннюю доставку нужно согласовать отдельно. Доступный перевозчик и стоимость зависят от города и габаритов техники." },
  { question: "Как проходит оплата?", answer: "Получателя платежа, порядок и этапы оплаты следует согласовать до оформления и зафиксировать в документах по конкретному заказу." },
  { question: "Какие документы будут на технику?", answer: "Состав документов зависит от типа техники, модели и способа ввоза. Его нужно уточнить до оформления." },
  { question: "Можно ли заказать модель, которой нет в каталоге?", answer: "Это зависит от доступности модели у поставщика и возможности организовать поставку. Сейчас форма для обращений не подключена." },
  { question: "Что если поставщик не подтвердит модель?", answer: "Не оформляйте заказ, пока модель, комплектация, стоимость и маршрут не подтверждены." },
];

export default function DeliveryPage() {
  return (
    <>
      <section className="page-hero page-hero--delivery">
        <Image className="page-hero__image" src="/media/snowmobile-tour.jpg" alt="Дальний зимний маршрут по заснеженной равнине" fill loading="eager" sizes="100vw" />
        <div className="page-hero__veil" />
        <div className="page-shell page-hero__inner">
          <div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><span>Доставка</span></div>
          <span className="eyebrow"><span className="eyebrow__pip" />Заказ / маршрут / получение</span>
          <h1>Путь техники.<br /><em>Понятно по шагам.</em></h1>
          <p>Ниже — ориентировочная схема заказа и возможного маршрута из Китая через Уссурийск и Владивосток. Фактические условия зависят от модели.</p>
          <div className="page-hero__actions"><a className="button button--primary" href="#route">Посмотреть маршрут <ArrowRight size={17} /></a><Link className="button button--ghost" href="/about#contacts"><span className="play-mark"><MapPin size={14} /></span>Контакты</Link></div>
          <div className="page-hero__facts"><span><ShieldCheck size={17} />Условия до заказа</span><span><FileCheck2 size={17} />Документы уточняются</span><span><Truck size={17} />Доставка по согласованию</span></div>
        </div>
      </section>

      <section className="section page-shell" id="route">
        <SectionHeading eyebrow="Маршрут поставки" title="Китай → Уссурийск → Владивосток → ваш регион" description="Нажмите на точку маршрута, чтобы посмотреть, что обсуждается на каждом этапе. Фактический путь подтверждается под конкретный заказ." />
        <DeliveryRoute />
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <SectionHeading eyebrow="Ориентировочный порядок" title="Восемь шагов заказа" description="Схема помогает понять, какие условия нужно проверить до оплаты. Канал для приёма заявок пока не подключён." />
          <div className="order-steps-grid">
            {orderSteps.map((step) => <article className="order-step" key={step.no}><span className="order-step__top"><b>{step.no}</b><span>{step.icon}</span></span><span className="order-step__line" /><h3>{step.title}</h3>{step.optional && <span className="order-step__optional">по желанию</span>}<p>{step.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="delivery-info-grid">
          <div className="delivery-factors"><SectionHeading eyebrow="Срок зависит от маршрута" title="Что влияет на время доставки" description="Не называем срок до проверки предложения: параметры меняются от заказа к заказу." />{factors.map((item, index) => <div className="factor-row" key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div>
          <div className="payment-card"><span className="eyebrow"><span className="eyebrow__pip" />Оплата и подтверждение</span><h2>Условия должны быть понятны до платежа.</h2><p>До оплаты должны быть подтверждены модель, комплект поставки, итоговая стоимость, получатель платежа и документы. Детали зависят от конкретного предложения.</p><div className="payment-card__items"><span><FileCheck2 size={17} /><span><strong>Зафиксированная цена</strong><small>После подтверждения конкретной техники</small></span></span><span><ShieldCheck size={17} /><span><strong>Пакет документов</strong><small>Состав уточняется по типу поставки</small></span></span><span><Truck size={17} /><span><strong>Понятный маршрут</strong><small>Согласуется до оформления</small></span></span></div><Link className="text-link" href="/privacy">О данных в форме <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <div className="section-heading section-heading--split"><div className="section-heading__copy"><span className="eyebrow">Перед оплатой</span><h2>Что проверить<br />до решения.</h2><p>Сверьте данные именно по выбранной модели и комплектации до оформления.</p></div><span className="route-stamp">Проверка / <strong>до оплаты</strong></span></div>
          <div className="preorder-grid"><div><Image src="/media/snowmobile-rider.jpg" alt="Снегоход на зимнем маршруте" fill sizes="(max-width: 800px) 100vw, 48vw" /><span className="preorder-grid__caption">Проверка до оплаты</span></div><div className="preorder-grid__list"><span><b>01</b><span><strong>Фото и видео</strong><small>Техника должна соответствовать выбранной модели</small></span></span><span><b>02</b><span><strong>Характеристики</strong><small>Сверьте спецификацию конкретного предложения</small></span></span><span><b>03</b><span><strong>Условия поставки</strong><small>Стоимость и сроки — до оплаты</small></span></span><span><b>04</b><span><strong>Документы</strong><small>Состав пакета уточняется для заказа</small></span></span></div></div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="faq-layout"><div><SectionHeading eyebrow="Вопросы о доставке" title="Спокойно разберём детали" description="Путь и документы зависят от выбранной модели. Сложные вопросы проверим до заказа." /></div><FaqList items={faqs} /></div>
      </section>

      <FinalCTA eyebrow="Заявки временно не принимаются" title="Изучите маршрут и условия." description="Форма ниже демонстрационная: она проверяет поля, но не отправляет запрос и не сохраняет введённые данные." />
    </>
  );
}
