"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { SnowbikeDiagram } from "@/components/SnowbikeDiagram";

const steps = [
  { title: "Начинаем с вашего эндуро", copy: "Уточняем марку, модель и год выпуска. Совместимость проверяется для конкретной базы.", state: "01 / База" },
  { title: "Подбираем комплект", copy: "Сверяем варианты заднего гусеничного модуля и переднего лыжного узла под ваш мотоцикл.", state: "02 / Подбор" },
  { title: "Меняем точки контакта", copy: "Вместо заднего колеса устанавливается гусеничный модуль, вместо переднего — лыжа.", state: "03 / Конверсия" },
  { title: "Проверяем перед выездом", copy: "Фиксируем состав комплекта, совместимость и рекомендации по установке до оформления заказа.", state: "04 / Готов к зиме" },
];

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
      <div className="transformation__visual" aria-live="polite">
        <div className="transformation__visual-top"><span className="eyebrow">{steps[active].state}</span><span>Эндуро <ArrowRight size={14} /> Snowbike</span></div>
        <SnowbikeDiagram stage={active} />
        <div className="transformation__visual-bottom"><span>Передняя лыжа</span><span className="transformation__progress" style={{ "--progress": `${((active + 1) / steps.length) * 100}%` } as React.CSSProperties} /><span>Задний трак</span></div>
      </div>
    </section>
  );
}
