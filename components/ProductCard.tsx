import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { displayPrice, priceNote, snowbikeKits, snowmobiles, type Product } from "@/data/products";

export function ProductCard({ item, index = 0, compact = false }: { item: Product; index?: number; compact?: boolean }) {
  const total = item.category === "snowbike" ? snowbikeKits.length : snowmobiles.length;
  const renderTag = (tag: string) => {
    const metric = tag.match(/^([\d,.]+)\s+(.+)$/);
    return metric ? (
      <span className="product-tag product-tag--metric" key={tag}><strong>{metric[1]}</strong><small>{metric[2]}</small></span>
    ) : (
      <span className="product-tag" key={tag}>{tag}</span>
    );
  };
  return (
    <article className={`product-card${compact ? " product-card--compact" : ""}`}>
      <Link className={`product-card__image${item.imageTreatment === "cutout" ? " product-card__image--cutout" : ""}`} href={`/catalog/${item.slug}`} aria-label={`Подробнее: ${item.name}`}>
        <Image src={item.image} alt={item.imageAlt} fill sizes={compact ? "(max-width: 700px) 72vw, 32vw" : "(max-width: 700px) 86vw, (max-width: 1100px) 45vw, 24vw"} />
        <span className="image-index">{String(index + 1).padStart(2, "0")} <span>/ {String(total).padStart(2, "0")}</span></span>
        <span className="product-card__image-action"><MoveUpRight size={16} /></span>
      </Link>
      <div className="product-card__body">
        <div className="product-card__meta"><span>{item.eyebrow}</span><span className="status-dot">{item.availability}</span></div>
        <h3><Link href={`/catalog/${item.slug}`}>{item.name}</Link></h3>
        <p>{item.summary}</p>
        <div className="product-card__tags">{item.tags.map(renderTag)}</div>
        <div className="product-card__bottom">
          <span className="product-card__price"><span className="price-label">{displayPrice(item.price)}</span>{item.price !== null && <small>{priceNote}</small>}</span>
          <Link className="text-link" href={`/catalog/${item.slug}`}>О модели <ArrowUpRight size={15} /></Link>
        </div>
      </div>
    </article>
  );
}
