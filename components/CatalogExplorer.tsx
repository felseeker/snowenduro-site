"use client";

import { useMemo, useState } from "react";
import { ArrowLeftRight, Check, Search, X } from "lucide-react";
import { snowmobiles } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const filters = [
  { value: "Все направления", label: "Все" },
  { value: "Путешествия", label: "Путешествия" },
  { value: "Работа", label: "Работа" },
  { value: "Охота и рыбалка", label: "Охота и рыбалка" },
  { value: "Активное катание", label: "Активное катание" },
];

const comparisonRows = [
  { label: "Категория", value: (name: string) => name },
  { label: "Сценарий", value: (_name: string, purpose: string) => purpose },
  { label: "Марка и модель", value: () => "После подтверждения поставщика" },
  { label: "Двигатель и основные параметры", value: () => "Уточняется" },
  { label: "Оснащение", value: () => "После подтверждения поставщика" },
  { label: "Стоимость", value: () => "Цена по запросу" },
];

export function CatalogExplorer() {
  const [filter, setFilter] = useState("Все направления");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [compareNote, setCompareNote] = useState("");

  const shown = useMemo(() => snowmobiles.filter((item) => {
    const matchesFilter = filter === "Все направления" || item.priority === filter;
    const normalizedQuery = query.trim().toLocaleLowerCase("ru-RU");
    const matchesQuery = !normalizedQuery || `${item.name} ${item.eyebrow} ${item.summary}`.toLocaleLowerCase("ru-RU").includes(normalizedQuery);
    return matchesFilter && matchesQuery;
  }), [filter, query]);

  const selectedItems = snowmobiles.filter((item) => selected.includes(item.slug));

  function toggleCompare(slug: string) {
    setCompareNote("");
    if (selected.includes(slug)) {
      setSelected(selected.filter((item) => item !== slug));
      return;
    }
    if (selected.length >= 3) {
      setCompareNote("Для сравнения можно выбрать до трёх направлений.");
      return;
    }
    setSelected([...selected, slug]);
  }

  return (
    <>
      <div className="catalog-toolbar">
        <label className="catalog-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Поиск по направлениям</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Поиск по задачам" />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="Очистить поиск"><X size={14} /></button>}
        </label>
        <div className="filter-tabs" role="group" aria-label="Фильтр по назначению">
          {filters.map((item) => <button key={item.value} type="button" className={filter === item.value ? "is-active" : ""} onClick={() => setFilter(item.value)} aria-pressed={filter === item.value}>{item.label}</button>)}
        </div>
        <span className="catalog-count">{shown.length.toString().padStart(2, "0")} направления</span>
      </div>
      {shown.length ? (
        <div className="catalog-grid">
          {shown.map((item) => (
            <div className="catalog-grid__item" key={item.slug}>
              <ProductCard item={item} index={snowmobiles.indexOf(item)} />
              <button className={`compare-toggle${selected.includes(item.slug) ? " is-selected" : ""}`} type="button" aria-pressed={selected.includes(item.slug)} onClick={() => toggleCompare(item.slug)}>
                {selected.includes(item.slug) ? <Check size={15} /> : <ArrowLeftRight size={15} />}
                {selected.includes(item.slug) ? "Добавлено к сравнению" : "Сравнить"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="catalog-empty"><span className="eyebrow">Совпадений нет</span><h3>Попробуйте другой запрос</h3><button className="text-link" type="button" onClick={() => { setQuery(""); setFilter("Все направления"); }}>Сбросить фильтры <X size={15} /></button></div>
      )}
      {compareNote && <p className="compare-note" role="status">{compareNote}</p>}
      {selectedItems.length > 0 && (
        <section className="compare-panel" aria-labelledby="compare-title">
          <div className="compare-panel__heading">
            <div><span className="eyebrow">Сравнение направлений</span><h3 id="compare-title">Состав и стоимость уточняются до заказа</h3></div>
            <button type="button" className="text-link" onClick={() => setSelected([])}>Очистить <X size={15} /></button>
          </div>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead><tr><th scope="col">Параметр</th>{selectedItems.map((item) => <th scope="col" key={item.slug}>{item.name}</th>)}</tr></thead>
              <tbody>{comparisonRows.map((row) => <tr key={row.label}><th scope="row">{row.label}</th>{selectedItems.map((item) => <td key={`${item.slug}-${row.label}`}>{row.value(item.name, item.purpose)}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <p className="compare-footnote">Технические значения в таблицу добавим после проверки конкретных предложений поставщика.</p>
        </section>
      )}
    </>
  );
}
