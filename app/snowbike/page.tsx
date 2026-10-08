import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Bike, Check, MoveUpRight, Snowflake, Wrench } from "lucide-react";
import { FaqList, type FaqItem } from "@/components/FaqList";
import { FinalCTA } from "@/components/FinalCTA";
import { LeadForm } from "@/components/LeadForm";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SnowbikeComparison } from "@/components/SnowbikeComparison";
import { snowbikeKits } from "@/data/products";

export const metadata: Metadata = {
  title: "Snowbike-комплекты для эндуро",
  description: "Как работает Snowbike-комплект: задний гусеничный модуль и передняя лыжа. Совместимость и состав проверяются для конкретного мотоцикла.",
  alternates: { canonical: "/snowbike" },
  openGraph: { title: "Snowbike-комплекты для эндуро", description: "Как работает Snowbike-комплект: задний гусеничный модуль и передняя лыжа. Совместимость проверяется для конкретного мотоцикла.", url: "/snowbike" },
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
  { question: "Подойдёт ли Snowbike-комплект к моему эндуро?", answer: "Это зависит от марки, модели, года и конфигурации мотоцикла. Совместимость нужно подтвердить по конкретному комплекту до оформления. Форма на сайте пока только демонстрационная." },
  { question: "Что именно заменяется в мотоцикле?", answer: "В типовой схеме заднее колесо заменяет гусеничный модуль, а переднее — лыжный узел. Конкретное исполнение, крепления и состав комплекта зависят от поставщика." },
  { question: "Сколько стоит комплект?", answer: "Цена зависит от комплекта, совместимости и условий поставки. До оформления нужно получить подтверждённую стоимость для конкретного эндуро." },
  { question: "Можно ли установить комплект самостоятельно?", answer: "Требования к установке зависят от комплекта. До заказа нужно проверить инструкцию и рекомендуемый порядок монтажа." },
  { question: "Какой срок доставки?", answer: "Срок зависит от наличия, маршрута и оформления. Конкретную оценку можно дать после проверки модели и условий поставки." },
  { question: "Можно ли запросить фото до оплаты?", answer: "Перед оплатой стоит запросить актуальные фото, видео и описание именно выбранной комплектации." },
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
          <SectionHeading eyebrow="До / после" title="Вместо колёс — лыжа и гусеница." description="Слева эндуро на колёсах, справа — зимняя конфигурация. Переднее колесо заменяется лыжным узлом, заднее — гусеничным модулем. Точное исполнение подтверждается под модель." />
          <div className="snowbike-explainer">
            <div className="snowbike-explainer__diagram">
              <SnowbikeComparison />
            </div>
            <div className="snowbike-explainer__side">
              <span className="eyebrow">Два понятных изменения</span>
              <h3>Лыжа спереди.<br /><em>Гусеница сзади.</em></h3>
              <p>Сохраняется основа эндуро. Меняются два узла, которые соприкасаются со снегом.</p>
              <div className="snowbike-parts-list"><span><b>01</b><span>Переднее колесо<small>заменяется одной лыжей</small></span></span><span><b>02</b><span>Заднее колесо<small>заменяется гусеничным модулем</small></span></span><span><b>03</b><span>Крепления<small>подтверждаются под модель</small></span></span></div>
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

      <section className="section section--alternate">
        <div className="page-shell">
          <SectionHeading eyebrow="Каталог Snowbike" title="Пять комплектов под запрос" description="Цены — рыночные ориентиры. Наличие, состав и совместимость проверим для вашего мотоцикла перед заказом." />
          <div className="horizontal-rail">
            {snowbikeKits.map((item, index) => <ProductCard item={item} index={index} compact key={item.slug} />)}
          </div>
        </div>
      </section>

      <section className="section section--alternate" id="compatibility">
        <div className="page-shell">
          <div className="compatibility-panel">
            <div className="compatibility-panel__copy"><span className="eyebrow"><span className="eyebrow__pip" />Проверка до заказа</span><h2>Совместимость<br />зависит от базы.</h2><p>Для подбора понадобятся марка, модель и год выпуска. Сейчас форму можно проверить, но она не отправляет данные и не запускает проверку комплекта.</p><div className="compatibility-panel__steps"><span><b>01</b>Марка и модель</span><span><b>02</b>Год выпуска</span><span><b>03</b>Проверка не подключена</span></div><span className="compatibility-panel__caveat">Не вводите реальные контакты: форма ничего не отправляет и не сохраняет.</span></div>
            <div className="compatibility-panel__form"><LeadForm mode="compatibility" buttonLabel="Проверить поля" /></div>
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
          <SectionHeading eyebrow="Перед оформлением" title="Сначала — конкретный комплект" description="Совместимость, состав узлов, инструкция и цена зависят от модели мотоцикла и выбранной комплектации." />
          <div className="snowbike-media-feature"><div className="snowbike-media-feature__image"><Image src="/media/snowbike-ai-hero.jpg" alt="Snowbike на зимнем маршруте" fill sizes="(max-width: 800px) 100vw, 56vw" /><span className="snowbike-media-feature__label"><span className="eyebrow">Зимняя конфигурация</span><strong>Эндуро / снег / новый сезон</strong></span></div><div className="supplier-placeholder supplier-placeholder--compact"><span className="eyebrow"><span className="eyebrow__pip" />Что понадобится</span><h3>Марка, модель и год эндуро.</h3><p>Эти данные нужны для проверки совместимости. Форма на сайте пока не передаёт контакты и не запускает проверку.</p><a className="text-link" href="#compatibility">К форме проверки <ArrowRight size={15} /></a></div></div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="faq-layout"><div><SectionHeading eyebrow="Частые вопросы" title="До первого снега" description="Собрали ответы о совместимости, составе комплекта и заказе." /><div className="faq-meta"><span className="status-dot" />Ответ зависит от модели мотоцикла</div></div><FaqList items={faqs} /></div>
      </section>

      <FinalCTA eyebrow="Контакты менеджеров" title="Проверьте совместимость до заказа." description="Сразу сообщите марку, модель и год эндуро. Форма на сайте пока демонстрационная; связаться можно напрямую по телефону или в Telegram." topic="snowbike" mode="compatibility" />
    </>
  );
}
