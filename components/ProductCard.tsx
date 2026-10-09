import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { displayPrice, priceNote, snowbikeKits, snowmobiles, type Product } from "@/data/products";
import { ProductCardMedia } from "@/components/ProductCardMedia";

export function ProductCard({ item, index = 0, compact = false }: { item: Product; index?: number; compact?: boolean }) {
  const total = item.category === "snowbike" ? snowbikeKits.length : snowmobiles.length;
  const availability = item.availability || "on_order";
  const availabilityLabel = {
    in_stock: "В наличии",
    on_order: "Под заказ",
    out_of_stock: "Нет в наличии",
  }[availability];
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
      <ProductCardMedia item={item} index={index} total={total} compact={compact} />
      <div className="product-card__body">
        <div className="product-card__meta"><span>{item.eyebrow}</span><span className="product-card__profile">{item.purpose}</span></div>
        <h3><Link href={`/catalog/${item.slug}`}>{item.name}</Link></h3>
        <p>{item.summary}</p>
        <div className="product-card__tags">{item.tags.map(renderTag)}</div>
        <span className={`product-card__availability product-card__availability--${availability}`}>{availabilityLabel}</span>
        <div className="product-card__bottom">
          <span className="product-card__price"><span className="price-label">{displayPrice(item.price)}</span>{item.price !== null && <small>{priceNote}</small>}</span>
          <Link className="text-link" href={`/catalog/${item.slug}`}>О модели <ArrowUpRight size={15} /></Link>
        </div>
      </div>
    </article>
  );
}
