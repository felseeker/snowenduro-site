import Image from "next/image";
import { ArrowRight } from "lucide-react";

const views = [
  {
    state: "До переоборудования",
    title: "Обычный эндуро",
    image: "/media/snowbike-before.png",
    alt: "Обычный эндуро на двух колёсах, вид сбоку",
    details: ["Спереди — колесо", "Сзади — колесо"],
  },
  {
    state: "После установки Snowbike-комплекта",
    title: "Зимняя конфигурация",
    image: "/media/snowbike-after.png",
    alt: "Эндуро после установки Snowbike-комплекта: передняя лыжа и задний гусеничный модуль",
    details: ["Спереди — лыжа", "Сзади — гусеничный модуль"],
  },
];

export function SnowbikeComparison() {
  return (
    <div className="snowbike-photo-comparison" aria-label="Сравнение эндуро до и после установки Snowbike-комплекта">
      {views.map((view, index) => (
        <figure className={`snowbike-photo${index === 1 ? " snowbike-photo--winter" : ""}`} key={view.state}>
          <div className="snowbike-photo__image">
            <Image src={view.image} alt={view.alt} fill sizes="(max-width: 1200px) 90vw, 38vw" />
            <span className="snowbike-photo__state">{view.state}</span>
          </div>
          <figcaption className="snowbike-photo__caption">
            <strong>{view.title}</strong>
            <div className="snowbike-photo__details">
              {view.details.map((detail) => <span key={detail}>{detail}</span>)}
            </div>
          </figcaption>
        </figure>
      ))}
      <span className="snowbike-photo-comparison__arrow" aria-hidden="true"><ArrowRight size={20} /></span>
    </div>
  );
}
