"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";

type GalleryImage = { src: string; alt: string; label: string; treatment?: "cutout" };

export function ProductGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState(0);
  const current = images[active];

  function step(direction: number) {
    setActive((index) => (index + direction + images.length) % images.length);
  }

  return (
    <div className="product-gallery">
      <div className={`product-gallery__main${current.treatment === "cutout" ? " product-gallery__main--cutout" : ""}`}>
        <Image src={current.src} alt={current.alt} fill loading="eager" sizes="(max-width: 900px) 100vw, 62vw" />
        <span className="product-gallery__label">{current.label}</span>
        <div className="product-gallery__controls">
          <button type="button" onClick={() => step(-1)} aria-label="Предыдущее фото"><ArrowLeft size={17} /></button>
          <span>{String(active + 1).padStart(2, "0")} <i>/</i> {String(images.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => step(1)} aria-label="Следующее фото"><ArrowRight size={17} /></button>
        </div>
        <span className="product-gallery__zoom"><Expand size={14} /> Детали модели</span>
      </div>
      <div className="product-gallery__thumbs" role="tablist" aria-label="Фотографии снегохода">
        {images.map((image, index) => (
          <button key={image.src} type="button" role="tab" aria-selected={active === index} aria-label={`Показать фото ${index + 1}: ${image.label}`} className={active === index ? "is-active" : ""} onClick={() => setActive(index)}>
            <Image src={image.src} alt="" fill sizes="(max-width: 900px) 28vw, 12vw" />
          </button>
        ))}
      </div>
      <p className="product-gallery__caption">Ракурсы и детали модели</p>
    </div>
  );
}
