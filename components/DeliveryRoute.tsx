"use client";

import { useState } from "react";
import { ArrowRight, Check, CircleDot, MapPin } from "lucide-react";

const routePath = "M98 352 C225 334 312 228 476 188 C545 171 565 238 637 319 C700 390 786 254 920 142";

const stops = [
  { city: "Китай", role: "Поставщик", detail: "Сверяем доступную модель, комплектацию и документы. До оплаты запрашиваем актуальные фото и видео выбранной техники.", x: "12%", y: "71%", mobileX: "12%" },
  { city: "Уссурийск", role: "Таможенный этап", detail: "Порядок прохождения и необходимый пакет документов подтверждаем под конкретный тип техники и выбранный маршрут.", x: "48%", y: "38%", mobileX: "38%" },
  { city: "Владивосток", role: "Передача и проверка", detail: "Согласуем, где и как принять технику, а также доступные способы отправки дальше по России.", x: "65%", y: "66%", mobileX: "64%" },
  { city: "Ваш регион", role: "Получение", detail: "Внутреннюю доставку и её стоимость уточняем отдельно после того, как известны город и выбранный перевозчик.", x: "90%", y: "28%", mobileX: "89%" },
];

export function DeliveryRoute() {
  const [active, setActive] = useState(0);
  const activePath = `${(active / (stops.length - 1)) * 100}`;

  return (
    <div className="route-module">
      <div className="route-module__map" aria-label="Схема маршрута доставки из Китая через Уссурийск и Владивосток">
        <div className="route-module__grid" aria-hidden="true" />
        <svg className="route-module__terrain" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="delivery-land" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#173549" />
              <stop offset=".56" stopColor="#102a3d" />
              <stop offset="1" stopColor="#0b1d2b" />
            </linearGradient>
            <linearGradient id="delivery-sea" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#0b2638" />
              <stop offset="1" stopColor="#06131f" />
            </linearGradient>
            <linearGradient id="delivery-route" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#55bafa" />
              <stop offset=".55" stopColor="#9be0ff" />
              <stop offset="1" stopColor="#51aeea" />
            </linearGradient>
            <filter id="delivery-route-glow" x="-30%" y="-60%" width="160%" height="220%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>
          <rect width="1000" height="500" fill="url(#delivery-sea)" />
          <path d="M0 0h765c-22 43 12 67-5 108-17 39 22 62 2 98-18 35 22 61-3 100-25 38 13 62-7 98-12 23 5 51 11 96H0Z" fill="url(#delivery-land)" />
          <path d="M765 0c-22 43 12 67-5 108-17 39 22 62 2 98-18 35 22 61-3 100-25 38 13 62-7 98-12 23 5 51 11 96" fill="none" stroke="#9cc6dc" strokeOpacity=".4" strokeWidth="2" />
          <path d="M0 154c160-46 303-11 421 60s194 110 328 83M0 188c161-45 304-9 415 55s204 105 323 81M0 222c143-31 271 5 379 55s199 91 340 73" fill="none" stroke="#b7d8e9" strokeOpacity=".12" strokeWidth="1.3" />
          <path d="M96 63c118 17 185 77 280 103s197 29 280-5M47 91c121 18 193 80 283 109s191 34 288-2M31 409c141-58 246-44 345 3s192 46 311 1" fill="none" stroke="#a6c9dd" strokeOpacity=".1" strokeWidth="1.2" />
          <path d="M308 0c-5 62 14 111 45 162s40 91 24 136-11 105 24 202" fill="none" stroke="#a6c9dd" strokeOpacity=".19" strokeWidth="1.4" strokeDasharray="5 8" />
          <path d="M0 352c180-26 278-118 418-158s152 67 219 125 168-50 283-177" fill="none" stroke="#6dc6ff" strokeOpacity=".25" strokeWidth="12" filter="url(#delivery-route-glow)" />
          <path d={routePath} fill="none" stroke="#b5d7e8" strokeOpacity=".38" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round" />
          <path d={routePath} pathLength="100" fill="none" stroke="url(#delivery-route)" strokeWidth="3" strokeDasharray={`${activePath} 100`} strokeLinecap="round" className="route-module__progress-path" />
          <text x="64" y="130" className="route-module__map-label">КИТАЙ</text>
          <text x="370" y="95" className="route-module__map-label route-module__map-label--primorye">РОССИЯ · ПРИМОРЬЕ</text>
          <text x="806" y="442" className="route-module__map-label route-module__map-label--sea">ЯПОНСКОЕ МОРЕ</text>
          <text x="38" y="469" className="route-module__map-coordinate">СХЕМА МАРШРУТА / НЕ В МАСШТАБЕ</text>
        </svg>
        <div className="route-module__map-topline"><span><i /> КОРИДОР ПОСТАВКИ</span><span aria-hidden="true">N <b>↑</b></span></div>
        <div className="route-module__stops">
          {stops.map((stop, index) => (
            <button
              className={`route-stop${active === index ? " is-active" : ""}${index < active ? " is-complete" : ""}`}
              key={stop.city}
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              style={{ "--stop-x": stop.x, "--stop-y": stop.y, "--stop-x-mobile": stop.mobileX } as React.CSSProperties}
            >
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
