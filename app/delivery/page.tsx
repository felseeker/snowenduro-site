import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Box, ClipboardCheck, FileCheck2, MapPin, ShieldCheck, Snowflake, Star, Truck } from "lucide-react";
import { DeliveryRoute } from "@/components/DeliveryRoute";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { SupplierPlaceholder } from "@/components/SupplierPlaceholder";

export const metadata: Metadata = {
  title: "Доставка снегоходов и Snowbike-комплектов",
  description: "Как устроен заказ зимней техники из Китая через Уссурийск и Владивосток. Сроки и условия подтверждаются для каждой поставки.",
  alternates: { canonical: "/delivery" },
  openGraph: { title: "Доставка снегоходов и Snowbike-комплектов", description: "Как устроен заказ зимней техники из Китая через Уссурийск и Владивосток. Сроки и условия подтверждаются для каждой поставки.", url: "/delivery" },
};

const orderSteps = [
  { no: "01", icon: <ClipboardCheck size={18} />, title: "Оставляете запрос", text: "Рассказываете о задаче, городе получения и выбранном направлении." },
  { no: "02", icon: <Snowflake size={18} />, title: "Подбираем технику", text: "Сверяем доступные категории и запрашиваем у поставщика конкретные модели." },
  { no: "03", icon: <BadgeCheck size={18} />, title: "Проверяем ответ", text: "Уточняем наличие, характеристики, комплектацию, документы и актуальные материалы." },
  { no: "04", icon: <FileCheck2 size={18} />, title: "Согласуем условия", text: "До заказа фиксируем подтверждённую модель, состав поставки и стоимость." },
  { no: "05", icon: <Box size={18} />, title: "Готовим поставку", text: "Уточняем упаковку, комплект документов и последовательность отправки." },
  { no: "06", icon: <Truck size={18} />, title: "Организуем маршрут", text: "Планируем доставку через Уссурийск и Владивосток с учётом маршрута и города." },
  { no: "07", icon: <MapPin size={18} />, title: "Передаём заказ", text: "Согласуем получение во Владивостоке или отправку в ваш регион." },
  { no: "08", icon: <Star size={18} />, title: "Остаёмся на связи", text: "После получения можно оставить отзыв и задать вопросы по заказу. Обратная связь поможет нам улучшать сервис.", optional: true },
];

const factors = [
  { title: "Наличие у поставщика", text: "Готовность к отгрузке зависит от подтверждённой модели и её наличия." },
  { title: "Сезонная загрузка", text: "Загруженность маршрутов и перевозчиков может меняться в течение сезона." },
  { title: "Оформление", text: "Набор документов и последовательность процедур зависят от типа техники и схемы поставки." },
  { title: "Город получения", text: "Доставку по России рассчитываем отдельно, когда известен населённый пункт." },
];

