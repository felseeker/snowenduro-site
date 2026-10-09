"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Info, ShieldCheck } from "lucide-react";

export type LeadFormMode = "request" | "compatibility";

type LeadFormProps = {
  mode?: LeadFormMode;
  topic?: string;
  compact?: boolean;
  buttonLabel?: string;
};

const crmUrl = process.env.NEXT_PUBLIC_CRM_URL?.replace(/\/+$/, "") || "";
const liveSubmissionEnabled = process.env.NEXT_PUBLIC_CRM_LEADS_ENABLED === "true" && Boolean(crmUrl);

export function LeadForm({ mode = "request", topic, compact = false, buttonLabel }: LeadFormProps) {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const idempotencyKey = useRef<string | null>(null);
  const compatibility = mode === "compatibility";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult("");
    setError("");
    if (!liveSubmissionEnabled) {
      setResult("Проверка завершена. Данные формы не отправлялись и не сохранялись.");
      return;
    }

    const form = event.currentTarget;
    const values = new FormData(form);
    if (!idempotencyKey.current) idempotencyKey.current = crypto.randomUUID();
    setPending(true);
    try {
      const response = await fetch(`${crmUrl}/api/public/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: String(values.get("name") || ""),
          phone: String(values.get("phone") || ""),
          product_interest: compatibility
            ? "Проверка совместимости Snowbike"
            : String(values.get("topic") || "Общее обращение"),
          source_page: `${window.location.origin}${window.location.pathname}`,
          compatibility_make: compatibility ? String(values.get("bike-make") || "") : null,
          compatibility_model: compatibility ? String(values.get("bike-model") || "") : null,
          compatibility_year: compatibility ? Number(values.get("bike-year")) : null,
          consent: values.get("consent") === "on",
          consent_policy_version: "2026-10-09-v1",
          idempotency_key: idempotencyKey.current,
          website: String(values.get("website") || ""),
        }),
        signal: AbortSignal.timeout(15_000),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok) throw new Error(payload?.error || "Не удалось отправить заявку. Попробуйте ещё раз.");
      form.reset();
      idempotencyKey.current = null;
      setResult(`Заявка №${String(payload?.code ?? "").padStart(4, "0")} отправлена. Менеджер свяжется с вами.`);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Не удалось отправить заявку. Проверьте соединение и попробуйте ещё раз.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className={`lead-form${compact ? " lead-form--compact" : ""}`} onSubmit={(event) => void handleSubmit(event)}>
      <p className="form-privacy">
        <ShieldCheck size={14} />
        {liveSubmissionEnabled
          ? "Заявка отправляется в CRM SnowEnduro; данные используются для ответа на обращение."
          : "Форма пока работает в режиме проверки. Не вводите реальные контактные данные: они не отправляются и не сохраняются."}
      </p>
      {compatibility && (
        <>
          <div className="form-row form-row--two">
            <label className="field">
              <span>Марка эндуро</span>
              <input name="bike-make" type="text" placeholder="Например, марка мотоцикла" autoComplete="off" maxLength={100} required />
            </label>
            <label className="field">
              <span>Модель эндуро</span>
              <input name="bike-model" type="text" placeholder="Модель мотоцикла" autoComplete="off" maxLength={100} required />
            </label>
          </div>
          <label className="field">
            <span>Год выпуска</span>
            <input name="bike-year" type="number" inputMode="numeric" min={1950} max={2100} placeholder="Например, 2022" required />
          </label>
        </>
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
      <div className="lead-form__honeypot" aria-hidden="true">
        <label>Не заполняйте это поле<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="consent-check">
        <input name="consent" type="checkbox" required />
        <span>
          {liveSubmissionEnabled
            ? <>Согласен на обработку данных для ответа на обращение. <Link href="/privacy">Политика обработки данных</Link>.</>
            : <>Понимаю, что это только проверка формы. <Link href="/privacy">Подробнее о данных</Link>.</>}
        </span>
      </label>
      <button className="button button--primary form-submit" type="submit" disabled={pending}>
        {pending ? "Отправляем…" : liveSubmissionEnabled ? "Отправить заявку" : buttonLabel ?? (compatibility ? "Проверить поля" : "Проверить форму")} <ArrowRight size={17} />
      </button>
      {error && <div className="form-result form-result--error" role="alert" aria-live="assertive"><Info size={17} /><span>{error}</span></div>}
      {result && <div className="form-result" role="status" aria-live="polite"><span className="form-result__icon"><Info size={17} /></span><span>{result}</span></div>}
    </form>
  );
}
