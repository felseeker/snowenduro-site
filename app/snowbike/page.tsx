import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Bike, Check, MoveUpRight, Snowflake, Wrench } from "lucide-react";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { FinalCTA } from "@/components/FinalCTA";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SnowbikeDiagram } from "@/components/SnowbikeDiagram";
import { SupplierPlaceholder } from "@/components/SupplierPlaceholder";

export const metadata: Metadata = {
  title: "Snowbike-комплекты для эндуро",
  description: "Узнайте, как работает Snowbike-комплект с задним гусеничным модулем и передней лыжей, и отправьте мотоцикл на проверку совместимости.",
  alternates: { canonical: "/snowbike" },
  openGraph: { title: "Snowbike-комплекты для эндуро", description: "Узнайте, как работает Snowbike-комплект с задним гусеничным модулем и передней лыжей, и отправьте мотоцикл на проверку совместимости.", url: "/snowbike" },
};

const conversionSteps = [
  { no: "01", title: "Проверяем базу", text: "Марка, модель, год выпуска и изменения мотоцикла — отправная точка для подбора." },
  { no: "02", title: "Сверяем совместимость", text: "Запрашиваем у поставщика доступный комплект под конкретную конфигурацию эндуро." },
  { no: "03", title: "Подтверждаем состав", text: "Уточняем, какие узлы входят в выбранную поставку и что потребуется для установки." },
  { no: "04", title: "Согласуем заказ", text: "Фиксируем цену и условия после подтверждения поставщика, а не по шаблонной карточке." },
];

const components = [
  { icon: <MoveUpRight size={19} />, title: "Задний гусеничный модуль", text: "Заменяет заднее колесо и создаёт опору для движения по снегу. Конкретная конструкция зависит от комплекта." },
  { icon: <ArrowUpRight size={19} />, title: "Передний лыжный узел", text: "Устанавливается вместо переднего колеса. Геометрию и крепление сверяют с выбранным мотоциклом." },
  { icon: <Wrench size={19} />, title: "Крепления и сопряжения", text: "Состав адаптеров, кронштейнов и дополнительных деталей подтверждается для конкретной пары «байк — комплект»." },
  { icon: <Check size={19} />, title: "Документы по поставке", text: "Запрашиваем описание комплектации и доступные инструкции до согласования заказа." },
];

const useCases = [
  { title: "Лесные маршруты", text: "Снег, просеки и зимние дороги там, где знакомая трасса заканчивается.", image: "/media/snowbike-forest.jpg", alt: "Эндуро со Snowbike-комплектом движется по зимнему лесу" },
  { title: "Поля и долины", text: "Свободный рельеф и дальние выезды — под подготовку и возможности вашего мотоцикла.", image: "/media/snowbike-open-terrain.jpg", alt: "Snowbike с передней лыжей и задней гусеницей на снежном поле" },
  { title: "Глубокий снег", text: "Зимний формат для опытных райдеров. Условия использования уточняйте для конкретного комплекта.", image: "/media/snowbike-ai-hero.jpg", alt: "Эндуро с задней гусеницей и передней лыжей в глубоком снегу" },
];

const faqs: FaqItem[] = [
  { question: "Подойдёт ли Snowbike-комплект к моему эндуро?", answer: "Это зависит от марки, модели, года и конфигурации мотоцикла. Отправьте эти данные — мы запросим подтверждение совместимости у поставщика до оформления." },
  { question: "Что именно заменяется в мотоцикле?", answer: "В типовой схеме заднее колесо заменяет гусеничный модуль, а переднее — лыжный узел. Конкретное исполнение, крепления и состав комплекта зависят от поставщика." },
  { question: "Сколько стоит комплект?", answer: "Цена зависит от доступного комплекта, совместимости и условий поставки. Назовём её после подтверждения поставщика." },
  { question: "Можно ли установить комплект самостоятельно?", answer: "Требования к установке зависят от модели. Перед заказом запросим актуальную инструкцию и уточним рекомендуемый порядок монтажа." },
  { question: "Какой срок доставки?", answer: "Срок зависит от наличия, маршрута и оформления. Конкретную оценку можно дать после проверки модели и условий поставки." },
  { question: "Можно ли запросить фото до оплаты?", answer: "Да. Перед согласованием заказа мы запрашиваем доступные фото, видео и описание именно выбранной комплектации." },
];

