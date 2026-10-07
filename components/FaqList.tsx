import { ChevronDown } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export function FaqList({ items, className = "" }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={`faq-list ${className}`}>
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>
            <span>{item.question}</span>
            <ChevronDown size={17} aria-hidden="true" />
          </summary>
          <div className="faq-item__answer"><p>{item.answer}</p></div>
        </details>
      ))}
    </div>
  );
}
