"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";

const steps = [
  { title: "Начинаем с вашего эндуро", copy: "Уточняем марку, модель и год выпуска. Совместимость проверяется для конкретной базы.", state: "01 / База" },
  { title: "Подбираем комплект", copy: "Сверяем передний лыжный узел и задний гусеничный модуль под ваш мотоцикл.", state: "02 / Подбор" },
  { title: "Меняем точки контакта", copy: "Кадр показывает один из промежуточных вариантов: сзади уже установлен гусеничный модуль, спереди остаётся колесо. В готовой конфигурации его заменяет лыжа.", state: "03 / Замена" },
  { title: "Проверяем перед выездом", copy: "Фиксируем состав комплекта, совместимость и рекомендации по установке до оформления заказа.", state: "04 / Snowbike" },
];

function BeforePhoto() {
  return <Image src="/media/snowbike-before.png" alt="Эндуро в исходной конфигурации на двух колёсах" fill sizes="(max-width: 800px) 92vw, 60vw" />;
}

function AfterPhoto() {
  return <Image src="/media/snowbike-after.png" alt="Snowbike: переднее колесо заменено лыжей, заднее — гусеничным модулем" fill sizes="(max-width: 800px) 92vw, 60vw" />;
}

function SelectedKitPhoto() {
  return <Image src="/media/snowbike-kit-selected.png" alt="Эндуро на двух колёсах рядом с отдельными лыжным узлом и гусеничным модулем" fill sizes="(max-width: 800px) 92vw, 60vw" />;
}

function PartialConversionPhoto() {
  return <Image src="/media/snowbike-track-installed.png" alt="Промежуточная конфигурация: заднее колесо заменено гусеничным модулем, спереди остаётся колесо" fill sizes="(max-width: 800px) 92vw, 60vw" />;
}

function StoryVisual({ active }: { active: number }) {
  if (active === 1) {
    return (
      <figure className="story-photo-single story-photo-single--kit" key="kit">
        <div className="story-photo-single__image"><SelectedKitPhoto /></div>
        <figcaption className="story-photo-single__caption"><span>ЛЫЖНЫЙ УЗЕЛ + ГУСЕНИЧНЫЙ МОДУЛЬ</span><span><strong>Сверяем до заказа</strong></span></figcaption>
        <span className="story-photo-single__badge">ПОДБОР ПОД ВАШУ МОДЕЛЬ</span>
      </figure>
    );
  }

  if (active === 2) {
    return (
      <figure className="story-photo-single story-photo-single--partial" key="partial">
        <div className="story-photo-single__image"><PartialConversionPhoto /></div>
        <figcaption className="story-photo-single__caption"><span>СЗАДИ <strong>ГУСЕНИЧНЫЙ МОДУЛЬ</strong></span><span>СПЕРЕДИ <strong>КОЛЕСО</strong></span></figcaption>
        <span className="story-photo-single__badge">ПРОМЕЖУТОЧНЫЙ ЭТАП</span>
      </figure>
    );
  }

  const winter = active === 3;
  return (
    <figure className={`story-photo-single${winter ? " story-photo-single--winter" : ""}`} key={winter ? "winter" : "before"}>
      <div className="story-photo-single__image">{winter ? <AfterPhoto /> : <BeforePhoto />}</div>
      <figcaption className="story-photo-single__caption">
        {winter ? <><span>СПЕРЕДИ <strong>ЛЫЖА</strong></span><span>СЗАДИ <strong>ГУСЕНИЦА</strong></span></> : <><span>СПЕРЕДИ <strong>КОЛЕСО</strong></span><span>СЗАДИ <strong>КОЛЕСО</strong></span></>}
      </figcaption>
      <span className="story-photo-single__badge">{winter ? "ЗИМНЯЯ КОНФИГУРАЦИЯ" : "ЭНДУРО ДО ПОДБОРА"}</span>
    </figure>
  );
}

export function TransformationStory() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActive(Number(best.target.getAttribute("data-story-step") ?? 0));
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: reduced ? "-42% 0px -42% 0px" : "-30% 0px -35% 0px" },
    );
    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  function goToStep(index: number) {
    setActive(index);
    stepRefs.current[index]?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
  }

  return (
    <section className="transformation" aria-label="Превращение эндуро в Snowbike">
      <div className="transformation__copy">
        {steps.map((step, index) => (
          <article
            className={`story-step${active === index ? " is-active" : ""}`}
            data-story-step={index}
            key={step.state}
            ref={(node) => { stepRefs.current[index] = node; }}
          >
            <button type="button" className="story-step__select" onClick={() => goToStep(index)} aria-current={active === index ? "step" : undefined}>
              <span className="story-step__count">0{index + 1}</span>
              <span className="story-step__state">{step.state}</span>
              {active === index ? <Check size={15} /> : <ArrowDown size={15} />}
            </button>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
      <div className="transformation__visual" data-stage={active} aria-live="polite">
        <div className="transformation__visual-top"><span className="eyebrow">{steps[active].state}</span><span>Эндуро <ArrowRight size={14} /> Snowbike</span></div>
        <div className="transformation__visual-stage"><StoryVisual active={active} /></div>
        <div className="transformation__visual-bottom">
          <span>ДО</span>
          <span className="transformation__progress" style={{ "--progress": `${((active + 1) / steps.length) * 100}%` } as CSSProperties} />
          <span>ПОСЛЕ</span>
        </div>
      </div>
    </section>
  );
}
