"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Info, ShieldCheck } from "lucide-react";

export type LeadFormMode = "request" | "compatibility";

type LeadFormProps = {
  mode?: LeadFormMode;
  topic?: string;
  compact?: boolean;
  buttonLabel?: string;
};

export function LeadForm({ mode = "request", topic, compact = false, buttonLabel }: LeadFormProps) {
  const [checked, setChecked] = useState(false);
  const compatibility = mode === "compatibility";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setChecked(true);
  }

  return (
    <form className={`lead-form${compact ? " lead-form--compact" : ""}`} onSubmit={handleSubmit}>
      <p className="form-privacy"><ShieldCheck size={14} /> Форма пока демонстрационная. Не вводите реальные контактные данные: они не отправляются и не сохраняются.</p>
      {compatibility && (
        <div className="form-row form-row--two">
          <label className="field">
            <span>Марка эндуро</span>
            <input name="bike-make" type="text" placeholder="Например, марка мотоцикла" autoComplete="off" required />
          </label>
          <label className="field">
            <span>Модель и год</span>
            <input name="bike-model" type="text" placeholder="Модель, год выпуска" autoComplete="off" required />
          </label>
        </div>
      )}
      <div className="form-row form-row--two">
        <label className="field">
          <span>Как к вам обращаться</span>
          <input name="name" type="text" autoComplete="name" placeholder="Имя" minLength={2} maxLength={80} required />
        </label>
        <label className="field">
          <span>Телефон для связи</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+7 ___ ___-__-__" pattern="[+0-9 ()-]{7,20}" required />
        </label>
      </div>
      {!compatibility && (
        <label className="field">
          <span>Что подбираем</span>
          <select name="topic" defaultValue={topic ?? ""} required>
            <option value="" disabled>Выберите направление</option>
            <option value="snowbike">Snowbike-комплект</option>
            <option value="snowmobile">Снегоход под заказ</option>
            <option value="undecided">Пока не определился</option>
          </select>
        </label>
      )}
      <label className="consent-check">
        <input type="checkbox" required />
        <span>Понимаю, что это только проверка формы. <Link href="/privacy">Подробнее о данных</Link>.</span>
      </label>
      <button className="button button--primary form-submit" type="submit">
        {buttonLabel ?? (compatibility ? "Проверить поля" : "Проверить форму")} <ArrowRight size={17} />
      </button>
      {checked && (
        <div className="form-result" role="status" aria-live="polite">
          <span className="form-result__icon"><Info size={17} /></span>
          <span><strong>Это не отправка заявки.</strong> Поля проверены в браузере; данные никуда не переданы и не сохранены. Канал приёма пока не подключён.</span>
        </div>
      )}
    </form>
  );
}
