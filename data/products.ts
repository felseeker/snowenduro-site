export type ProductCategory = "snowbike" | "snowmobile";

export type ProductSpec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  brand: string;
  eyebrow: string;
  purpose: string;
  summary: string;
  image: string;
  imageAlt: string;
  imageTreatment?: "cutout" | "scene";
  gallery: { src: string; alt: string; label: string; treatment?: "cutout" | "scene" }[];
  tags: string[];
  price: number | null;
  useCase: string;
  engine: string;
  horsepower: string;
  track: string;
  seats: string;
  specs: ProductSpec[];
};

export const priceNote = "Стоимость предварительная. Точную цену, комплектацию и сроки поставки уточняйте у менеджеров.";

const makeGallery = (name: string, image: string, imageAlt: string, treatment?: "cutout" | "scene") => [
  { src: image, alt: imageAlt, label: `${name} / зимний фон`, treatment },
];

const galleryPhoto = (file: string, alt: string, label: string, treatment?: "cutout" | "scene") => ({
  src: `/media/products/gallery/${file}`,
  alt,
  label,
  treatment,
});

const additionalPhotos: Partial<Record<string, Product["gallery"]>> = {
  "woideal-wd150": [
    galleryPhoto("woideal-wd150-03.webp", "WOIDEAL WD150 сбоку", "Боковой ракурс"),
    galleryPhoto("woideal-wd150-04.webp", "WOIDEAL WD150 с противоположной стороны", "Вид сбоку"),
    galleryPhoto("woideal-wd150-02.webp", "Задняя часть WOIDEAL WD150", "Задняя часть"),
  ],
  "woideal-wd160": [
    galleryPhoto("woideal-wd160-winter.webp", "WOIDEAL WD160 на заснеженной площадке", "На снегу"),
  ],
  "woideal-wd180": [
    galleryPhoto("woideal-wd180-01.webp", "WOIDEAL WD180 спереди на снегу", "Передний ракурс"),
    galleryPhoto("woideal-wd180-02.webp", "WOIDEAL WD180 на зимнем маршруте", "На маршруте"),
    galleryPhoto("woideal-wd180-03.webp", "Задняя часть WOIDEAL WD180", "Задняя часть"),
  ],
  "woideal-wd300": [
    galleryPhoto("woideal-wd300-scene.webp", "WOIDEAL WD300 в зимнем лесу", "На снегу"),
    galleryPhoto("woideal-wd300-cockpit.webp", "Посадка и органы управления WOIDEAL WD300", "Кокпит и управление"),
  ],
  "taomotor-snowfox-ii": [
    galleryPhoto("taomotor-snowfox-ii-winter.webp", "TaoMotor Snowfox II на зимнем маршруте", "На снегу"),
    galleryPhoto("taomotor-snowfox-ii-01.png", "TaoMotor Snowfox II в трёхчетвертном ракурсе", "Общий вид", "cutout"),
    galleryPhoto("taomotor-snowfox-ii-03.webp", "Задняя часть TaoMotor Snowfox II", "Вид сзади"),
    galleryPhoto("taomotor-snowfox-ii-04.webp", "TaoMotor Snowfox II спереди", "Передний ракурс"),
  ],
  "taomotor-snowfox-iii": [
    galleryPhoto("taomotor-snowfox-iii-01.png", "TaoMotor Snowfox III в профиль", "Боковой ракурс", "cutout"),
    galleryPhoto("taomotor-snowfox-iii-03.webp", "TaoMotor Snowfox III под другим углом", "Трёхчетвертной ракурс"),
    galleryPhoto("taomotor-snowfox-iii-04.webp", "TaoMotor Snowfox III спереди", "Передний ракурс"),
  ],
  "aodes-alpinecross-1000": [
    galleryPhoto("aodes-alpinecross-1000-01.webp", "AODES AlpineCross 1000, вид сбоку", "Общий вид", "cutout"),
    galleryPhoto("aodes-alpinecross-1000-02.webp", "AODES AlpineCross 1000 на снегу", "На снегу"),
    galleryPhoto("aodes-alpinecross-1000-03.webp", "Гусеничный модуль AODES AlpineCross 1000", "Гусеничный модуль"),
    galleryPhoto("aodes-alpinecross-1000-04.webp", "Элементы AODES AlpineCross 1000", "Детали модели"),
  ],
  "aodes-snowcross-800-wt": [
    galleryPhoto("aodes-snowcross-800-wt-01.webp", "AODES Snowcross 800 WT, вид сбоку", "Общий вид", "cutout"),
    galleryPhoto("aodes-snowcross-800-wt-02.webp", "AODES Snowcross 800 WT на снегу", "На снегу"),
    galleryPhoto("aodes-snowcross-800-wt-03.webp", "AODES Snowcross 800 WT с экипажем", "На маршруте"),
    galleryPhoto("aodes-snowcross-800-wt-04.webp", "AODES Snowcross 800 WT в движении", "В движении"),
  ],
  "aodes-snowcross-1000-wt": [
    galleryPhoto("aodes-snowcross-1000-wt-angle.webp", "AODES Snowcross 1000 WT в трёхчетвертном ракурсе", "Трёхчетвертной ракурс", "scene"),
    galleryPhoto("aodes-snowcross-1000-wt-02-scene.webp", "Передняя часть AODES Snowcross 1000 WT", "Передняя часть", "scene"),
    galleryPhoto("aodes-snowcross-1000-wt-03-scene.webp", "Руль и панель AODES Snowcross 1000 WT", "Кокпит и управление", "scene"),
    galleryPhoto("aodes-snowcross-1000-wt-04-scene.webp", "Панель приборов AODES Snowcross 1000 WT", "Панель приборов", "scene"),
  ],
  "aodes-snowcross-1000-swt": [
    galleryPhoto("aodes-snowcross-1000-swt-01.webp", "AODES Snowcross 1000 SWT, вид сбоку", "Общий вид", "cutout"),
    galleryPhoto("aodes-snowcross-1000-swt-03.webp", "Передняя подвеска AODES Snowcross 1000 SWT", "Передняя подвеска"),
    galleryPhoto("aodes-snowcross-1000-swt-04.webp", "Широкая гусеница AODES Snowcross 1000 SWT", "Широкая гусеница"),
  ],
};