const faqs: FaqItem[] = [
  { question: "Сколько занимает доставка до Владивостока?", answer: "Срок зависит от наличия, маршрута, сезонной загрузки и оформления. Оценку дадим после того, как поставщик подтвердит модель и план отправки." },
  { question: "Можно ли отправить технику в мой город?", answer: "Внутреннюю доставку можно обсудить после подтверждения заказа. Доступный перевозчик и стоимость зависят от города и габаритов конкретной техники." },
  { question: "Как проходит оплата?", answer: "Порядок, этапы и получателя платежа согласуем до оформления. Условия должны быть зафиксированы в документах по конкретному заказу." },
  { question: "Какие документы будут на технику?", answer: "Состав документов зависит от типа техники, модели и способа ввоза. Запрашиваем у поставщика доступный пакет до согласования заказа." },
  { question: "Можно ли заказать модель, которой нет в каталоге?", answer: "Да, можно начать с запроса по модели или ссылке. Проверим, доступна ли она у поставщика и можно ли организовать поставку." },
  { question: "Что если поставщик не подтвердит модель?", answer: "Не будем фиксировать неподтверждённое предложение как факт. Предложим проверить другой доступный вариант либо вернёмся с уточнением по вашему запросу." },
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
          <p>Сначала подтверждаем конкретную модель и условия. Затем согласуем маршрут из Китая через Уссурийск и Владивосток.</p>
          <div className="page-hero__actions"><a className="button button--primary" href="#request">Обсудить заказ <ArrowRight size={17} /></a><a className="button button--ghost" href="#route"><span className="play-mark"><MapPin size={14} /></span>Маршрут доставки</a></div>
          <div className="page-hero__facts"><span><ShieldCheck size={17} />Условия до заказа</span><span><FileCheck2 size={17} />Документы уточняются</span><span><Truck size={17} />Доставка по согласованию</span></div>
        </div>
      </section>

      <section className="section page-shell" id="route">
        <SectionHeading eyebrow="Маршрут поставки" title="Китай → Уссурийск → Владивосток → ваш регион" description="Нажмите на точку маршрута, чтобы посмотреть, что обсуждается на каждом этапе. Фактический путь подтверждается под конкретный заказ." />
        <DeliveryRoute />
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <SectionHeading eyebrow="Восемь шагов заказа" title="От первого сообщения до получения" description="От первого запроса до обратной связи после получения. Каждый этап начинается после подтверждения предыдущего." />
          <div className="order-steps-grid">
            {orderSteps.map((step) => <article className="order-step" key={step.no}><span className="order-step__top"><b>{step.no}</b><span>{step.icon}</span></span><span className="order-step__line" /><h3>{step.title}</h3>{step.optional && <span className="order-step__optional">по желанию</span>}<p>{step.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="delivery-info-grid">
          <div className="delivery-factors"><SectionHeading eyebrow="Срок зависит от маршрута" title="Что влияет на время доставки" description="Не называем срок до проверки предложения: параметры меняются от заказа к заказу." />{factors.map((item, index) => <div className="factor-row" key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div>
          <div className="payment-card"><span className="eyebrow"><span className="eyebrow__pip" />Оплата и подтверждение</span><h2>Условия должны быть понятны до платежа.</h2><p>До заказа согласуем модель, состав поставки, стоимость, порядок оплаты и документы. Детали зависят от конкретного поставщика.</p><div className="payment-card__items"><span><FileCheck2 size={17} /><span><strong>Фиксация условий</strong><small>После подтверждения конкретной техники</small></span></span><span><ShieldCheck size={17} /><span><strong>Пакет документов</strong><small>Состав уточняется по типу поставки</small></span></span><span><Truck size={17} /><span><strong>Понятный маршрут</strong><small>Согласуется до оформления</small></span></span></div><Link className="text-link" href="/privacy">О данных в заявке <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <div className="section-heading section-heading--split"><div className="section-heading__copy"><span className="eyebrow">Открытая коммуникация</span><h2>Что получите<br />до решения.</h2><p>Перед согласованием заказа запрашиваем у поставщика доступные данные по выбранной технике.</p></div><span className="route-stamp">Проверка / <strong>до оплаты</strong></span></div>
          <div className="preorder-grid"><div><Image src="/media/snowmobile-rider.jpg" alt="Снегоход на зимнем маршруте" fill sizes="(max-width: 800px) 100vw, 48vw" /><span className="preorder-grid__caption">Материалы выбранной модели</span></div><div className="preorder-grid__list"><span><b>01</b><span><strong>Фото и видео</strong><small>Актуальные материалы по доступной комплектации</small></span></span><span><b>02</b><span><strong>Описание модели</strong><small>Параметры после проверки у поставщика</small></span></span><span><b>03</b><span><strong>Условия поставки</strong><small>Стоимость и сроки — по согласованному предложению</small></span></span><span><b>04</b><span><strong>Документы</strong><small>Состав пакета зависит от схемы заказа</small></span></span></div></div>
          <SupplierPlaceholder compact />
        </div>
      </section>

      <section className="section page-shell">
        <div className="faq-layout"><div><SectionHeading eyebrow="Вопросы о доставке" title="Спокойно разберём детали" description="Путь и документы зависят от выбранной модели. Сложные вопросы проверим до заказа." /></div><FaqList items={faqs} /></div>
      </section>

      <FinalCTA eyebrow="Подскажем следующий шаг" title="Готовы обсудить поставку?" description="Напишите, какую технику ищете и куда её нужно доставить. Начнём с проверки доступных вариантов и маршрута." />
    </>
  );
}
