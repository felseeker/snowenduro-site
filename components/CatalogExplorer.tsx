"use client";

import { useMemo, useState } from "react";
import { ArrowLeftRight, Check, Search, X } from "lucide-react";
import { displayPrice, snowmobiles, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const filters = [
  { value: "all", label: "Все модели" },
  { value: "priced", label: "Есть ориентир цены" },
  { value: "request", label: "Цена по запросу" },
  { value: "utility", label: "Утилитарные" },
];

const comparisonRows: { label: string; value: (item: Product) => string }[] = [
  { label: "Назначение", value: (item) => item.purpose },
  { label: "Двигатель", value: (item) => item.engine },
  { label: "Мощность", value: (item) => item.horsepower },
  { label: "Гусеница", value: (item) => item.track },
  { label: "Посадочных мест", value: (item) => item.seats },
  { label: "Цена", value: (item) => displayPrice(item.price) },
];

function modelWord(count: number) {
  const lastTwo = count % 100;
  if (lastTwo >= 11 && lastTwo <= 14) return "моделей";
  const last = count % 10;
  if (last === 1) return "модель";
  if (last >= 2 && last <= 4) return "модели";
  return "моделей";
}

export function CatalogExplorer() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [compareNote, setCompareNote] = useState("");

  const shown = useMemo(() => snowmobiles.filter((item) => {
    const matchesFilter = filter === "all"
      || (filter === "priced" && item.price !== null)
      || (filter === "request" && item.price === null)
      || (filter === "utility" && item.purpose.toLocaleLowerCase("ru-RU").includes("утилитар"));
    const normalizedQuery = query.trim().toLocaleLowerCase("ru-RU");
    const searchable = `${item.name} ${item.eyebrow} ${item.summary} ${item.tags.join(" ")} ${item.purpose}`.toLocaleLowerCase("ru-RU");
    return matchesFilter && (!normalizedQuery || searchable.includes(normalizedQuery));
  }), [filter, query]);

  const selectedItems = snowmobiles.filter((item) => selected.includes(item.slug));

  function toggleCompare(slug: string) {
    setCompareNote("");
    if (selected.includes(slug)) {
      setSelected(selected.filter((item) => item !== slug));
      return;
    }
    if (selected.length >= 3) {
      setCompareNote("В сравнении могут быть не более трёх моделей.");
      return;
    }
    setSelected([...selected, slug]);
  }

  return (
    <>
      <div className="catalog-toolbar">
        <label className="catalog-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Поиск снегоходов</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Поиск по моделям и параметрам" />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="Очистить поиск"><X size={14} /></button>}
        </label>
        <div className="filter-tabs" role="group" aria-label="Фильтр моделей">
          {filters.map((item) => <button key={item.value} type="button" className={filter === item.value ? "is-active" : ""} onClick={() => setFilter(item.value)} aria-pressed={filter === item.value}>{item.label}</button>)}
        </div>
        <span className="catalog-count">{shown.length} {modelWord(shown.length)}</span>
      </div>
      {shown.length ? (
        <div className="catalog-grid">
          {shown.map((item) => (
            <div className="catalog-grid__item" key={item.slug}>
              <ProductCard item={item} index={snowmobiles.indexOf(item)} />
              <button className={`compare-toggle${selected.includes(item.slug) ? " is-selected" : ""}`} type="button" aria-pressed={selected.includes(item.slug)} onClick={() => toggleCompare(item.slug)}>
                {selected.includes(item.slug) ? <Check size={15} /> : <ArrowLeftRight size={15} />}
                {selected.includes(item.slug) ? "Убрать из сравнения" : "Сравнить модель"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="catalog-empty"><span className="eyebrow">Совпадений нет</span><h3>Попробуйте другой запрос</h3><button className="text-link" type="button" onClick={() => { setQuery(""); setFilter("all"); }}>Сбросить фильтры <X size={15} /></button></div>
      )}
      {compareNote && <p className="compare-note" role="status">{compareNote}</p>}
      {selectedItems.length > 0 && (
        <section className="compare-panel" aria-labelledby="compare-title">
          <div className="compare-panel__heading">
            <div><span className="eyebrow">Сравнение</span><h3 id="compare-title">Сравнение характеристик</h3></div>
            <button type="button" className="text-link" onClick={() => setSelected([])}>Очистить <X size={15} /></button>
          </div>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead><tr><th scope="col">Параметр</th>{selectedItems.map((item) => <th scope="col" key={item.slug}>{item.name}</th>)}</tr></thead>
              <tbody>{comparisonRows.map((row) => <tr key={row.label}><th scope="row">{row.label}</th>{selectedItems.map((item) => <td key={`${item.slug}-${row.label}`}>{row.value(item)}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <p className="compare-footnote">Сопоставьте двигатель, мощность, гусеницу и посадку под ваш сценарий.</p>
        </section>
      )}
    </>
  );
}
