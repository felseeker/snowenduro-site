import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { formatPrice, type SnowmobileCategory } from "@/data/products";

export function ProductCard({ item, index = 0, compact = false }: { item: SnowmobileCategory; index?: number; compact?: boolean }) {
  return (
    <article className={`product-card${compact ? " product-card--compact" : ""}`}>
      <Link className="product-card__image" href={`/catalog/${item.slug}`} aria-label={`Подробнее: ${item.name}`}>
        <Image src={item.image} alt={item.imageAlt} fill sizes={compact ? "(max-width: 700px) 72vw, 32vw" : "(max-width: 700px) 86vw, (max-width: 1100px) 45vw, 24vw"} />
        <span className="image-index">0{index + 1} <span>/ 03</span></span>
        <span className="product-card__image-action"><MoveUpRight size={16} /></span>
      </Link>
      <div className="product-card__body">
        <div className="product-card__meta"><span>{item.eyebrow}</span><span className="status-dot">{item.availability}</span></div>
        <h3><Link href={`/catalog/${item.slug}`}>{item.name}</Link></h3>
        <p>{item.summary}</p>
        <div className="product-card__tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="product-card__bottom">
          <span className="price-label">{formatPrice(item.price)}</span>
          <Link className="text-link" href={`/catalog/${item.slug}`}>О модели <ArrowUpRight size={15} /></Link>
        </div>
      </div>
    </article>
  );
}
