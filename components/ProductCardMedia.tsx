"use client";

import { useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCardMedia({
  item,
  index,
  total,
  compact,
}: {
  item: Product;
  index: number;
  total: number;
  compact: boolean;
}) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const photos = item.gallery;
  const current = photos[active] ?? photos[0];

  function move(direction: number) {
    setActive((position) => (position + direction + photos.length) % photos.length);
  }

  function onTouchEnd(event: TouchEvent<HTMLAnchorElement>) {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null || photos.length < 2) return;
    const delta = event.changedTouches[0].clientX - startX;
    if (Math.abs(delta) < 42) return;
    event.preventDefault();
    move(delta < 0 ? 1 : -1);
  }

  return (
    <div className="product-card__media">
      <Link
        className={`product-card__image${current.treatment === "cutout" ? " product-card__image--cutout" : ""}`}
        href={`/catalog/${item.slug}`}
        aria-label={`Подробнее: ${item.name}; фото ${active + 1} из ${photos.length}`}
        onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
        onTouchEnd={onTouchEnd}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes={compact ? "(max-width: 700px) 72vw, 32vw" : "(max-width: 700px) 86vw, (max-width: 1100px) 45vw, 24vw"}
        />
        <span className="image-index">{String(index + 1).padStart(2, "0")} <span>/ {String(total).padStart(2, "0")}</span></span>
        <span className="product-card__image-action"><MoveUpRight size={16} /></span>
      </Link>
      {photos.length > 1 && (
        <div className="product-card__gallery-nav" aria-label={`Фотографии ${item.name}`}>
          <button type="button" aria-label="Предыдущее фото" onClick={() => move(-1)}><ArrowLeft size={14} /></button>
          <span aria-live="polite">{String(active + 1).padStart(2, "0")} <i>/</i> {String(photos.length).padStart(2, "0")}</span>
          <button type="button" aria-label="Следующее фото" onClick={() => move(1)}><ArrowRight size={14} /></button>
        </div>
      )}
    </div>
  );
}
