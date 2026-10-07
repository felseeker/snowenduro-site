"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

export type LeadFormMode = "request" | "compatibility";

type LeadFormProps = {
  mode?: LeadFormMode;
  topic?: string;
  compact?: boolean;
  buttonLabel?: string;
};

export function LeadForm({ mode = "request", topic, compact = false, buttonLabel }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const compatibility = mode === "compatibility";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className={`lead-form${compact ? " lead-form--compact" : ""}`} onSubmit={handleSubmit}>
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
        <span>Согласен на обработку данных для ответа на запрос и ознакомлен с <Link href="/privacy">политикой конфиденциальности</Link>.</span>
      </label>
      <button className="button button--primary form-submit" type="submit">
        {buttonLabel ?? (compatibility ? "Проверить совместимость" : "Отправить запрос")} <ArrowRight size={17} />
      </button>
      <p className="form-privacy"><ShieldCheck size={14} /> Сейчас форма работает в демо-режиме и не передаёт данные на сервер.</p>
      {submitted && (
        <div className="form-result" role="status" aria-live="polite">
          <span className="form-result__icon"><Check size={17} /></span>
          <span><strong>Запрос проверен.</strong> Для реальной отправки подключите Telegram или обработчик формы в настройках сайта.</span>
        </div>
      )}
    </form>
  );
}
