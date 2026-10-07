type SnowbikeDiagramProps = { stage?: number; compact?: boolean };

export function SnowbikeDiagram({ stage = 3, compact = false }: SnowbikeDiagramProps) {
  const trackReady = stage >= 1;
  const skiReady = stage >= 1;
  const frontWheel = stage < 1;
  const rearWheel = stage < 1;

  return (
    <svg className={`snowbike-diagram${compact ? " snowbike-diagram--compact" : ""}`} viewBox="0 0 920 520" role="img" aria-label="Схема эндуро: заднее колесо заменено гусеничным модулем, переднее колесо — лыжным узлом">
      <defs>
        <linearGradient id="diagramGlow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#63C4FF" stopOpacity=".22" />
          <stop offset="1" stopColor="#63C4FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="moduleFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1a3144" />
          <stop offset="1" stopColor="#07121e" />
        </linearGradient>
        <pattern id="techGrid" width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke="#8ccfff" strokeOpacity=".09" strokeWidth=".7" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="920" height="520" rx="16" fill="#081726" />
      <rect x="0" y="0" width="920" height="520" rx="16" fill="url(#techGrid)" />
      <ellipse cx="460" cy="407" rx="344" ry="56" fill="url(#diagramGlow)" />
      <path d="M52 407H866" stroke="#8bcfff" strokeOpacity=".25" strokeWidth="1" strokeDasharray="3 7" />

      {/* Rear snow track module replaces the stock wheel. */}
      <g className={trackReady ? "diagram-part is-ready" : "diagram-part"}>
        <path d="M211 340c0-23 17-42 40-42h108c27 0 50 20 50 46v28c0 21-18 38-40 38H250c-22 0-39-17-39-39v-31Z" fill="url(#moduleFill)" stroke="#63c4ff" strokeWidth="2" />
        <circle cx="251" cy="358" r="26" fill="#06101b" stroke="#9baab7" strokeWidth="2" />
        <circle cx="251" cy="358" r="8" fill="#9baab7" />
        <circle cx="361" cy="358" r="27" fill="#06101b" stroke="#9baab7" strokeWidth="2" />
        <circle cx="361" cy="358" r="8" fill="#9baab7" />
        <circle cx="304" cy="377" r="14" fill="#06101b" stroke="#688096" strokeWidth="2" />
        <path d="M225 334h156M225 386h156" stroke="#8ccfff" strokeOpacity=".45" strokeWidth="1.5" strokeDasharray="4 5" />
        {!trackReady && <circle cx="303" cy="350" r="58" fill="none" stroke="#dae8f4" strokeOpacity=".5" strokeWidth="8" />}
      </g>
      {rearWheel && <circle className="diagram-wheel" cx="303" cy="358" r="56" fill="none" stroke="#a6b5c2" strokeWidth="9" strokeDasharray="7 7" />}

      {/* Frame, seat and engine: simplified generic enduro silhouette. */}
      <path d="m323 316 83-87 123 16 85 65-74 39-123-14-74 20-20-39Z" fill="#122739" stroke="#abc0d0" strokeWidth="5" strokeLinejoin="round" />
      <path d="m384 226-24-26 111-5 52 17-43 18Z" fill="#c7d4de" stroke="#90a4b5" strokeWidth="3" strokeLinejoin="round" />
      <path d="m437 245 32 28 39 52-53 11-42-40 24-51Z" fill="#152d40" stroke="#63c4ff" strokeWidth="2" />
      <path d="m469 273 53-25 23 13 5 49-38 22-37-31-6-28Z" fill="#0b1927" stroke="#94aab9" strokeWidth="3" />
      <path d="m480 285 46-14 8 31-36 20-18-19Z" fill="#334b5e" />
      <path d="m527 262 65 10 37 44-51 1-26-33-25 7Z" fill="#0b1824" stroke="#92a6b6" strokeWidth="4" strokeLinejoin="round" />
      <path d="m601 306 40 16-34 20-24-14M623 307l31 14" stroke="#b6c7d3" strokeWidth="4" strokeLinecap="round" />
      <path d="m611 310 51-77 19 7-30 91" fill="#162c3e" stroke="#c1d0db" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m657 241 24-21 51-4M676 224l7 15" fill="none" stroke="#c1d0db" strokeWidth="5" strokeLinecap="round" />
      <path d="m638 336 71 20 37 18-119-4-28-11Z" fill="#10283a" stroke="#d0dbe3" strokeWidth="2" strokeLinejoin="round" />
      {frontWheel && <circle className="diagram-wheel" cx="686" cy="358" r="47" fill="none" stroke="#a6b5c2" strokeWidth="9" strokeDasharray="7 7" />}
      <g className={skiReady ? "diagram-part is-ready" : "diagram-part"}>
        <path d="m635 362 99 8c16 1 29 9 38 20-33 7-97 5-139-4-9-2-12-12 2-24Z" fill="#dbe6ee" stroke="#63c4ff" strokeWidth="3" strokeLinejoin="round" />
        <path d="m629 385 90 7M642 367l12 16m-1-14 12 16" stroke="#597286" strokeWidth="2" />
      </g>

      {/* Technical callouts illuminate as the story advances. */}
      <g className={stage >= 1 ? "diagram-callout is-visible" : "diagram-callout"}>
        <path d="M284 306 216 238h-98" fill="none" stroke="#63c4ff" strokeWidth="1.4" />
        <circle cx="284" cy="306" r="4" fill="#63c4ff" />
        <text x="76" y="229" fill="#cbeaff" fontSize="13" letterSpacing="1.6">ЗАДНИЙ ТРАК</text>
        <text x="76" y="248" fill="#8ea5b6" fontSize="11">модуль вместо колеса</text>
      </g>
      <g className={stage >= 1 ? "diagram-callout is-visible" : "diagram-callout"}>
        <path d="M687 354 756 269h62" fill="none" stroke="#63c4ff" strokeWidth="1.4" />
        <circle cx="687" cy="354" r="4" fill="#63c4ff" />
        <text x="751" y="254" fill="#cbeaff" fontSize="13" letterSpacing="1.6">ПЕРЕДНЯЯ ЛЫЖА</text>
        <text x="751" y="273" fill="#8ea5b6" fontSize="11">вместо переднего колеса</text>
      </g>
      <text x="42" y="48" fill="#75caff" fontSize="11" letterSpacing="2.2">SNOWBIKE / СХЕМА УСТРОЙСТВА</text>
      <text x="42" y="473" fill="#8299aa" fontSize="11" letterSpacing="1.2">КОНКРЕТНЫЕ УЗЛЫ И СОВМЕСТИМОСТЬ ЗАВИСЯТ ОТ МОТОЦИКЛА И КОМПЛЕКТА</text>
    </svg>
  );
}
