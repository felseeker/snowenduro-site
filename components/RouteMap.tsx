export function RouteMap() {
  return (
    <div className="contact-route-map">
      <div className="contact-route-map__topline">
        <span>ВОСТОЧНАЯ АЗИЯ / СХЕМА</span>
        <span aria-hidden="true">N <b>↑</b></span>
      </div>
      <svg className="contact-route-map__svg" viewBox="0 0 820 420" role="img" aria-labelledby="route-map-title route-map-description">
        <title id="route-map-title">Маршрут из Китая через Уссурийск во Владивосток</title>
        <desc id="route-map-description">Упрощённая карта юга Дальнего Востока. Путь проходит от поставщика в Китае до Уссурийска, затем до Владивостока.</desc>
        <defs>
          <linearGradient id="route-map-land" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#18384b" />
            <stop offset="1" stopColor="#102536" />
          </linearGradient>
          <linearGradient id="route-map-sea" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#092031" />
            <stop offset="1" stopColor="#06121e" />
          </linearGradient>
          <pattern id="route-map-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="#a7d5ee" strokeOpacity=".08" strokeWidth="1" />
          </pattern>
          <filter id="route-map-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>
        <rect width="820" height="420" fill="url(#route-map-sea)" />
        <rect width="820" height="420" fill="url(#route-map-grid)" />
        <path d="M0 0h575c-10 23 15 38 3 57-14 20 22 36 7 55-15 18 17 34 2 53-16 20 18 40 0 61-17 20 19 39 12 58-7 21 22 39 10 60-10 17 20 42 15 76H0Z" fill="url(#route-map-land)" />
        <path d="M0 250c137-24 257-19 352 8 69 20 120 57 176 112l20 50H0Z" fill="#214259" fillOpacity=".62" />
        <path d="M0 233c137-23 248-19 344 8 67 19 119 55 173 105" fill="none" stroke="#92bad1" strokeOpacity=".5" strokeWidth="1.5" strokeDasharray="5 7" />
        <path d="M89 89c109 30 195 14 293 47s153 78 205 130" fill="none" stroke="#c6e4f2" strokeOpacity=".12" strokeWidth="1" />
        <path d="M66 170c105 27 187 23 285 54s159 80 207 137" fill="none" stroke="#c6e4f2" strokeOpacity=".1" strokeWidth="1" />
        <text x="373" y="86" className="contact-route-map__region">РОССИЯ · ПРИМОРЬЕ</text>
        <text x="118" y="365" className="contact-route-map__region contact-route-map__region--china">КИТАЙ</text>
        <text x="610" y="235" className="contact-route-map__sea-label">ЯПОНСКОЕ МОРЕ</text>

        <path d="M255 294c81-21 181-110 285-131 27 44 28 93 51 150" className="contact-route-map__route-shadow" />
        <path d="M255 294c81-21 181-110 285-131 27 44 28 93 51 150" className="contact-route-map__route" />

        <g className="contact-route-map__place contact-route-map__place--china">
          <circle cx="255" cy="294" r="17" className="contact-route-map__halo" />
          <circle cx="255" cy="294" r="6" className="contact-route-map__dot" />
          <text x="152" y="328" className="contact-route-map__city">КИТАЙ</text>
          <text x="152" y="348" className="contact-route-map__detail">ПОСТАВЩИК</text>
        </g>
        <g className="contact-route-map__place contact-route-map__place--ussuriysk">
          <circle cx="540" cy="163" r="16" className="contact-route-map__halo" />
          <circle cx="540" cy="163" r="6" className="contact-route-map__dot" />
          <text x="495" y="125" className="contact-route-map__city">УССУРИЙСК</text>
          <text x="495" y="144" className="contact-route-map__detail">ТАМОЖЕННЫЙ ЭТАП</text>
        </g>
        <g className="contact-route-map__place contact-route-map__place--vladivostok">
          <circle cx="591" cy="313" r="17" className="contact-route-map__halo" />
          <circle cx="591" cy="313" r="6" className="contact-route-map__dot" />
          <text x="622" y="307" className="contact-route-map__city">ВЛАДИВОСТОК</text>
          <text x="622" y="328" className="contact-route-map__detail">ПЕРЕДАЧА</text>
        </g>
      </svg>
      <div className="contact-route-map__legend"><span><i />Маршрут после подтверждения поставщика</span><span>Китай → Уссурийск → Владивосток</span></div>
    </div>
  );
}
