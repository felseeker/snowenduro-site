import { Camera, FileCheck2, Send } from "lucide-react";

export function SupplierPlaceholder({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`supplier-placeholder${compact ? " supplier-placeholder--compact" : ""}`}>
      <span className="supplier-placeholder__icon"><Camera size={19} strokeWidth={1.6} /></span>
      <div className="supplier-placeholder__copy">
        <span className="eyebrow">Материалы конкретной техники</span>
        <h3>Фото и видео выбранной модели запросим у поставщика</h3>
        <p>До заказа сверим внешний вид, комплектацию и документы. Фото и видео выбранной техники запросим у поставщика после подтверждения модели.</p>
      </div>
      <div className="supplier-placeholder__checks">
        <span><FileCheck2 size={15} /> Комплектность</span>
        <span><Camera size={15} /> Фото перед заказом</span>
        <span><Send size={15} /> Подтверждение условий</span>
      </div>
    </aside>
  );
}
