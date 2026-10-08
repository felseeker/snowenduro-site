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
  imageTreatment?: "cutout";
  gallery: { src: string; alt: string; label: string; treatment?: "cutout" }[];
  tags: string[];
  price: number | null;
  availability: string;
  offerType: "new" | "new-or-used" | "export-confirmation";
  useCase: string;
  engine: string;
  horsepower: string;
  track: string;
  seats: string;
  specs: ProductSpec[];
};

export const priceNote = "Стоимость предварительная. Точную цену, комплектацию и сроки поставки уточняйте у менеджеров. Это рыночный ориентир, а не подтверждённое коммерческое предложение SnowEnduro.";

const makeGallery = (name: string, image: string, imageAlt: string, treatment?: "cutout") => [
  { src: image, alt: imageAlt, label: `${name} / зимний фон`, treatment },
];

function product(input: Omit<Product, "gallery">): Product {
  return { ...input, gallery: makeGallery(input.name, input.image, input.imageAlt, input.imageTreatment) };
}

export const snowbikeKits: Product[] = [
  product({
    slug: "htld-120sport-65", name: "HTLD-120Sport-65", category: "snowbike", brand: "HTLD",
    eyebrow: "HTLD / 120 Sport", purpose: "двухрычажная подвеска", summary: "Гусеничный модуль с 65-мм зацепом и передней лыжей. Совместимость и комплектность подтверждаются под конкретный эндуро.",
    image: "/media/snowbike-ai-hero.jpg", imageAlt: "Эндуро, подготовленный для зимней езды на гусеничном комплекте",
    tags: ["65 мм", "Двухрычажная схема", "Для эндуро"], price: 145000, availability: "Поставка уточняется", offerType: "export-confirmation", useCase: "Sport",
    engine: "Не применимо", horsepower: "Зависит от базового эндуро", track: "Гусеничный модуль; точные параметры уточняются", seats: "1 на базе мотоцикла",
    specs: [{ label: "Конфигурация", value: "Задний гусеничный модуль + передняя лыжа" }, { label: "Серия", value: "120 Sport" }, { label: "Высота зацепа", value: "65 мм" }, { label: "Подвеска модуля", value: "Двухрычажная" }, { label: "Совместимость", value: "Уточняется по марке, модели и году эндуро" }],
  }),
  product({
    slug: "htld-120extreme-65", name: "HTLD-120Extreme-65", category: "snowbike", brand: "HTLD",
    eyebrow: "HTLD / 120 Extreme", purpose: "однорычажная подвеска", summary: "Комплект 120 Extreme с 65-мм зацепом. Точный состав и совместимость с вашим эндуро нужно подтвердить до заказа.",
    image: "/media/snowbike-ai-hero.jpg", imageAlt: "Эндуро, подготовленный для зимней езды на гусеничном комплекте",
    tags: ["65 мм", "Однорычажная схема", "Для эндуро"], price: 165000, availability: "Поставка уточняется", offerType: "export-confirmation", useCase: "Extreme",
    engine: "Не применимо", horsepower: "Зависит от базового эндуро", track: "Гусеничный модуль; точные параметры уточняются", seats: "1 на базе мотоцикла",
    specs: [{ label: "Конфигурация", value: "Задний гусеничный модуль + передняя лыжа" }, { label: "Серия", value: "120 Extreme" }, { label: "Высота зацепа", value: "65 мм" }, { label: "Подвеска модуля", value: "Однорычажная" }, { label: "Совместимость", value: "Уточняется по марке, модели и году эндуро" }],
  }),
  product({
    slug: "htld-129extreme-65", name: "HTLD-129Extreme-65", category: "snowbike", brand: "HTLD",
    eyebrow: "HTLD / 129 Extreme", purpose: "однорычажная подвеска", summary: "Версия 129 Extreme с 65-мм зацепом и передней лыжей. Перед заказом сверяются база мотоцикла и доступная комплектация.",
    image: "/media/snowbike-ai-hero.jpg", imageAlt: "Эндуро, подготовленный для зимней езды на гусеничном комплекте",
    tags: ["65 мм", "Однорычажная схема", "Для эндуро"], price: 169000, availability: "Поставка уточняется", offerType: "export-confirmation", useCase: "Extreme",
    engine: "Не применимо", horsepower: "Зависит от базового эндуро", track: "Гусеничный модуль; точные параметры уточняются", seats: "1 на базе мотоцикла",
    specs: [{ label: "Конфигурация", value: "Задний гусеничный модуль + передняя лыжа" }, { label: "Серия", value: "129 Extreme" }, { label: "Высота зацепа", value: "65 мм" }, { label: "Подвеска модуля", value: "Однорычажная" }, { label: "Совместимость", value: "Уточняется по марке, модели и году эндуро" }],
  }),
  product({
    slug: "htld-129extreme-80", name: "HTLD-129Extreme-80", category: "snowbike", brand: "HTLD",
    eyebrow: "HTLD / 129 Extreme", purpose: "однорычажная подвеска", summary: "Версия 129 Extreme с 80-мм зацепом. Геометрию установки и совместимость подтверждаем для конкретного мотоцикла.",
    image: "/media/snowbike-ai-hero.jpg", imageAlt: "Эндуро, подготовленный для зимней езды на гусеничном комплекте",
    tags: ["80 мм", "Однорычажная схема", "Для эндуро"], price: 179000, availability: "Поставка уточняется", offerType: "export-confirmation", useCase: "Extreme",
    engine: "Не применимо", horsepower: "Зависит от базового эндуро", track: "Гусеничный модуль; точные параметры уточняются", seats: "1 на базе мотоцикла",
    specs: [{ label: "Конфигурация", value: "Задний гусеничный модуль + передняя лыжа" }, { label: "Серия", value: "129 Extreme" }, { label: "Высота зацепа", value: "80 мм" }, { label: "Подвеска модуля", value: "Однорычажная" }, { label: "Совместимость", value: "Уточняется по марке, модели и году эндуро" }],
  }),
  product({
    slug: "nibbi-vanguard-r-120", name: "NIBBI Vanguard R-120", category: "snowbike", brand: "NIBBI Racing",
    eyebrow: "NIBBI / Vanguard R-120", purpose: "комплект для эндуро", summary: "Комплект R-120 с задней гусеницей и передней лыжей. Вариант установки проверяется под конкретную базу и конфигурацию.",
    image: "/media/snowbike-ai-hero.jpg", imageAlt: "Эндуро, подготовленный для зимней езды на гусеничном комплекте",
    tags: ["3050 × 300 мм", "Зацеп 50 мм", "Передняя лыжа"], price: 280000, availability: "Поставка уточняется", offerType: "export-confirmation", useCase: "Racing",
    engine: "Не применимо", horsepower: "Зависит от базового эндуро", track: "3050 × 300 мм; зацеп 50 мм", seats: "1 на базе мотоцикла",
    specs: [{ label: "Конфигурация", value: "Задний гусеничный модуль + передняя лыжа" }, { label: "Длина × ширина гусеницы", value: "3050 × 300 мм" }, { label: "Высота зацепа", value: "50 мм" }, { label: "Совместимость", value: "Уточняется для конкретного мотоцикла" }, { label: "Комплектация", value: "После подтверждения поставщика" }],
  }),
];

