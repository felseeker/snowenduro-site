import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  light?: boolean;
};

export function BrandMark({ compact = false, light = false }: BrandMarkProps) {
  return (
    <Link
      className={`brand-mark${compact ? " brand-mark--compact" : ""}${light ? " brand-mark--light" : ""}`}
      href="/"
      aria-label="SnowEnduro — на главную"
    >
      <svg className="brand-mark__symbol" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M7 29.5 20 6l13 23.5H7Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="m12.8 24.5 7.2-13 7.2 13H12.8Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 33h30M20 4v32M9 13l22 14M31 13 9 27" fill="none" stroke="currentColor" strokeWidth=".85" opacity=".5" />
      </svg>
      <span className="brand-mark__type">
        <span className="brand-mark__name">SNOWENDURO</span>
        {!compact && <span className="brand-mark__tagline">WINTER, REIMAGINED</span>}
      </span>
    </Link>
  );
}
