export type SnowmobileCategory = {
  slug: string;
  name: string;
  eyebrow: string;
  purpose: string;
  summary: string;
  image: string;
  imageAlt: string;
  tags: string[];
  priority: "Путешествия" | "Работа" | "Охота и рыбалка" | "Активное катание";
};

export const snowmobiles: SnowmobileCategory[] = [
  {
    slug: "touring",
    name: "Для путешествий",
    eyebrow: "Маршрут за маршрутом",
    purpose: "Туристический формат",
    summary: "Для длинных зимних маршрутов и поездок вдвоём. Конкретную модель подберём под условия и наличие.",
    image: "/media/snowmobile-rider.jpg",
    imageAlt: "Снегоход движется по заснеженному горному склону",
    tags: ["Марка и модель — после подтверждения", "Цена по запросу"],
    priority: "Путешествия",
  },
  {
    slug: "utility",
    name: "Для работы",
    eyebrow: "Практичный выбор",
    purpose: "Утилитарный формат",
    summary: "Для хозяйственных задач и движения по зимней местности. Оснащение и грузовые решения уточним у поставщика.",
    image: "/media/snowmobile-alpine.jpg",
    imageAlt: "Снегоход на зимнем маршруте в горах",
    tags: ["Оснащение — уточняется", "Цена по запросу"],
    priority: "Работа",
  },
  {
    slug: "hunting",
    name: "Для охоты и рыбалки",
    eyebrow: "Тихий зимний маршрут",
    purpose: "Утилитарный формат",
    summary: "Подберём технику для выездов к удалённым местам и зимнего отдыха. Параметры конкретной модели проверим до заказа.",
    image: "/media/snowmobile-tour.jpg",
    imageAlt: "Зимняя долина и следы снегоходов на снежном поле",
    tags: ["Комплектация — уточняется", "Цена по запросу"],
    priority: "Охота и рыбалка",
  },
  {
    slug: "mountain",
    name: "Для активного катания",
    eyebrow: "Больше рельефа",
    purpose: "Спортивный формат",
    summary: "Для тех, кому важны управляемость и характер маршрута. Доступную модель и её характеристики подтвердит поставщик.",
    image: "/media/snowmobile-action.jpg",
    imageAlt: "Снегоход проходит снежный склон в движении",
    tags: ["Характеристики — уточняются", "Цена по запросу"],
    priority: "Активное катание",
  },
];

export function getSnowmobile(slug: string) {
  return snowmobiles.find((item) => item.slug === slug);
}