export const snowmobiles: Product[] = [
  product({
    slug: "woideal-wd150", name: "WOIDEAL WD150", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / Компактный", purpose: "компактная модель", summary: "Компактный снегоход с двигателем 149,6 см³. Это небольшой формат; не позиционируется как крупная взрослая утилитарная машина.",
    image: "/media/products/woideal-wd160-site.webp", imageAlt: "Компактный снегоход WOIDEAL в зимнем лесу",
    tags: ["149,6 см³", "9,12 л.с.", "Компактный"], price: 235000, availability: "Экспортная модель", offerType: "new", useCase: "Компактный",
    engine: "149,6 см³", horsepower: "9,12 л.с.", track: "Ширина 380 мм", seats: "Уточняется по версии",
    specs: [{ label: "Двигатель", value: "149,6 см³, 4-тактный" }, { label: "Мощность", value: "9,12 л.с." }, { label: "Ширина гусеницы", value: "380 мм" }, { label: "Максимальная нагрузка", value: "175 кг" }, { label: "Комплектация", value: "После подтверждения поставщика" }],
  }),
  product({
    slug: "woideal-wd180", name: "WOIDEAL WD180", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / 180", purpose: "лёгкая зимняя техника", summary: "Модель с 177,3-см³ двигателем. Поставщик может предлагать разные версии; тип питания и точную комплектацию нужно сверить перед заказом.",
    image: "/media/products/woideal-wd180-site.webp", imageAlt: "Снегоход WOIDEAL WD180 на заснеженной лесной дороге",
    tags: ["177,3 см³", "Версия уточняется", "Экспортная модель"], price: 245000, availability: "Экспортная модель", offerType: "new", useCase: "Лёгкий формат",
    engine: "177,3 см³", horsepower: "Зависит от версии", track: "380 × 2662 × 29 мм — по экспортной версии", seats: "Уточняется по версии",
    specs: [{ label: "Двигатель", value: "177,3 см³, 4-тактный" }, { label: "Мощность", value: "Зависит от версии" }, { label: "Гусеница", value: "380 × 2662 × 29 мм — экспортная спецификация" }, { label: "Питание", value: "EFI или карбюратор — сверить по предложению" }, { label: "Комплектация", value: "После подтверждения поставщика" }],
  }),
  product({
    slug: "woideal-wd200-a-2026", name: "WOIDEAL WD200-A (2026)", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / 2026", purpose: "компактная модель", summary: "Актуальная версия WOIDEAL с двигателем 149,6 см³. Заводские параметры опубликованы; экспортную комплектацию и возможность поставки подтверждаем отдельно.",
    image: "/media/products/woideal-wd200a-site.webp", imageAlt: "Компактный снегоход на заснеженном маршруте",
    tags: ["149,6 см³", "9,12 л.с.", "380 мм"], price: null, availability: "Экспорт уточняется", offerType: "export-confirmation", useCase: "Компактный",
    engine: "149,6 см³", horsepower: "6,8 кВт / 9,12 л.с.", track: "380 × 2626 × 29 мм", seats: "Уточняется по версии",
    specs: [{ label: "Версия", value: "WD200-A, модельный год 2026" }, { label: "Двигатель", value: "149,6 см³, одноцилиндровый, 4-тактный" }, { label: "Мощность", value: "6,8 кВт / 9,12 л.с." }, { label: "Гусеница", value: "380 × 2626 × 29 мм" }, { label: "Масса", value: "167 кг" }, { label: "Максимальная скорость", value: "40 км/ч" }, { label: "Экспорт и наличие", value: "После подтверждения поставщика" }],
  }),
  product({
    slug: "woideal-wd250-a-2026", name: "WOIDEAL WD250-A (2026)", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / 2026", purpose: "компактная модель", summary: "Версия WOIDEAL 2026 года с двигателем 177,3 см³ и впрыском топлива. Параметры сверены по карточке производителя; экспорт и комплектацию подтверждаем до заказа.",
    image: "/media/products/woideal-wd250a-site.webp", imageAlt: "Компактный снегоход на заснеженной лесной дороге",
    tags: ["177,3 см³", "11,97 л.с.", "380 мм"], price: null, availability: "Экспорт уточняется", offerType: "export-confirmation", useCase: "Компактный",
    engine: "177,3 см³", horsepower: "8,8 кВт / 11,97 л.с.", track: "380 × 2626 × 29 мм", seats: "Уточняется по версии",
    specs: [{ label: "Версия", value: "WD250-A, модельный год 2026" }, { label: "Двигатель", value: "177,3 см³, одноцилиндровый, 4-тактный" }, { label: "Мощность", value: "8,8 кВт / 11,97 л.с." }, { label: "Питание", value: "Электронный впрыск" }, { label: "Гусеница", value: "380 × 2626 × 29 мм" }, { label: "Масса", value: "185 кг" }, { label: "Максимальная скорость", value: "50 км/ч" }, { label: "Экспорт и наличие", value: "После подтверждения поставщика" }],
  }),
  product({
    slug: "woideal-wd300", name: "WOIDEAL WD300", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / 300", purpose: "зимний маршрут", summary: "Снегоход WOIDEAL из линейки экспортных моделей. Актуальные параметры зависят от версии и подтверждаются по предложению поставщика.",
    image: "/media/products/woideal-wd300-site.webp", imageAlt: "Снегоход WOIDEAL WD300 на зимнем маршруте",
    tags: ["Экспортная модель", "Комплектация уточняется", "Наличие проверяется"], price: 308900, availability: "Наличие уточняется", offerType: "new", useCase: "Маршрут",
    engine: "Уточняется по версии", horsepower: "Уточняется по версии", track: "Уточняется по версии", seats: "Уточняется по версии",
    specs: [{ label: "Двигатель", value: "Параметры сверяются по актуальной версии" }, { label: "Мощность", value: "Уточняется" }, { label: "Гусеница", value: "Уточняется" }, { label: "Экспортное исполнение", value: "Подтвердить по предложению" }, { label: "Комплектация", value: "После подтверждения поставщика" }],
  }),
  product({
    slug: "woideal-wd380", name: "WOIDEAL WD380", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / 380", purpose: "остатки или б/у", summary: "Модель снята с текущей линейки производителя. Рассматриваем складские остатки или б/у экземпляр; год, состояние и документы проверяются отдельно.",
    image: "/media/products/woideal-wd380-site.webp", imageAlt: "Снегоход на зимней лесной дороге",
    tags: ["292,4 см³", "Остатки / б/у", "Состояние проверяется"], price: 419000, availability: "Остатки / б/у", offerType: "new-or-used", useCase: "Остатки и б/у",
    engine: "292,4 см³", horsepower: "19 кВт / около 25,8 л.с.", track: "380 мм ширина", seats: "Уточняется по экземпляру",
    specs: [{ label: "Двигатель", value: "292,4 см³ — данные производителя" }, { label: "Мощность", value: "19 кВт / около 25,8 л.с." }, { label: "Ширина гусеницы", value: "380 мм" }, { label: "Статус модели", value: "Снята с текущей линейки" }, { label: "Формат поставки", value: "Новый остаток или б/у — после проверки экземпляра" }],
  }),
  product({
    slug: "woideal-wd700-2026", name: "WOIDEAL WD700 (2026)", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / 2026", purpose: "крупная версия", summary: "Модель 2026 года есть в китайском каталоге производителя. Фактический экспортный вариант, комплектацию и возможность поставки подтверждаем до заказа.",
    image: "/media/products/woideal-wd700-site.webp", imageAlt: "Полноразмерный снегоход на зимнем маршруте",
    tags: ["622 см³", "Модель 2026", "Экспорт уточняется"], price: null, availability: "Экспорт уточняется", offerType: "export-confirmation", useCase: "Новая версия",
    engine: "622 см³", horsepower: "42,17 л.с.", track: "Уточняется", seats: "Уточняется",
    specs: [{ label: "Двигатель", value: "622 см³ — спецификация WD700" }, { label: "Мощность", value: "31 кВт / 42,17 л.с." }, { label: "Версия", value: "Модель 2026" }, { label: "Экспортное исполнение", value: "Проверить до заказа" }, { label: "Наличие и доставка", value: "После подтверждения поставщика" }],
  }),
  product({
    slug: "taomotor-snowfox-iii", name: "TaoMotor Snowfox III", category: "snowmobile", brand: "TaoMotor", eyebrow: "TaoMotor / Snowfox III", purpose: "компактный снегоход", summary: "Компактная модель с двигателем 170 см³ и двухместной компоновкой. Российский маршрут поставки и актуальную комплектацию необходимо подтвердить.",
    image: "/media/products/taomotor-snowfox-ii-site.webp", imageAlt: "Компактный снегоход семейства TaoMotor Snowfox на зимней лесной дороге",
    tags: ["170 см³", "2 места", "Цена по запросу"], price: null, availability: "Экспорт уточняется", offerType: "export-confirmation", useCase: "Компактный",
    engine: "170 см³", horsepower: "7,6 кВт — по карточке производителя", track: "Уточняется по версии", seats: "2",
    specs: [{ label: "Двигатель", value: "170 см³" }, { label: "Мощность", value: "7,6 кВт — по карточке производителя" }, { label: "Посадочных мест", value: "2" }, { label: "Экспортное исполнение", value: "Проверить для поставки в РФ" }, { label: "Комплектация", value: "После подтверждения поставщика" }],
  }),
  product({
    slug: "woideal-wd160", name: "WOIDEAL WD160", category: "snowmobile", brand: "WOIDEAL", eyebrow: "WOIDEAL / WD160", purpose: "детский компактный", summary: "Компактная детская модель производителя. Предлагаются версии WD160-A и WD160-B с разными двигателями; это не взрослый утилитарный снегоход.",
    image: "/media/products/woideal-wd160-site.webp", imageAlt: "Компактный детский снегоход WOIDEAL WD160 на зимнем фоне",
    tags: ["98 / 196 см³", "Детская модель", "Цена по запросу"], price: null, availability: "Версия и экспорт уточняются", offerType: "export-confirmation", useCase: "Детский компактный",
    engine: "98 см³ (WD160-B) или 196 см³ (WD160-A)", horsepower: "2,51 или 5,85 л.с. — по версии", track: "256 × 1728 мм", seats: "1",
    specs: [{ label: "Версии", value: "WD160-A / WD160-B" }, { label: "Двигатель", value: "98 см³ или 196 см³, 4-тактный — по версии" }, { label: "Мощность", value: "2,51 или 5,85 л.с. — по версии" }, { label: "Гусеница", value: "256 × 1728 мм" }, { label: "Максимальная нагрузка", value: "40 кг — данные производителя" }, { label: "Возраст и экспорт", value: "Уточнить перед заказом" }],
  }),
  product({
    slug: "taomotor-snowfox-ii", name: "TaoMotor Snowfox II", category: "snowmobile", brand: "TaoMotor", eyebrow: "TaoMotor / Snowfox II", purpose: "двухместный компактный", summary: "Двухместная компактная модель с двигателем GY6 170 см³. Параметры взяты из карточки производителя; конкретную экспортную версию нужно подтвердить.",
    image: "/media/products/taomotor-snowfox-ii-site.webp", imageAlt: "TaoMotor Snowfox II на зимней лесной дороге",
    tags: ["170 см³", "7,6 кВт", "2 места"], price: null, availability: "Экспорт уточняется", offerType: "export-confirmation", useCase: "Компактный",
    engine: "GY6, 170 см³", horsepower: "7,6 кВт", track: "Ширина 380 мм", seats: "2",
    specs: [{ label: "Двигатель", value: "GY6, 170 см³" }, { label: "Максимальная мощность", value: "7,6 кВт при 7000 об/мин" }, { label: "Максимальный момент", value: "10,2 Н·м при 5000 об/мин" }, { label: "Ширина гусеницы", value: "380 мм" }, { label: "Сухая масса", value: "130 кг" }, { label: "Посадочных мест", value: "2" }, { label: "Наличие и экспорт", value: "После подтверждения поставщика" }],
  }),
  product({
    slug: "aodes-snowcross-800-wt", name: "AODES Snowcross 800 WT", category: "snowmobile", brand: "AODES", eyebrow: "AODES / Snowcross 800 WT", purpose: "утилитарный", summary: "Глобальная версия Snowcross с 800-см³ V-образным двигателем и гусеницей шириной 500 мм. В китайском предложении проверяем год, комплектацию и документы.",
    image: "/media/products/aodes-snowcross-800-wt-site.webp", imageAlt: "AODES Snowcross 800 WT на снежном маршруте",
    tags: ["800 см³", "60 л.с.", "2 места"], price: 990000, availability: "Ориентир по предложению из Китая", offerType: "export-confirmation", useCase: "Утилитарный",
    engine: "800 см³, V-twin, 4-тактный", horsepower: "44 кВт / около 60 л.с.", track: "3925 × 500 × 40 мм", seats: "2 — по версии",
    specs: [{ label: "Двигатель", value: "800 см³, V-образный двухцилиндровый, 4-тактный" }, { label: "Максимальная мощность", value: "44 кВт при 6000 об/мин" }, { label: "Гусеница", value: "3925 × 500 × 40 мм" }, { label: "Топливный бак", value: "42 л" }, { label: "Скорость", value: "До 80 км/ч — по спецификации производителя" }, { label: "Посадочных мест", value: "Двухместная конфигурация — подтвердить по предложению" }, { label: "Цена", value: "Ориентир предложения из Китая; подтвердить перед заказом" }],
  }),
  product({
    slug: "aodes-alpinecross-1000", name: "AODES AlpineCross 1000", category: "snowmobile", brand: "AODES", eyebrow: "AODES / AlpineCross 1000", purpose: "туристический утилитарный", summary: "Полноразмерная двухместная модель AODES для зимних маршрутов. Цена взята из предложения с маршрутом Китай → Владивосток; наличие и комплектацию нужно перепроверить.",
    image: "/media/products/aodes-alpinecross-1000.webp", imageAlt: "AODES AlpineCross 1000 на открытом снежном маршруте",
    tags: ["1000 см³", "2 места", "Китай → Владивосток"], price: 890000, availability: "Ориентир предложения из Китая", offerType: "export-confirmation", useCase: "Маршрут и хозяйство",
    engine: "1000 см³ — индекс и рыночные предложения", horsepower: "Уточняется по версии", track: "Уточняется по версии", seats: "2",
    specs: [{ label: "Модель", value: "AlpineCross 1000" }, { label: "Двигатель", value: "1000 см³ — сверить точную спецификацию" }, { label: "Посадочных мест", value: "2" }, { label: "Цена", value: "Ориентир предложения Китай → Владивосток" }, { label: "Комплектация и документы", value: "После подтверждения поставщика" }],
  }),
  product({
    slug: "aodes-snowcross-1000-wt", name: "AODES Snowcross 1000 WT", category: "snowmobile", brand: "AODES", eyebrow: "AODES / Snowcross 1000 WT", purpose: "утилитарный", summary: "Глобальная версия AODES Snowcross с узкой гусеницей WT. Модель присутствует в спецификации производителя; экспортное исполнение и цена проверяются отдельно.",
    image: "/media/products/aodes-snowcross-1000-wt.png", imageAlt: "Снегоход AODES Snowcross WT из глобальной линейки производителя", imageTreatment: "cutout",
    tags: ["976 см³", "WT / 500 мм", "Цена по запросу"], price: null, availability: "Экспорт и наличие уточняются", offerType: "export-confirmation", useCase: "Утилитарный",
    engine: "976 см³ — уточнить по году", horsepower: "Уточняется по версии", track: "Уточняется по версии", seats: "Уточняется по версии",
    specs: [{ label: "Модель", value: "Snowcross 1000 WT" }, { label: "Двигатель", value: "V-twin, 4-тактный; точный объём сверяется по году" }, { label: "Гусеница", value: "Уточняется по версии" }, { label: "Экспортное исполнение", value: "Подтвердить по предложению" }, { label: "Цена и наличие", value: "После подтверждения поставщика" }],
  }),
  product({
    slug: "aodes-snowcross-1000-swt", name: "AODES Snowcross 1000 SWT", category: "snowmobile", brand: "AODES", eyebrow: "AODES / Snowcross 1000 SWT", purpose: "широкая гусеница", summary: "Широкая версия Snowcross для рыхлого снега. Предварительная цена взята из предложения под заказ из Китая; конкретный год и комплектацию сверяем до оплаты.",
    image: "/media/products/aodes-snowcross-1000-swt.png", imageAlt: "Снегоход AODES Snowcross SWT из глобальной линейки производителя", imageTreatment: "cutout",
    tags: ["976 см³", "SWT", "2 места"], price: 1190000, availability: "Ориентир предложения под заказ", offerType: "export-confirmation", useCase: "Рыхлый снег",
    engine: "976 см³ — уточнить по году", horsepower: "Уточняется по версии", track: "Ширина и длина уточняются по версии", seats: "2 — по предложению",
    specs: [{ label: "Модель", value: "Snowcross 1000 SWT" }, { label: "Двигатель", value: "V-twin, 4-тактный; точный объём сверяется по году" }, { label: "Гусеница", value: "Широкая конфигурация SWT; точный размер уточнить" }, { label: "Посадочных мест", value: "2 — подтвердить по комплектации" }, { label: "Цена", value: "Ориентир предложения из Китая; проверить перед заказом" }],
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
