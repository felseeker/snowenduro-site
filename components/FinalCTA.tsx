import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { LeadForm, type LeadFormMode } from "@/components/LeadForm";
import { managers } from "@/data/site";

type FinalCTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  topic?: string;
  mode?: LeadFormMode;
};

export function FinalCTA({ eyebrow = "Начнём с вашего маршрута", title, description, topic, mode }: FinalCTAProps) {
  return (
    <section className="final-cta page-shell" id="request">
      <div className="final-cta__intro">
        <span className="eyebrow"><span className="eyebrow__pip" />{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="final-cta__managers" aria-label="Контакты менеджеров">
          {managers.map((manager) => <div className="final-cta__manager" key={manager.name}>
            <strong>{manager.name}</strong>
            <a className="final-cta__telegram" href={manager.phoneHref}>
              <span><Phone size={16} /></span><span>{manager.phone}<small>Позвонить</small></span><ArrowUpRight size={17} />
            </a>
            <a className="final-cta__telegram" href={manager.telegramHref} target="_blank" rel="noreferrer">
              <span><MessageCircle size={16} /></span><span>{manager.telegram}<small>Написать в Telegram</small></span><ArrowUpRight size={17} />
            </a>
          </div>)}
        </div>
      </div>
      <div className="final-cta__form-wrap" id="request-form"><LeadForm topic={topic} mode={mode} compact /></div>
      <div className="final-cta__watermark" aria-hidden="true">SE</div>
    </section>
  );
}