function product(input: Omit<Product, "gallery">): Product {
  return { ...input, gallery: [...makeGallery(input.name, input.image, input.imageAlt, input.imageTreatment), ...(additionalPhotos[input.slug] ?? [])] };
}

export const snowbikeKits: Product[] = [
  product({
    slug: "htld-120sport-65", name: "HTLD-120Sport-65", category: "snowbike", brand: "HTLD",
    eyebrow: "HTLD / 120 Sport", purpose: "двухрычажная подвеска", summary: "Плюсы: двухрычажная подвеска и 65-мм зацеп для активной езды по глубокому снегу. Ограничение: зимний комплект меняет характер управления базового эндуро.",
    image: "/media/snowbike-ai-hero.jpg", imageAlt: "Эндуро, подготовленный для зимней езды на гусеничном комплекте",
    tags: ["65 мм", "Двухрычажная схема", "Для эндуро"], price: 145000, useCase: "Sport",
    engine: "Не применимо", horsepower: "Зависит от базового эндуро", track: "Гусеничный модуль; точные параметры уточняются", seats: "1 на базе мотоцикла",
    specs: [{ label: "Конфигурация", value: "Задний гусеничный модуль + передняя лыжа" }, { label: "Серия", value: "120 Sport" }, { label: "Высота зацепа", value: "65 мм" }, { label: "Подвеска модуля", value: "Двухрычажная" }],
  }),
  product({
    slug: "htld-120extreme-65", name: "HTLD-120Extreme-65", category: "snowbike", brand: "HTLD",
    eyebrow: "HTLD / 120 Extreme", purpose: "однорычажная подвеска", summary: "Плюсы: 65-мм зацеп и однорычажная схема для рыхлого снега. Ограничение: зимняя конфигурация рассчитана на снег, а не на твёрдое покрытие.",
    image: "/media/snowbike-ai-hero.jpg", imageAlt: "Эндуро, подготовленный для зимней езды на гусеничном комплекте",
    tags: ["65 мм", "Однорычажная схема", "Для эндуро"], price: 165000, useCase: "Extreme",
    engine: "Не применимо", horsepower: "Зависит от базового эндуро", track: "Гусеничный модуль; точные параметры уточняются", seats: "1 на базе мотоцикла",
    specs: [{ label: "Конфигурация", value: "Задний гусеничный модуль + передняя лыжа" }, { label: "Серия", value: "120 Extreme" }, { label: "Высота зацепа", value: "65 мм" }, { label: "Подвеска модуля", value: "Однорычажная" }],
  }),
  product({
    slug: "htld-129extreme-65", name: "HTLD-129Extreme-65", category: "snowbike", brand: "HTLD",
    eyebrow: "HTLD / 129 Extreme", purpose: "однорычажная подвеска", summary: "Плюсы: серия 129, 65-мм зацеп и передняя лыжа для сбалансированной езды по зимним маршрутам. Ограничение: комплект работает только в снеговой конфигурации.",
    image: "/media/snowbike-ai-hero.jpg", imageAlt: "Эндуро, подготовленный для зимней езды на гусеничном комплекте",
    tags: ["65 мм", "Однорычажная схема", "Для эндуро"], price: 169000, useCase: "Extreme",
    engine: "Не применимо", horsepower: "Зависит от базового эндуро", track: "Гусеничный модуль; точные параметры уточняются", seats: "1 на базе мотоцикла",
    specs: [{ label: "Конфигурация", value: "Задний гусеничный модуль + передняя лыжа" }, { label: "Серия", value: "129 Extreme" }, { label: "Высота зацепа", value: "65 мм" }, { label: "Подвеска модуля", value: "Однорычажная" }],
  }),
  product({
    slug: "htld-129extreme-80", name: "HTLD-129Extreme-80", category: "snowbike", brand: "HTLD",
    eyebrow: "HTLD / 129 Extreme", purpose: "для глубокого снега", summary: "Плюсы: высокий 80-мм зацеп помогает продвигаться по глубокому рыхлому снегу. Ограничение: на укатанной трассе такой высокий профиль может быть избыточен.",
    image: "/media/snowbike-ai-hero.jpg", imageAlt: "Эндуро, подготовленный для зимней езды на гусеничном комплекте",
    tags: ["80 мм", "Однорычажная схема", "Для эндуро"], price: 179000, useCase: "Extreme",
    engine: "Не применимо", horsepower: "Зависит от базового эндуро", track: "Гусеничный модуль; точные параметры уточняются", seats: "1 на базе мотоцикла",
    specs: [{ label: "Конфигурация", value: "Задний гусеничный модуль + передняя лыжа" }, { label: "Серия", value: "129 Extreme" }, { label: "Высота зацепа", value: "80 мм" }, { label: "Подвеска модуля", value: "Однорычажная" }],
  }),
  product({
    slug: "nibbi-vanguard-r-120", name: "NIBBI Vanguard R-120", category: "snowbike", brand: "NIBBI Racing",
    eyebrow: "NIBBI / Vanguard R-120", purpose: "комплект для эндуро", summary: "Плюсы: гусеница 3050 × 300 мм, 50-мм зацеп и передняя лыжа для зимней тяги. Ограничение: для летней езды потребуется вернуть колёсную конфигурацию.",
    image: "/media/snowbike-ai-hero.jpg", imageAlt: "Эндуро, подготовленный для зимней езды на гусеничном комплекте",
    tags: ["3050 × 300 мм", "Зацеп 50 мм", "Передняя лыжа"], price: 280000, useCase: "Racing",
    engine: "Не применимо", horsepower: "Зависит от базового эндуро", track: "3050 × 300 мм; зацеп 50 мм", seats: "1 на базе мотоцикла",
    specs: [{ label: "Конфигурация", value: "Задний гусеничный модуль + передняя лыжа" }, { label: "Длина × ширина гусеницы", value: "3050 × 300 мм" }, { label: "Высота зацепа", value: "50 мм" }],
  }),
];

