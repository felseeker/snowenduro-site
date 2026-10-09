import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileLock2, ShieldCheck } from "lucide-react";

const policyDescription = "Как обрабатываются данные посетителей SnowEnduro и какие сведения получают Яндекс.Метрика и GitHub Pages.";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных",
  description: policyDescription,
  alternates: { canonical: "/privacy/" },
  openGraph: { title: "Политика обработки персональных данных", description: policyDescription, url: "/privacy/" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="legal-page page-shell">
      <div className="breadcrumbs"><Link href="/">Главная</Link><span>/</span><span>Конфиденциальность</span></div>
      <div className="legal-page__hero">
        <span className="legal-page__icon"><FileLock2 size={21} /></span>
        <span className="eyebrow">SnowEnduro / Конфиденциальность</span>
        <h1>Политика обработки<br /><em>персональных данных.</em></h1>
        <p>Здесь описано, какие данные могут обрабатываться при посещении snowenduro.ru, для чего они нужны и как направить запрос оператору сайта.</p>
      </div>

      <div className="legal-draft-note">
        <ShieldCheck size={18} />
        <p><strong>Заявки пока не принимаются.</strong> Формы на сайте проверяют заполнение полей в браузере, но не отправляют введённые значения и не сохраняют их.</p>
      </div>

      <div className="legal-copy">
        <section>
          <span className="eyebrow">01 / Оператор</span>
          <h2>Кто отвечает за сайт</h2>
          <p>Оператор сайта SnowEnduro — физическое лицо, администрирующее snowenduro.ru. На сайте не заявлено юридическое лицо или индивидуальный предприниматель. Каналы для обращений по вопросам обработки данных указаны в разделе <Link href="/about/#contacts">«Контакты»</Link>.</p>
        </section>

        <section>
          <span className="eyebrow">02 / Технические данные</span>
          <h2>Что происходит при открытии страниц</h2>
          <p>Для доставки сайта используется GitHub Pages. GitHub сообщает, что при посещении сайта на GitHub Pages записывает и хранит IP-адрес посетителя в целях безопасности. Состав и правила обработки данных самим сервисом описаны в <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" target="_blank" rel="noreferrer">документации GitHub Pages</a> и <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">заявлении о конфиденциальности GitHub</a>.</p>
        </section>

        <section>
          <span className="eyebrow">03 / Статистика</span>
          <h2>Яндекс.Метрика</h2>
          <p>На сайте установлен счётчик Яндекс.Метрики № 113551177. Он получает просмотры страниц и технические сведения о посещении: адрес страницы и источник перехода, данные браузера и устройства, cookie и другие технические идентификаторы, сетевые данные, включая IP-адрес. В счётчике настроены цели для отдельных действий на сайте, в том числе переходов по телефонным ссылкам и нажатий на кнопки. Вебвизор, карты кликов и скроллинга и аналитика заполнения форм отключены. Подробности — в <a href="https://yandex.ru/legal/confidential/" target="_blank" rel="noreferrer">политике конфиденциальности Яндекса</a> и <a href="https://yandex.ru/legal/metrica_termsofuse/" target="_blank" rel="noreferrer">условиях Яндекс.Метрики</a>. Настройки cookies также можно изменить в браузере; при их блокировке часть статистики может не записываться.</p>
        </section>

        <section>
          <span className="eyebrow">04 / Формы и обращения</span>
          <h2>Формы не передают введённые данные</h2>
          <p>Поля формы находятся в открытой странице браузера. После отправки сайт показывает информационное сообщение: сервер и база данных не подключены, поэтому значения формы не передаются оператору и не сохраняются сайтом. Если вы самостоятельно связываетесь с менеджером по каналам из раздела <Link href="/about/#contacts">«Контакты»</Link>, содержание переписки или звонка обрабатывается отдельно от форм сайта.</p>
        </section>

        <section>
          <span className="eyebrow">05 / Сроки и получатели</span>
          <h2>Данные сервисов</h2>
          <p>Оператор сайта не сохраняет значения демонстрационных форм. Технические данные, которые обрабатывают GitHub Pages и Яндекс.Метрика, хранятся и используются этими сервисами по их собственным правилам. Сайт не задаёт сроки хранения данных у провайдеров и не управляет их внутренними системами.</p>
        </section>

        <section>
          <span className="eyebrow">06 / Запросы</span>
          <h2>Как связаться по вопросам данных</h2>
          <p>По вопросам доступа к данным, их исправления или удаления, а также прекращения обработки в пределах, предусмотренных законом и правилами соответствующего сервиса, направьте запрос через каналы, указанные в разделе <Link href="/about/#contacts">«Контакты»</Link>. Если запрос относится к данным, которые обрабатывает GitHub или Яндекс, используйте также каналы связи этих сервисов.</p>
        </section>
      </div>

      <div className="legal-page__back"><Link className="text-link" href="/"><ArrowLeft size={15} />Вернуться на главную</Link><span>Редакция от 9 октября 2026 года</span></div>
    </section>
  );
}
