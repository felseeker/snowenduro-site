import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileLock2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Конфиденциальность и форма",
  description: "Как работает форма и какие данные собирает аналитика сайта SnowEnduro.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Конфиденциальность и форма", description: "Как работает форма и какие данные собирает аналитика сайта SnowEnduro.", url: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="legal-page page-shell">
      <div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><span>Конфиденциальность</span></div>
      <div className="legal-page__hero"><span className="legal-page__icon"><FileLock2 size={21} /></span><span className="eyebrow">SnowEnduro / Форма</span><h1>Заявки пока<br /><em>не отправляются.</em></h1><p>Канал для приёма обращений ещё не подключён. Форма на сайте служит только для проверки обязательных полей.</p></div>
      <div className="legal-draft-note"><ShieldCheck size={18} /><p><strong>Важно:</strong> не вводите в форму реальные контактные данные. Сайт не отправляет и не сохраняет введённые значения.</p></div>
      <div className="legal-copy">
        <section><span className="eyebrow">01 / Проверка полей</span><h2>Что делает форма</h2><p>Браузер проверяет, заполнены ли обязательные поля. После нажатия кнопки сайт показывает информационное сообщение. Заявка никуда не отправляется.</p></section>
        <section><span className="eyebrow">02 / Данные</span><h2>Ничего не сохраняется</h2><p>Сайт не передаёт значения формы на сервер и не записывает их в базу. Вводимые данные остаются в открытой странице браузера и исчезают после её закрытия или обновления.</p></section>
        <section><span className="eyebrow">03 / Аналитика сайта</span><h2>Яндекс.Метрика</h2><p>На сайте работает счётчик Яндекс.Метрики № 113551177. Он собирает просмотры страниц и технические сведения: адрес открытой страницы, источник перехода, данные о браузере и устройстве, а также технические идентификаторы и сетевые данные, включая IP-адрес, которые Яндекс использует для аналитики и определения региона. Включённые автоматические цели могут учитывать нажатия на телефонные ссылки и кнопки сайта. Вебвизор, карты кликов и скроллинга и аналитика форм отключены; сайт не передаёт события электронной торговли, а введённые в демонстрационные формы значения не отправляет. Подробнее — <a href="https://yandex.ru/legal/confidential/" target="_blank" rel="noreferrer">политика конфиденциальности Яндекса</a>.</p></section>
        <section><span className="eyebrow">04 / Подключение заявок</span><h2>Перед началом приёма</h2><p>Когда появится канал связи и форма начнёт отправлять обращения, здесь будут указаны фактический получатель, цель сбора данных и условия их обработки.</p></section>
      </div>
      <div className="legal-page__back"><Link className="text-link" href="/"><ArrowLeft size={15} />Вернуться на главную</Link><span>Обновлено: 8 октября 2026 года</span></div>
    </section>
  );
}
