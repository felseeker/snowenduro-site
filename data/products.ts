export type SnowmobileSpec = {
  label: string;
  value: string;
};

export type SnowmobileCategory = {
  slug: string;
  name: string;
  eyebrow: string;
  purpose: string;
  summary: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string; label: string }[];
  tags: string[];
  price: number;
  availability: string;
  useCase: "Глубокий снег" | "Смешанные маршруты";
  engine: string;
  horsepower: string;
  track: string;
  seats: string;
  specs: SnowmobileSpec[];
};

export const priceNote = "Цена предложения и наличие могут измениться. Комплектацию и итоговую стоимость подтвердим перед заказом.";

export const snowmobiles: SnowmobileCategory[] = [
  {
    slug: "aodes-snowcross-800-swt",
    name: "AODES Snowcross 800 SWT",
    eyebrow: "800 см³ · широкая гусеница",
    purpose: "Утилитарный",
    summary: "Двухместная версия с V-образным двухцилиндровым двигателем. В опубликованном предложении — из Китая.",
    image: "/media/offers/aodes-snowcross-800-swt-2-site.webp",
    imageAlt: "AODES Snowcross 800 SWT, чёрная версия, вид спереди-сбоку",
    gallery: [
      { src: "/media/offers/aodes-snowcross-800-swt-2-site.webp", alt: "AODES Snowcross 800 SWT, вид спереди-сбоку", label: "Вид спереди-сбоку" },
      { src: "/media/offers/aodes-snowcross-800-swt-3-site.webp", alt: "AODES Snowcross 800 SWT, другой цветовой вариант", label: "Другой цветовой вариант" },
    ],
    tags: ["800 см³", "60 л.с.", "2 места"],
    price: 1_050_000,
    availability: "Предложение из Китая",
    useCase: "Глубокий снег",
    engine: "800 см³ · V-образный, 2 цилиндра · 4-тактный",
    horsepower: "60 л.с.",
    track: "SWT · ширина уточняется",
    seats: "2 места",
    specs: [
      { label: "Двигатель", value: "800 см³, V-образный, 2 цилиндра, 4-тактный" },
      { label: "Мощность", value: "60 л.с." },
      { label: "Подача топлива", value: "Электронный впрыск" },
      { label: "Гусеница", value: "Длина 3 923 мм, грунтозацеп 38 мм; ширину подтвердим" },
      { label: "Количество мест", value: "2" },
      { label: "Статус предложения", value: "Указано наличие в Китае; перепроверим перед заказом" },
    ],
  },
  {
    slug: "aodes-snowcross-900-wt",
    name: "AODES Snowcross 900 WT",
    eyebrow: "900 см³ · гусеница 500 мм",
    purpose: "Утилитарно-туристический",
    summary: "Двухместный снегоход с атмосферным трёхцилиндровым двигателем и гусеницей шириной 500 мм — для смешанных зимних маршрутов.",
    image: "/media/offers/aodes-snowcross-900-wt-site.webp",
    imageAlt: "AODES Snowcross 900 WT, чёрно-красный вариант",
    gallery: [
      { src: "/media/offers/aodes-snowcross-900-wt-site.webp", alt: "AODES Snowcross 900 WT, чёрно-красный вариант", label: "Чёрно-красный вариант" },
      { src: "/media/offers/aodes-snowcross-900-wt-2-site.webp", alt: "AODES Snowcross 900 WT, красно-чёрный вариант", label: "Красно-чёрный вариант" },
      { src: "/media/offers/aodes-snowcross-900-wt-3-site.webp", alt: "AODES Snowcross 900 WT, синий вариант", label: "Синий вариант" },
    ],
    tags: ["899 см³", "89 л.с.", "Гусеница 500 мм"],
    price: 1_540_000,
    availability: "Под заказ из Китая",
    useCase: "Смешанные маршруты",
    engine: "899 см³ · 3 цилиндра · 4-тактный",
    horsepower: "89 л.с.",
    track: "500 мм · грунтозацеп 44 мм",
    seats: "2 места",
    specs: [
      { label: "Двигатель", value: "899 см³, атмосферный, 3 цилиндра, 4-тактный" },
      { label: "Мощность", value: "89 л.с." },
      { label: "Подача топлива", value: "Электронный впрыск" },
      { label: "Гусеница", value: "Ширина 500 мм, длина 3 968 мм, грунтозацеп 44 мм" },
      { label: "Количество мест", value: "2" },
      { label: "Топливный бак", value: "42 л" },
    ],
  },
  {
    slug: "aodes-snowcross-900-swt",
    name: "AODES Snowcross 900 SWT",
    eyebrow: "900 см³ · гусеница 600 мм",
    purpose: "Утилитарно-туристический",
    summary: "Широкая 600-миллиметровая гусеница и двухместная посадка для рыхлого снега и продолжительных зимних поездок.",
    image: "/media/offers/aodes-snowcross-900-swt-site.webp",
    imageAlt: "AODES Snowcross 900 SWT, сине-серый вариант",
    gallery: [
      { src: "/media/offers/aodes-snowcross-900-swt-site.webp", alt: "AODES Snowcross 900 SWT, сине-серый вариант", label: "Сине-серый вариант" },
      { src: "/media/offers/aodes-snowcross-900-swt-2-site.webp", alt: "AODES Snowcross 900 SWT, красный вариант", label: "Красный вариант" },
    ],
    tags: ["899 см³", "89 л.с.", "Гусеница 600 мм"],
    price: 1_595_000,
    availability: "Под заказ из Китая",
    useCase: "Глубокий снег",
    engine: "899 см³ · 3 цилиндра · 4-тактный",
    horsepower: "89 л.с.",
    track: "600 мм · грунтозацеп 44 мм",
    seats: "2 места",
    specs: [
      { label: "Двигатель", value: "899 см³, атмосферный, 3 цилиндра, 4-тактный" },
      { label: "Мощность", value: "89 л.с." },
      { label: "Подача топлива", value: "Электронный впрыск" },
      { label: "Гусеница", value: "Ширина 600 мм, длина 3 968 мм, грунтозацеп 44 мм" },
      { label: "Количество мест", value: "2" },
      { label: "Топливный бак", value: "42 л" },
    ],
  },
];

export function formatPrice(price: number) {
  return `${new Intl.NumberFormat("ru-RU").format(price)} ₽`;
}

export function getSnowmobile(slug: string) {
  return snowmobiles.find((item) => item.slug === slug);
}