export const snowmobiles: Product[] = [
  product({
    slug: "woideal-wd150", name: "WOIDEAL WD150", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / Компактный", purpose: "компактный", summary: "Плюсы: 149,6 см³, 9,12 л.с., реверс и нагрузка до 175 кг в компактном корпусе. Ограничение: скорость до 40 км/ч и умеренная тяга для тяжёлой буксировки.",
    image: "/media/products/gallery/woideal-wd150-feature.webp", imageAlt: "Компактный снегоход WOIDEAL WD150 на зимнем маршруте",
    tags: ["149,6 см³", "9,12 л.с.", "До 40 км/ч"], price: 235000, useCase: "Компактный",
    engine: "149,6 см³", horsepower: "9,12 л.с.", track: "Ширина 380 мм", seats: "—",
    specs: [{ label: "Двигатель", value: "149,6 см³, 4-тактный" }, { label: "Мощность", value: "9,12 л.с." }, { label: "Ширина гусеницы", value: "380 мм" }, { label: "Максимальная нагрузка", value: "175 кг" }, { label: "Максимальная скорость", value: "40 км/ч" }, { label: "Сухая масса", value: "167 кг" }],
  }),
  product({
    slug: "woideal-wd180", name: "WOIDEAL WD180", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / 180", purpose: "компактный", summary: "Плюсы: мотор 177,3 см³, вариатор с реверсом и гусеница шириной 380 мм. Ограничение: EFI и карбюраторная версии отличаются мощностью и откликом двигателя.",
    image: "/media/products/woideal-wd180-site.webp", imageAlt: "Снегоход WOIDEAL WD180 на заснеженной лесной дороге",
    tags: ["177,3 см³", "≈ 12 л.с.", "Реверс"], price: 245000, useCase: "Лёгкий формат",
    engine: "177,3 см³, 4-тактный", horsepower: "11,97–12,1 л.с.", track: "380 × 2626 × 29 мм", seats: "—",
    specs: [{ label: "Двигатель", value: "177,3 см³, 4-тактный" }, { label: "Мощность", value: "11,97 л.с. (EFI) / 12,1 л.с. (карбюратор)" }, { label: "Гусеница", value: "380 × 2626 × 29 мм" }, { label: "Питание", value: "EFI или карбюратор" }, { label: "Топливный бак", value: "12 л" }, { label: "Трансмиссия", value: "CVT, F-N-R" }],
  }),
  product({
    slug: "woideal-wd200-a-2026", name: "WOIDEAL WD200-A (2026)", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / 2026", purpose: "компактный", summary: "Плюсы: WD200-A весит 167 кг, развивает 9,12 л.с. и оснащён гусеницей шириной 380 мм. Ограничение: максимальная скорость — 40 км/ч.",
    image: "/media/products/woideal-wd200a-site.webp", imageAlt: "Компактный снегоход на заснеженном маршруте",
    tags: ["149,6 см³", "9,12 л.с.", "380 мм"], price: null, useCase: "Компактный",
    engine: "149,6 см³", horsepower: "6,8 кВт / 9,12 л.с.", track: "380 × 2626 × 29 мм", seats: "—",
    specs: [{ label: "Модельный год", value: "2026" }, { label: "Двигатель", value: "149,6 см³, одноцилиндровый, 4-тактный" }, { label: "Мощность", value: "6,8 кВт / 9,12 л.с." }, { label: "Гусеница", value: "380 × 2626 × 29 мм" }, { label: "Масса", value: "167 кг" }, { label: "Максимальная скорость", value: "40 км/ч" }],
  }),
  product({
    slug: "woideal-wd250-a-2026", name: "WOIDEAL WD250-A (2026)", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / 2026", purpose: "компактный", summary: "Плюсы: WD250-A сочетает 177,3 см³, электронный впрыск и мощность 11,97 л.с. Ограничение: масса 185 кг выше, чем у компактной WD200-A.",
    image: "/media/products/woideal-wd250a-site.webp", imageAlt: "Компактный снегоход на заснеженной лесной дороге",
    tags: ["177,3 см³", "11,97 л.с.", "380 мм"], price: null, useCase: "Компактный",
    engine: "177,3 см³", horsepower: "8,8 кВт / 11,97 л.с.", track: "380 × 2626 × 29 мм", seats: "—",
    specs: [{ label: "Модельный год", value: "2026" }, { label: "Двигатель", value: "177,3 см³, одноцилиндровый, 4-тактный" }, { label: "Мощность", value: "8,8 кВт / 11,97 л.с." }, { label: "Питание", value: "Электронный впрыск" }, { label: "Гусеница", value: "380 × 2626 × 29 мм" }, { label: "Масса", value: "185 кг" }, { label: "Максимальная скорость", value: "50 км/ч" }],
  }),
  product({
    slug: "woideal-wd300", name: "WOIDEAL WD300", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / 300", purpose: "универсальный", summary: "Плюсы: четырёхтактный одноцилиндровый мотор с воздушно-масляным охлаждением подходит для регулярных зимних поездок. Ограничение: это средний класс, без запаса тяги полноразмерных утилитарных машин.",
    image: "/media/products/woideal-wd300-site.webp", imageAlt: "Снегоход WOIDEAL WD300 на зимнем маршруте",
    tags: ["4-тактный мотор", "Воздушно-масляное охлаждение", "WOIDEAL"], price: 308900, useCase: "Маршрут",
    engine: "Одноцилиндровый, 4-тактный", horsepower: "—", track: "—", seats: "—",
    specs: [{ label: "Двигатель", value: "Одноцилиндровый, 4-тактный" }, { label: "Охлаждение", value: "Воздушное и масляное" }],
  }),
  product({
    slug: "woideal-wd380", name: "WOIDEAL WD380", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / WD380", purpose: "утилитарный", summary: "Плюсы: 292,4 см³, 25,88 л.с., вариатор с реверсом, бак 27 л и гусеница длиной 3294 мм. Ограничение: ширина 380 мм уступает широкогусеничным версиям в рыхлом снегу.",
    image: "/media/products/woideal-wd380-site.webp", imageAlt: "Снегоход на зимней лесной дороге",
    tags: ["292,4 см³", "25,88 л.с.", "380 × 3294 мм"], price: 419000, useCase: "Маршрут и хозяйство",
    engine: "292,4 см³, 4-тактный", horsepower: "19,3 кВт / 25,88 л.с.", track: "3294 × 380 × 29 мм", seats: "—",
    specs: [{ label: "Двигатель", value: "292,4 см³, одноцилиндровый, 4-тактный" }, { label: "Охлаждение", value: "Жидкостное" }, { label: "Мощность", value: "19,3 кВт / 25,88 л.с." }, { label: "Гусеница", value: "3294 × 380 × 29 мм" }, { label: "Трансмиссия", value: "Вариатор, F-N-R" }, { label: "Топливный бак", value: "27 л" }, { label: "Сухая масса", value: "220 кг" }, { label: "Максимальная скорость", value: "60 км/ч" }, { label: "Оснащение", value: "Подогрев рукояток" }],
  }),
  product({
    slug: "woideal-wd700-2026", name: "WOIDEAL WD700 (2026)", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / 2026", purpose: "мощный утилитарный", summary: "Плюсы: старшая WD700 получила двигатель 622 см³ мощностью 42,17 л.с. Ограничение: это более крупный и требовательный класс, чем компактные WD150 и WD200-A.",
    image: "/media/products/woideal-wd700-site.webp", imageAlt: "Полноразмерный снегоход на зимнем маршруте",
    tags: ["622 см³", "42,17 л.с.", "Модель 2026"], price: null, useCase: "Новая версия",
    engine: "622 см³", horsepower: "42,17 л.с.", track: "—", seats: "—",
    specs: [{ label: "Модельный год", value: "2026" }, { label: "Двигатель", value: "622 см³" }, { label: "Мощность", value: "31 кВт / 42,17 л.с." }],
  }),
  product({
    slug: "taomotor-snowfox-iii", name: "TaoMotor Snowfox III", category: "snowmobile", brand: "TaoMotor", eyebrow: "TaoMotor / Snowfox III", purpose: "компактный, 2 места", summary: "Плюсы: двухместная посадка, масса 130 кг, нагрузка до 170 кг и скорость 45–50 км/ч. Ограничение: бак 4,5 л сокращает пробег между заправками.",
    image: "/media/products/gallery/taomotor-snowfox-iii-winter.webp", imageAlt: "TaoMotor Snowfox III на зимнем маршруте",
    tags: ["170 см³", "2 места"], price: null, useCase: "Компактный",
    engine: "170 см³, GY6", horsepower: "7,6 кВт", track: "2150 × 380 мм", seats: "2",
    specs: [{ label: "Двигатель", value: "GY6, 170 см³" }, { label: "Мощность", value: "7,6 кВт при 7000 об/мин" }, { label: "Максимальный момент", value: "10,2 Н·м при 5000 об/мин" }, { label: "Гусеница", value: "2150 × 380 мм" }, { label: "Сухая масса", value: "130 кг" }, { label: "Топливный бак", value: "4,5 л" }, { label: "Посадочных мест", value: "2" }],
  }),
  product({
    slug: "woideal-wd160", name: "WOIDEAL WD160", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / WD160", purpose: "детский", summary: "Плюсы: версии 98 и 196 см³, масса 75 кг и независимая передняя подвеска. Ограничение: скорость до 12 км/ч и нагрузка до 40 кг задают детский формат.",
    image: "/media/products/woideal-wd160-site.webp", imageAlt: "Компактный детский снегоход WOIDEAL WD160 на зимнем фоне",
    tags: ["98 / 196 см³", "Детская модель"], price: null, useCase: "Детский компактный",
    engine: "98 см³ (WD160-B) или 196 см³ (WD160-A)", horsepower: "2,51 или 5,85 л.с. — по версии", track: "256 × 1728 мм", seats: "1",
    specs: [{ label: "Версии", value: "WD160-A / WD160-B" }, { label: "Двигатель", value: "98 см³ или 196 см³, 4-тактный" }, { label: "Мощность", value: "2,51 или 5,85 л.с." }, { label: "Гусеница", value: "256 × 1728 × 23 мм" }, { label: "Максимальная нагрузка", value: "40 кг" }, { label: "Максимальная скорость", value: "12 км/ч" }, { label: "Сухая масса", value: "75 кг" }],
  }),
  product({
    slug: "taomotor-snowfox-ii", name: "TaoMotor Snowfox II", category: "snowmobile", brand: "TaoMotor", eyebrow: "TaoMotor / Snowfox II", purpose: "компактный, 2 места", summary: "Плюсы: двигатель GY6 170 см³, два места, масса 130 кг и автоматическая трансмиссия. Ограничение: гусеница 380 мм уже, чем у широкогусеничных утилитарных моделей.",
    image: "/media/products/taomotor-snowfox-ii-site.webp", imageAlt: "TaoMotor Snowfox II на зимней лесной дороге",
    tags: ["170 см³", "7,6 кВт", "2 места"], price: null, useCase: "Компактный",
    engine: "GY6, 170 см³", horsepower: "7,6 кВт", track: "Ширина 380 мм", seats: "2",
    specs: [{ label: "Двигатель", value: "GY6, 170 см³" }, { label: "Максимальная мощность", value: "7,6 кВт при 7000 об/мин" }, { label: "Максимальный момент", value: "10,2 Н·м при 5000 об/мин" }, { label: "Ширина гусеницы", value: "380 мм" }, { label: "Сухая масса", value: "130 кг" }, { label: "Посадочных мест", value: "2" }],
  }),
  product({
    slug: "aodes-snowcross-800-wt", name: "AODES Snowcross 800 WT", category: "snowmobile", brand: "AODES", eyebrow: "AODES / Snowcross 800 WT", purpose: "утилитарный", summary: "Плюсы: V-образный двигатель 800 см³, около 60 л.с., два места и длинная гусеница. Ограничение: ширина 500 мм требует пространства в тесном лесу.",
    image: "/media/products/aodes-snowcross-800-wt-site.webp", imageAlt: "AODES Snowcross 800 WT на снежном маршруте",
    tags: ["800 см³", "60 л.с.", "2 места"], price: 990000, useCase: "Утилитарный",
    engine: "800 см³, V-twin, 4-тактный", horsepower: "44 кВт / около 60 л.с.", track: "3925 × 500 × 40 мм", seats: "2",
    specs: [{ label: "Двигатель", value: "800 см³, V-образный двухцилиндровый, 4-тактный" }, { label: "Максимальная мощность", value: "44 кВт при 6000 об/мин" }, { label: "Гусеница", value: "3925 × 500 × 40 мм" }, { label: "Топливный бак", value: "42 л" }, { label: "Максимальная скорость", value: "До 80 км/ч" }, { label: "Посадочных мест", value: "2" }],
  }),
  product({
    slug: "aodes-alpinecross-1000", name: "AODES AlpineCross 1000", category: "snowmobile", brand: "AODES", eyebrow: "AODES / AlpineCross 1000", purpose: "туристический, 2 места", summary: "Плюсы: двухместная туристическая платформа, V-twin 976 см³ и длинная гусеница 4140 мм для протяжённых маршрутов. Ограничение: гусеница шириной 444 мм уже, чем у утилитарных Snowcross WT/SWT, поэтому в глубоком рыхлом снегу она уступает им по опорной площади.",
    image: "/media/products/aodes-alpinecross-1000.webp", imageAlt: "AODES AlpineCross 1000 на открытом снежном маршруте",
    tags: ["976 см³", "≈ 87 л.с.", "2 места"], price: 890000, useCase: "Маршрут",
    engine: "976 см³, V-twin, 4-тактный", horsepower: "63,7 кВт / 86,6 л.с.", track: "4140,5 × 444 × 45,7 мм", seats: "2",
    specs: [{ label: "Двигатель", value: "976 см³, V-twin, 4-тактный" }, { label: "Мощность", value: "63,7 кВт / 86,6 л.с." }, { label: "Гусеница", value: "4140,5 × 444 × 45,7 мм" }, { label: "Топливный бак", value: "34 л" }, { label: "Посадочных мест", value: "2" }],
  }),
  product({
    slug: "aodes-snowcross-1000-wt", name: "AODES Snowcross 1000 WT", category: "snowmobile", brand: "AODES", eyebrow: "AODES / Snowcross 1000 WT", purpose: "утилитарный", summary: "Плюсы: V-twin 976 см³, около 87 л.с., два места и гусеница шириной 500 мм. Ограничение: по плавучести в глубоком снегу уступает широкой версии SWT.",
    image: "/media/products/gallery/aodes-snowcross-1000-wt-feature.webp", imageAlt: "AODES Snowcross 1000 WT на заснеженном маршруте", imageTreatment: "scene",
    tags: ["976 см³", "WT / 508 мм", "2 места"], price: null, useCase: "Утилитарный",
    engine: "976 см³, V-twin, 4-тактный", horsepower: "87 л.с.", track: "3923 × 508 × 38 мм", seats: "2",
    specs: [{ label: "Двигатель", value: "976 см³, V-twin, 4-тактный" }, { label: "Мощность", value: "87 л.с." }, { label: "Гусеница", value: "3923 × 508 × 38 мм" }, { label: "Посадочных мест", value: "2" }],
  }),
  product({
    slug: "aodes-snowcross-1000-swt", name: "AODES Snowcross 1000 SWT", category: "snowmobile", brand: "AODES", eyebrow: "AODES / Snowcross 1000 SWT", purpose: "широкая гусеница", summary: "Плюсы: V-twin 976 см³, около 87 л.с. и 600-мм гусеница с большой опорной площадью. Ограничение: широкому снегоходу сложнее в узком лесу и тесных колеях.",
    image: "/media/products/aodes-snowcross-1000-swt.png", imageAlt: "Снегоход AODES Snowcross SWT из глобальной линейки производителя", imageTreatment: "cutout",
    tags: ["976 см³", "SWT / 609 мм", "2 места"], price: 1190000, useCase: "Рыхлый снег",
    engine: "976 см³, V-twin, 4-тактный", horsepower: "87 л.с.", track: "3923 × 609 × 32 мм", seats: "2",
    specs: [{ label: "Двигатель", value: "976 см³, V-twin, 4-тактный" }, { label: "Мощность", value: "87 л.с." }, { label: "Гусеница", value: "3923 × 609 × 32 мм" }, { label: "Посадочных мест", value: "2" }],
  }),
];

export const products: Product[] = [...snowbikeKits, ...snowmobiles];

export function formatPrice(price: number | null) {
  if (price === null) return "Цена по запросу";
  return `${new Intl.NumberFormat("ru-RU").format(price)} ₽`;
}

export function displayPrice(price: number | null) {
  return price === null ? "Цена по запросу" : `Ориентировочная цена: ${formatPrice(price)}`;
}

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}
