import { ArrowUpRight, MessageCircle } from "lucide-react";
import { LeadForm, type LeadFormMode } from "@/components/LeadForm";
import { getTelegramHref, site } from "@/data/site";

type FinalCTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  topic?: string;
  mode?: LeadFormMode;
};

export function FinalCTA({ eyebrow = "Начнём с вашего маршрута", title, description, topic, mode }: FinalCTAProps) {
  const telegramReady = Boolean(site.telegramUrl.trim());

  return (
    <section className="final-cta page-shell" id="request">
      <div className="final-cta__intro">
        <span className="eyebrow"><span className="eyebrow__pip" />{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <a className="final-cta__telegram" href={getTelegramHref()}>
          <span><MessageCircle size={17} /></span>
          <span>{telegramReady ? "Продолжить в Telegram" : "Оставить запрос"}{telegramReady && <small>Откроется чат SnowEnduro</small>}</span>
          <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="final-cta__form-wrap"><LeadForm topic={topic} mode={mode} compact /></div>
      <div className="final-cta__watermark" aria-hidden="true">SE</div>
    </section>
  );
}
