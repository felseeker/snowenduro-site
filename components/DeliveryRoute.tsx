"use client";

import { useState } from "react";
import { ArrowRight, Check, CircleDot, MapPin } from "lucide-react";

const stops = [
  { city: "Китай", role: "Поставщик", detail: "Сверяем доступную модель, комплектацию и документы. До оплаты запрашиваем актуальные фото и видео выбранной техники." },
  { city: "Уссурийск", role: "Таможенный этап", detail: "Порядок прохождения и необходимый пакет документов подтверждаем под конкретный тип техники и выбранный маршрут." },
  { city: "Владивосток", role: "Передача и проверка", detail: "Согласуем, где и как принять технику, а также доступные способы отправки дальше по России." },
  { city: "Ваш регион", role: "Получение", detail: "Внутреннюю доставку и её стоимость уточняем отдельно после того, как известны город и выбранный перевозчик." },
];

export function DeliveryRoute() {
  const [active, setActive] = useState(0);
  const progress = `${(active / (stops.length - 1)) * 100}%`;

  return (
    <div className="route-module">
      <div className="route-module__map" aria-label="Схема маршрута доставки из Китая через Уссурийск и Владивосток">
        <div className="route-module__grid" />
        <div className="route-module__line" style={{ "--route-progress": progress } as React.CSSProperties} />
        <div className="route-module__stops">
          {stops.map((stop, index) => (
            <button className={`route-stop${active === index ? " is-active" : ""}${index < active ? " is-complete" : ""}`} key={stop.city} onClick={() => setActive(index)} aria-pressed={active === index}>
              <span className="route-stop__marker">{index < active ? <Check size={13} /> : index === active ? <MapPin size={14} /> : <CircleDot size={12} />}</span>
              <span className="route-stop__city">{stop.city}</span>
              <span className="route-stop__role">{stop.role}</span>
            </button>
          ))}
        </div>
        <span className="route-module__caption"><span className="route-pulse" />Маршрут согласуется под выбранную технику</span>
      </div>
      <div className="route-module__detail" aria-live="polite">
        <span className="eyebrow">Этап 0{active + 1} / 0{stops.length}</span>
        <h3>{stops[active].city}</h3>
        <span className="route-module__role">{stops[active].role}</span>
        <p>{stops[active].detail}</p>
        <div className="route-module__controls">
          <button type="button" className="text-link" onClick={() => setActive((current) => Math.max(0, current - 1))} disabled={active === 0}>Назад</button>
          <button type="button" className="button button--small button--outline" onClick={() => setActive((current) => Math.min(stops.length - 1, current + 1))} disabled={active === stops.length - 1}>Следующий этап <ArrowRight size={14} /></button>
        </div>
      </div>
    </div>
  );
}
