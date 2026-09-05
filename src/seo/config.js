/** Site-wide SEO & route config */
export const SITE = {
  name: "Əmlak",
  url: "https://emlak.az",
  defaultImage: "/og-default.jpg",
  twitter: "@emlak_az",
  locale: {
    az: "az_AZ",
    ru: "ru_RU",
    en: "en_US",
  },
};

export const LANG_CODES = ["az", "ru", "en"];

export const ROUTES = {
  home: "",
  catalog: "kataloq",
  about: "haqqimizda",
  process: "proses",
  reviews: "reyler",
  contact: "elaqe",
  property: "obyekt",
};

export function pathFor(lang, routeKey, id) {
  const base = `/${lang}`;
  if (routeKey === "home") return base;
  const slug = ROUTES[routeKey];
  if (routeKey === "property" && id) return `${base}/${slug}/${id}`;
  return `${base}/${slug}`;
}

/** Per-page SEO copy (title + description) */
export const PAGE_SEO = {
  az: {
    home: {
      title: "Əmlak — Biznes üçün kommersiya daşınmaz əmlakı",
      description:
        "Bakı, Gəncə və Sumqayıtda ofis, anbar, torpaq və ticarət obyektləri. Kirayə və satış — peşəkar dəstək ilə.",
      path: "",
    },
    catalog: {
      title: "Obyektlər kataloqu | Əmlak",
      description:
        "Kommersiya daşınmaz əmlak kataloqu: ofis, anbar, torpaq və ticarət sahələri. Şəhər və qiymətə görə axtarın.",
      path: "kataloq",
    },
    about: {
      title: "Haqqımızda | Əmlak",
      description:
        "10+ il təcrübə, 1000+ uğurlu sövdələşmə. Biznesiniz üçün uyğun obyekt tapırıq.",
      path: "haqqimizda",
    },
    process: {
      title: "Necə işləyirik | Əmlak",
      description:
        "Konsultasiyadan sövdələşməyə qədər 5 addımlı şəffaf proses.",
      path: "proses",
    },
    reviews: {
      title: "Müştəri rəyləri | Əmlak",
      description: "Müştərilərimizin Əmlak haqqında real rəyləri.",
      path: "reyler",
    },
    contact: {
      title: "Əlaqə | Əmlak",
      description:
        "Bizimlə əlaqə saxlayın. Bakı, Nərimanov. Telefon və onlayn ərizə formu.",
      path: "elaqe",
    },
    notFound: {
      title: "Səhifə tapılmadı | Əmlak",
      description: "Axtardığınız səhifə mövcud deyil.",
      path: "",
    },
  },
  ru: {
    home: {
      title: "Əmlak — Коммерческая недвижимость для бизнеса",
      description:
        "Офисы, склады, земля и торговые площади в Баку, Гяндже и Сумгаите. Аренда и продажа с профессиональной поддержкой.",
      path: "",
    },
    catalog: {
      title: "Каталог объектов | Əmlak",
      description:
        "Каталог коммерческой недвижимости: офисы, склады, земля и торговые площади. Поиск по городу и цене.",
      path: "kataloq",
    },
    about: {
      title: "О нас | Əmlak",
      description:
        "Более 10 лет опыта и 1000+ успешных сделок. Подбираем объекты под ваш бизнес.",
      path: "haqqimizda",
    },
    process: {
      title: "Как мы работаем | Əmlak",
      description: "Прозрачный процесс из 5 шагов — от консультации до сделки.",
      path: "proses",
    },
    reviews: {
      title: "Отзывы клиентов | Əmlak",
      description: "Отзывы клиентов об агентстве Əmlak.",
      path: "reyler",
    },
    contact: {
      title: "Контакты | Əmlak",
      description: "Свяжитесь с нами. Баку, Наримановский р. Телефон и онлайн-заявка.",
      path: "elaqe",
    },
    notFound: {
      title: "Страница не найдена | Əmlak",
      description: "Запрашиваемая страница не существует.",
      path: "",
    },
  },
  en: {
    home: {
      title: "Əmlak — Commercial real estate for business",
      description:
        "Offices, warehouses, land and retail spaces in Baku, Ganja and Sumgayit. Rent and sale with expert support.",
      path: "",
    },
    catalog: {
      title: "Property catalog | Əmlak",
      description:
        "Browse commercial properties: offices, warehouses, land and retail. Filter by city and price.",
      path: "kataloq",
    },
    about: {
      title: "About us | Əmlak",
      description:
        "10+ years of experience and 1000+ successful deals. We find the right property for your business.",
      path: "haqqimizda",
    },
    process: {
      title: "How we work | Əmlak",
      description: "A clear 5-step process from consultation to closing.",
      path: "proses",
    },
    reviews: {
      title: "Client reviews | Əmlak",
      description: "What clients say about Əmlak.",
      path: "reyler",
    },
    contact: {
      title: "Contact | Əmlak",
      description: "Get in touch. Baku, Narimanov. Phone and online enquiry form.",
      path: "elaqe",
    },
    notFound: {
      title: "Page not found | Əmlak",
      description: "The page you requested does not exist.",
      path: "",
    },
  },
};

export function absoluteUrl(path = "") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${clean === "//" ? "/" : clean}`;
}

export function propertySeo(lang, property, copy) {
  const title = `${copy?.title || "Obyekt"} | Əmlak`;
  const description =
    copy?.desc ||
    "Kommersiya daşınmaz əmlak obyekti — Əmlak agentliyində baxın.";
  return {
    title,
    description,
    image: property?.img,
    type: "product",
    path: `obyekt/${property?.id}`,
  };
}
