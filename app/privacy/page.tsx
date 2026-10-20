import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileLock2, ShieldCheck } from "lucide-react";

const policyDescription = "Как обрабатываются данные посетителей SnowEnduro и заявки с сайта, а также сведения, которые получают Яндекс.Метрика и GitHub Pages.";

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
        <p>Здесь описано, какие данные обрабатываются при посещении snowenduro.ru и отправке заявки, для чего они нужны и как направить запрос оператору сайта.</p>
      </div>

      <div className="legal-draft-note">
        <ShieldCheck size={18} />
        <p><strong>После согласия и нажатия «Отправить заявку»</strong> сайт передаёт данные обращения в CRM SnowEnduro через защищённое соединение. Они используются, чтобы ответить на запрос.</p>
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
          <h2>Какие данные уходят с формы</h2>
          <p>При отправке заявки сайт передаёт имя, телефон, выбранный интерес или товар и адрес страницы, с которой отправлена форма. В форме проверки Snowbike дополнительно передаются марка, модель и год мотоцикла. Вместе с обращением фиксируются время и версия текста согласия. Данные нужны оператору SnowEnduro, чтобы связаться с вами и обработать запрос. API использует адрес сетевого запроса для ограничения повторных отправок.</p>
          <p>Данные заявки сохраняются в базе CRM SnowEnduro в Яндекс Облаке и доступны пользователям, которым выдан доступ к CRM. Записи заявок не публикуются в открытом репозитории сайта. Если в CRM включены Telegram-уведомления, в них передаются номер заявки и обобщённая тема обращения; имя и телефон в уведомление не включаются.</p>
        </section>

        <section>
          <span className="eyebrow">05 / Хранение и получатели</span>
          <h2>Как долго хранятся данные</h2>
          <p>Заявки остаются в CRM, пока оператор не удалит их; автоматический срок удаления не настроен. Для доставки сайта используется GitHub Pages. Счётчик Яндекс.Метрики получает технические сведения о посещении, перечисленные выше. Платформы GitHub и Яндекс Облако могут обрабатывать технические данные по своим правилам; подробности приведены в их политиках конфиденциальности. Сайт не управляет внутренними журналами этих сервисов.</p>
        </section>

        <section>
          <span className="eyebrow">06 / Запросы</span>
          <h2>Как связаться по вопросам данных</h2>
          <p>По вопросам доступа к данным, их исправления или удаления, а также прекращения обработки в пределах, предусмотренных законом и правилами соответствующего сервиса, направьте запрос через каналы, указанные в разделе <Link href="/about/#contacts">«Контакты»</Link>. Если запрос относится к данным, которые обрабатывает GitHub или Яндекс, используйте также каналы связи этих сервисов.</p>
        </section>
      </div>

      <div className="legal-page__back"><Link className="text-link" href="/"><ArrowLeft size={15} />Вернуться на главную</Link><span>Редакция от 20 октября 2026 года</span></div>
    </section>
  );
}