export default function SnowbikePage() {
  return (
    <>
      <section className="page-hero page-hero--snowbike">
        <Image className="page-hero__image" src="/media/snowbike-ai-hero.jpg" alt="Snowbike с задним гусеничным модулем и передней лыжей в зимнем лесу" fill loading="eager" sizes="100vw" />
        <div className="page-hero__veil" />
        <div className="page-shell page-hero__inner">
          <div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><span>Snowbike</span></div>
          <span className="eyebrow"><span className="eyebrow__pip" />Зимняя версия эндуро</span>
          <h1>Преврати эндуро<br />в <em>Snowbike.</em></h1>
          <p>Задний гусеничный модуль и передняя лыжа открывают другой зимний сценарий. Начинаем с проверки вашего мотоцикла.</p>
          <div className="page-hero__actions"><a className="button button--primary" href="#compatibility">Проверить совместимость <ArrowRight size={17} /></a><a className="button button--ghost" href="#how-it-works"><span className="play-mark"><ArrowDown size={14} /></span>Как это устроено</a></div>
          <div className="page-hero__facts"><span><Bike size={17} />Ваша база — эндуро</span><span><Snowflake size={17} />Два сменных узла</span><span><Check size={17} />Подбор после сверки</span></div>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading eyebrow="Из эндуро — в зимний формат" title="Четыре шага к новому маршруту" description="Комплект подбирается под конкретную базу. Ниже — логика процесса, а не обещание совместимости с любой моделью." />
        <div className="conversion-grid">
          {conversionSteps.map((step) => <article className="conversion-card" key={step.no}><span className="conversion-card__number">{step.no}</span><span className="conversion-card__line" /><span className="eyebrow">Snowbike / {step.no}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
        </div>
      </section>

      <section className="section section--alternate" id="how-it-works">
        <div className="page-shell">
          <SectionHeading eyebrow="Техническая схема" title="Гусеница сзади. Лыжа спереди." description="Схема показывает принцип замены двух колёс. Реальные размеры, крепления и состав зависят от комплекта и мотоцикла." />
          <div className="snowbike-explainer">
            <div className="snowbike-explainer__diagram"><SnowbikeDiagram stage={3} /></div>
            <div className="snowbike-explainer__side">
              <span className="eyebrow">Главные узлы</span>
              <h3>Привычная основа.<br /><em>Другой контакт со снегом.</em></h3>
              <p>Гусеничный модуль и лыжный узел подбираются как система. До заказа сверяем совместимость и детали установки.</p>
              <div className="snowbike-parts-list"><span><b>01</b><span>Заднее колесо<small>заменяется гусеничным модулем</small></span></span><span><b>02</b><span>Переднее колесо<small>заменяется лыжным узлом</small></span></span><span><b>03</b><span>Крепления<small>подтверждаются под модель</small></span></span></div>
              <a className="text-link" href="#compatibility">Проверить свой мотоцикл <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading eyebrow="Состав поставки" title="Что входит в комплект" description="Названия ниже описывают типы узлов. Точный комплект и дополнительные детали подтверждаются до оплаты." />
        <div className="components-grid">
          {components.map((item, index) => <article className="component-card" key={item.title}><span className="component-card__icon">{item.icon}</span><span className="eyebrow">Узел 0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><span className="component-card__status"><span className="status-dot" />Состав — после подтверждения</span></article>)}
        </div>
      </section>

      <section className="section section--alternate" id="compatibility">
        <div className="page-shell">
          <div className="compatibility-panel">
            <div className="compatibility-panel__copy"><span className="eyebrow"><span className="eyebrow__pip" />Проверка до заказа</span><h2>Покажите нам<br />ваш эндуро.</h2><p>Напишите марку, модель и год. Мы уточним у поставщика, есть ли совместимый комплект, и вернёмся с тем, что можно подтвердить.</p><div className="compatibility-panel__steps"><span><b>01</b>Данные мотоцикла</span><span><b>02</b>Запрос поставщику</span><span><b>03</b>Подтверждённый ответ</span></div><span className="compatibility-panel__caveat">Форма работает в демо-режиме: данные не передаются.</span></div>
            <div className="compatibility-panel__form"><LeadForm mode="compatibility" buttonLabel="Запросить проверку" /></div>
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <SectionHeading eyebrow="Где раскрывается Snowbike" title="Новые линии на знакомой карте" description="Характер и условия поездки зависят от подготовки райдера, мотоцикла и подобранного комплекта." />
        <div className="usecase-grid">
          {useCases.map((item, index) => <article className="usecase-card" key={item.title}><div className="usecase-card__image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 90vw, 32vw" /><span>0{index + 1}</span></div><div className="usecase-card__copy"><span className="eyebrow">Зимний маршрут</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
        </div>
      </section>

      <section className="section section--alternate">
        <div className="page-shell">
          <SectionHeading eyebrow="Без каталоговых обещаний" title="Материалы по реальному комплекту" description="Подтверждённые фото, видео и описание запрашиваем у поставщика уже под вашу модель эндуро." />
          <div className="snowbike-media-feature"><div className="snowbike-media-feature__image"><Image src="/media/snowbike-ai-hero.jpg" alt="Snowbike на зимнем маршруте" fill sizes="(max-width: 800px) 100vw, 56vw" /><span className="snowbike-media-feature__label"><span className="eyebrow">Зимняя конфигурация</span><strong>Эндуро / снег / новый сезон</strong></span></div><SupplierPlaceholder compact /></div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="faq-layout"><div><SectionHeading eyebrow="Частые вопросы" title="До первого снега" description="Собрали ответы о совместимости, составе комплекта и заказе." /><div className="faq-meta"><span className="status-dot" />Ответ зависит от модели мотоцикла</div></div><FaqList items={faqs} /></div>
      </section>

      <FinalCTA eyebrow="Новый зимний маршрут начинается с базы" title="Проверим, что подойдёт именно вам." description="Оставьте данные мотоцикла — уточним, какие Snowbike-комплекты доступны и что входит в поставку." topic="snowbike" mode="compatibility" />
    </>
  );
}
