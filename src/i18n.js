export const LANGS = [
  { code: "az", label: "AZ", name: "Azərbaycan" },
  { code: "ru", label: "RU", name: "Русский" },
  { code: "en", label: "EN", name: "English" },
];

export const NAV_HREFS = {
  about: "#haqqimizda",
  catalog: "#kataloq",
  process: "#proses",
  reviews: "#reyler",
  contact: "#elaqe",
};

const sharedSearch = {
  az: {
    city: "Şəhər",
    category: "Kateqoriya",
    price: "Qiymət aralığı",
    search: "Axtar",
    anyCity: "Bütün şəhərlər",
    anyCategory: "Bütün kateqoriyalar",
    anyPrice: "İstənilən qiymət",
    cities: { baku: "Bakı", ganja: "Gəncə", sumgayit: "Sumqayıt" },
    categories: {
      office: "Ofis",
      warehouse: "Anbar",
      land: "Torpaq",
      retail: "Ticarət",
    },
    prices: {
      "0-1000": "0 – 1 000 AZN",
      "1000-2000": "1 000 – 2 000 AZN",
      "2000-5000": "2 000 – 5 000 AZN",
      "5000+": "5 000+ AZN",
    },
  },
  ru: {
    city: "Город",
    category: "Категория",
    price: "Диапазон цен",
    search: "Искать",
    anyCity: "Все города",
    anyCategory: "Все категории",
    anyPrice: "Любая цена",
    cities: { baku: "Баку", ganja: "Гянджа", sumgayit: "Сумгаит" },
    categories: {
      office: "Офис",
      warehouse: "Склад",
      land: "Земля",
      retail: "Торговля",
    },
    prices: {
      "0-1000": "0 – 1 000 AZN",
      "1000-2000": "1 000 – 2 000 AZN",
      "2000-5000": "2 000 – 5 000 AZN",
      "5000+": "5 000+ AZN",
    },
  },
  en: {
    city: "City",
    category: "Category",
    price: "Price range",
    search: "Search",
    anyCity: "All cities",
    anyCategory: "All categories",
    anyPrice: "Any price",
    cities: { baku: "Baku", ganja: "Ganja", sumgayit: "Sumgayit" },
    categories: {
      office: "Office",
      warehouse: "Warehouse",
      land: "Land",
      retail: "Retail",
    },
    prices: {
      "0-1000": "0 – 1,000 AZN",
      "1000-2000": "1,000 – 2,000 AZN",
      "2000-5000": "2,000 – 5,000 AZN",
      "5000+": "5,000+ AZN",
    },
  },
};

const propertyCopy = {
  az: {
    "ofis-nizami": {
      title: "Ofis — Nizami küç.",
      address: "Bakı, Nizami r., Nizami küç. 45",
      desc: "Mərkəzdə yerləşən müasir ofis sahəsi. Açıq plan, yüksək tavan, fiber internet və 24/7 təhlükəsizlik.",
    },
    "ofis-port": {
      title: "Ofis — Port Baku yaxınlığı",
      address: "Bakı, Səbail r., Neftçilər pr. 12",
      desc: "Dənizə yaxın premium ofis. Panoramik pəncərələr, parking və görüş otaqları daxildir.",
    },
    "anbar-sumqayit": {
      title: "Anbar — Sumqayıt sənaye zonası",
      address: "Sumqayıt, Sənaye zonasu, blok 3",
      desc: "Yük maşını girişi olan böyük anbar. Rampalar, ofis bloğu və mühafizə xidməti mövcuddur.",
    },
    "anbar-ganja": {
      title: "Anbar — Gəncə",
      address: "Gəncə, Sənaye yolu 8",
      desc: "Logistika üçün əlverişli anbar sahəsi. Elektrik, su və müşahidə kameraları ilə təchiz olunub.",
    },
    "torpaq-absheron": {
      title: "Torpaq sahəsi — Abşeron",
      address: "Bakı ətrafı, Abşeron rayonu",
      desc: "Tikinti və anbar layihələri üçün əlverişli torpaq. Sənədlər tam hazırdır.",
    },
    "ticaret-28may": {
      title: "Ticarət sahəsi — 28 May",
      address: "Bakı, Nəsimi r., 28 May küç.",
      desc: "Yüksək piyada axını olan ticarət nöqtəsi. Vitrin pəncərələri və anbar otağı var.",
    },
    "ofis-ganja": {
      title: "Ofis — Gəncə mərkəz",
      address: "Gəncə, Atatürk pr. 22",
      desc: "Şəhər mərkəzində işıqlı ofis. Kiçik komandalar və filiallar üçün idealdır.",
    },
    "ticaret-sumqayit": {
      title: "Ticarət — Sumqayıt",
      address: "Sumqayıt, Mərkəz küç. 5",
      desc: "Küçəyə çıxışı olan ticarət sahəsi. Kafe, mağaza və xidmət məkanları üçün uyğundur.",
    },
  },
  ru: {
    "ofis-nizami": {
      title: "Офис — ул. Низами",
      address: "Баку, Низаминский р., ул. Низами 45",
      desc: "Современный офис в центре. Открытая планировка, высокие потолки, оптоволокно и охрана 24/7.",
    },
    "ofis-port": {
      title: "Офис — рядом с Port Baku",
      address: "Баку, Сабаильский р., пр. Нефтчиляр 12",
      desc: "Премиум-офис у моря. Панорамные окна, парковка и переговорные включены.",
    },
    "anbar-sumqayit": {
      title: "Склад — промзона Сумгаит",
      address: "Сумгаит, Промзона, блок 3",
      desc: "Крупный склад с подъездом для фур. Рампы, офисный блок и охрана.",
    },
    "anbar-ganja": {
      title: "Склад — Гянджа",
      address: "Гянджа, Промдорога 8",
      desc: "Удобный склад для логистики. Электричество, вода и видеонаблюдение.",
    },
    "torpaq-absheron": {
      title: "Земельный участок — Абшерон",
      address: "Окрестности Баку, Абшеронский район",
      desc: "Участок под строительство и складские проекты. Документы готовы.",
    },
    "ticaret-28may": {
      title: "Торговая площадь — 28 Мая",
      address: "Баку, Насиминский р., ул. 28 Мая",
      desc: "Точка с высоким пешеходным трафиком. Витрины и подсобное помещение.",
    },
    "ofis-ganja": {
      title: "Офис — центр Гянджи",
      address: "Гянджа, пр. Ататюрка 22",
      desc: "Светлый офис в центре города. Идеален для небольших команд и филиалов.",
    },
    "ticaret-sumqayit": {
      title: "Торговля — Сумгаит",
      address: "Сумгаит, ул. Центральная 5",
      desc: "Торговая площадь с выходом на улицу. Подходит для кафе, магазинов и сервисов.",
    },
  },
  en: {
    "ofis-nizami": {
      title: "Office — Nizami St.",
      address: "Baku, Nizami dist., Nizami St. 45",
      desc: "Modern office in the center. Open plan, high ceilings, fiber internet and 24/7 security.",
    },
    "ofis-port": {
      title: "Office — near Port Baku",
      address: "Baku, Sabail dist., Neftchilar Ave. 12",
      desc: "Premium seaside office. Panoramic windows, parking and meeting rooms included.",
    },
    "anbar-sumqayit": {
      title: "Warehouse — Sumgayit industrial",
      address: "Sumgayit, Industrial zone, block 3",
      desc: "Large warehouse with truck access. Ramps, office block and security on site.",
    },
    "anbar-ganja": {
      title: "Warehouse — Ganja",
      address: "Ganja, Industrial Road 8",
      desc: "Convenient logistics warehouse. Electricity, water and CCTV included.",
    },
    "torpaq-absheron": {
      title: "Land plot — Absheron",
      address: "Greater Baku, Absheron district",
      desc: "Plot suitable for construction and warehouse projects. Documents ready.",
    },
    "ticaret-28may": {
      title: "Retail — 28 May",
      address: "Baku, Nasimi dist., 28 May St.",
      desc: "High-footfall retail unit. Shopfront windows and storage room included.",
    },
    "ofis-ganja": {
      title: "Office — Ganja center",
      address: "Ganja, Ataturk Ave. 22",
      desc: "Bright downtown office. Ideal for small teams and branch offices.",
    },
    "ticaret-sumqayit": {
      title: "Retail — Sumgayit",
      address: "Sumgayit, Central St. 5",
      desc: "Street-facing retail space. Suitable for cafes, shops and service points.",
    },
  },
};

function makeLang(lang) {
  const search = sharedSearch[lang];
  const props = propertyCopy[lang];

  const base = {
    az: {
      brandSubtitle: "kommersiya daşınmaz əmlakı",
      homeAria: "Əmlak ana səhifə",
      menu: "Menyu",
      nav: {
        about: "Haqqımızda",
        catalog: "Kataloq",
        process: "İş prosesi",
        reviews: "Rəylər",
        contact: "Əlaqə",
      },
      hero: {
        titleLine1: "Biznes üçün",
        titleLine2: "daşınmaz əmlak",
        subtitle: "Kirayə, satış və obyekt seçimi — ofislərdən anbarlara qədər.",
        cta: "Əməkdaşlığa başla",
        imageAlt: "Müasir ev",
      },
      about: {
        title: "Haqqımızda",
        text: "Biz — biznesə uyğun obyektlər tapmağa kömək edən kommersiya daşınmaz əmlakı üzrə ekspert agentliyik. Kirayə və ya alqı-satqı üçün tam hüquqi dəstəkli xidmətlər təqdim edirik: obyekt seçimindən sövdələşmənin başa çatmasına qədər.",
        partnersTitle: "Tərəfdaşlarımız",
      },
      stats: [
        { value: "10+", label: "il bazar təcrübəsi" },
        { value: "1000+", label: "uğurlu sövdələşmə" },
        { value: "4000+", label: "obyekt bazamızda" },
        { value: "95%", label: "məmnun müştəri" },
      ],
      catalog: {
        title: "Obyektlər kataloqu",
        subtitle: "Biznesiniz üçün geniş daşınmaz əmlak seçimi",
        results: (n) => `${n} obyekt tapıldı`,
        empty: "Filtrə uyğun obyekt tapılmadı. Digər meyarlarla yenidən axtarın.",
        reset: "Filtrləri sıfırla",
        rent: "ay",
        sale: "satış",
        view: "Ətraflı bax",
      },
      process: {
        title: "Necə işləyirik",
        subtitle: "İşimizi sizin üçün mümkün qədər sadə və şəffaf etdik",
        badge: "Pulsuz\nməsləhət",
        imageAlt: "Bina fasadı",
        steps: [
          {
            title: "Konsultasiya və ehtiyacların təhlili",
            text: "Bu mərhələdə sizə hansı növ daşınmaz əmlakın lazım olduğunu müəyyən edirik.",
          },
          {
            title: "Obyektin axtarışı və seçimi",
            text: "Büdcənizə və tələblərinizə uyğun yalnız yoxlanılmış obyektlər təklif edirik.",
          },
          {
            title: "Baxış və qiymətləndirmə",
            text: "Obyektə baxışı təşkil edir, daşınmaz əmlak haqqında tam məlumat veririk.",
          },
          {
            title: "Sənədlərin yoxlanılması və hazırlanması",
            text: "Bütün sənədlərin və mülkiyyət hüquqlarının hərtərəfli yoxlanılmasını aparırıq.",
          },
          {
            title: "Sövdələşmənin müşayiəti",
            text: "Müqavilənin bağlanmasında və sövdələşmənin bütün mərhələlərində dəstək göstəririk.",
          },
        ],
      },
      reviews: {
        title: "Müştərilərimiz nə deyir",
        items: [
          {
            quote:
              "Komanda seçilmiş obyektin bütün peşəkar üstünlüklərini vurğuladı, sənədləşdirmə prosesində müşayiət etdi və əməkdaşlığı çox rahat etdi.",
            name: "Yekaterina İljina",
            role: "Şirkət direktoru",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
          },
          {
            quote:
              "İki həftəyə uyğun anbar tapdıq. Qiymət və yerləşmə gözləntilərimizə tam cavab verdi. Tövsiyə edirəm.",
            name: "Rəşad Məmmədov",
            role: "Logistika meneceri",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
          },
          {
            quote:
              "Ofis axtarışında vaxtımızı qənaət etdilər. Hüquqi yoxlama da peşəkar səviyyədə idi.",
            name: "Leyla Həsənova",
            role: "Startup təsisçisi",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
          },
        ],
      },
      detail: {
        back: "Kataloqa qayıt",
        area: "Sahə",
        price: "Qiymət",
        city: "Şəhər",
        category: "Kateqoriya",
        deal: "Sövdələşmə",
        rent: "Kirayə",
        sale: "Satış",
        features: "Xüsusiyyətlər",
        featureList: [
          "Hüquqi sənədlər yoxlanılıb",
          "Müştəri baxışı mümkündür",
          "Komissiya şəffafdır",
          "Danışıq dəstəyi",
        ],
        cta: "Bu obyektə müraciət et",
        gallery: "Qalereya",
      },
      contact: {
        titleLine1: "Əməkdaşlığı",
        titleLine2: "müzakirə edək!",
        subtitle: "Sualınız var? Ərizə buraxın, biz sizinlə yaxın vaxtda əlaqə saxlayacağıq.",
        name: "Adınız",
        phone: "Telefon",
        email: "E-poçt",
        submit: "Sorğu göndər",
        sent: "Göndərildi ✓",
        address: "Bakı, Nərimanov r.",
        social: "Sosial şəbəkə",
        copyright: "© 2026 Əmlak. Bütün hüquqlar qorunur.",
      },
    },
    ru: {
      brandSubtitle: "коммерческая недвижимость",
      homeAria: "Главная страница Əmlak",
      menu: "Меню",
      nav: {
        about: "О нас",
        catalog: "Каталог",
        process: "Этапы работы",
        reviews: "Отзывы",
        contact: "Контакты",
      },
      hero: {
        titleLine1: "Недвижимость",
        titleLine2: "для бизнеса",
        subtitle: "Аренда, продажа и подбор объектов — от офисов до складов.",
        cta: "Начать сотрудничество",
        imageAlt: "Современный дом",
      },
      about: {
        title: "О нас",
        text: "Мы — экспертное агентство коммерческой недвижимости, которое помогает найти объекты под ваш бизнес. Предоставляем услуги с полной юридической поддержкой: от подбора объекта до завершения сделки.",
        partnersTitle: "Наши партнёры",
      },
      stats: [
        { value: "10+", label: "лет на рынке" },
        { value: "1000+", label: "успешных сделок" },
        { value: "4000+", label: "объектов в нашей базе" },
        { value: "95%", label: "довольных клиентов" },
      ],
      catalog: {
        title: "Каталог объектов",
        subtitle: "Широкий выбор недвижимости для вашего бизнеса",
        results: (n) => `Найдено объектов: ${n}`,
        empty: "По фильтру ничего не найдено. Попробуйте другие критерии.",
        reset: "Сбросить фильтры",
        rent: "мес.",
        sale: "продажа",
        view: "Подробнее",
      },
      process: {
        title: "Как мы работаем",
        subtitle: "Мы сделали работу с нами максимально простой и прозрачной",
        badge: "Бесплатная\nконсультация",
        imageAlt: "Фасад здания",
        steps: [
          {
            title: "Консультация и анализ потребностей",
            text: "На этом этапе мы определяем, какой тип недвижимости вам нужен.",
          },
          {
            title: "Поиск и подбор объекта",
            text: "Предлагаем только проверенные объекты, соответствующие бюджету и требованиям.",
          },
          {
            title: "Просмотр и оценка",
            text: "Организуем просмотр и предоставляем полную информацию об объекте.",
          },
          {
            title: "Проверка и подготовка документов",
            text: "Проводим тщательную проверку всех документов и прав собственности.",
          },
          {
            title: "Сопровождение сделки",
            text: "Поддерживаем вас на всех этапах заключения договора и сделки.",
          },
        ],
      },
      reviews: {
        title: "Что о нас говорят клиенты",
        items: [
          {
            quote:
              "Команда подчеркнула все преимущества объекта, сопровождала оформление документов и сделала сотрудничество комфортным.",
            name: "Екатерина Ильина",
            role: "Директор компании",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
          },
          {
            quote:
              "За две недели нашли подходящий склад. Цена и локация полностью совпали с ожиданиями.",
            name: "Рашад Мамедов",
            role: "Менеджер по логистике",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
          },
          {
            quote:
              "Сэкономили наше время при поиске офиса. Юридическая проверка тоже на высоте.",
            name: "Лейла Гасанова",
            role: "Основатель стартапа",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
          },
        ],
      },
      detail: {
        back: "Назад в каталог",
        area: "Площадь",
        price: "Цена",
        city: "Город",
        category: "Категория",
        deal: "Сделка",
        rent: "Аренда",
        sale: "Продажа",
        features: "Особенности",
        featureList: [
          "Документы проверены",
          "Возможен просмотр",
          "Прозрачная комиссия",
          "Поддержка переговоров",
        ],
        cta: "Оставить заявку на объект",
        gallery: "Галерея",
      },
      contact: {
        titleLine1: "Давайте обсудим",
        titleLine2: "сотрудничество!",
        subtitle: "Есть вопрос? Оставьте заявку — мы свяжемся с вами в ближайшее время.",
        name: "Ваше имя",
        phone: "Телефон",
        email: "Эл. почта",
        submit: "Отправить заявку",
        sent: "Отправлено ✓",
        address: "Баку, Наримановский р.",
        social: "Соцсеть",
        copyright: "© 2026 Əmlak. Все права защищены.",
      },
    },
    en: {
      brandSubtitle: "commercial real estate",
      homeAria: "Əmlak home page",
      menu: "Menu",
      nav: {
        about: "About",
        catalog: "Catalog",
        process: "How we work",
        reviews: "Reviews",
        contact: "Contact",
      },
      hero: {
        titleLine1: "Real estate",
        titleLine2: "for business",
        subtitle: "Rent, sale and property selection — from offices to warehouses.",
        cta: "Start cooperation",
        imageAlt: "Modern house",
      },
      about: {
        title: "About us",
        text: "We are a commercial real estate agency that helps businesses find the right properties. We provide full legal support — from selection to closing the deal.",
        partnersTitle: "Our partners",
      },
      stats: [
        { value: "10+", label: "years on the market" },
        { value: "1000+", label: "successful deals" },
        { value: "4000+", label: "properties in our database" },
        { value: "95%", label: "satisfied clients" },
      ],
      catalog: {
        title: "Property catalog",
        subtitle: "A wide range of real estate for your business",
        results: (n) => `${n} properties found`,
        empty: "No properties match your filters. Try different criteria.",
        reset: "Reset filters",
        rent: "mo",
        sale: "sale",
        view: "View details",
      },
      process: {
        title: "How we work",
        subtitle: "We made working with us as simple and transparent as possible",
        badge: "Free\nconsultation",
        imageAlt: "Building facade",
        steps: [
          {
            title: "Consultation and needs analysis",
            text: "At this stage we determine what type of real estate you need.",
          },
          {
            title: "Property search and selection",
            text: "We offer only verified properties that match your budget and requirements.",
          },
          {
            title: "Viewing and appraisal",
            text: "We arrange viewings and provide full information about the property.",
          },
          {
            title: "Document check and preparation",
            text: "We thoroughly verify all documents and ownership rights.",
          },
          {
            title: "Deal support",
            text: "We support you at every stage of signing the contract and closing the deal.",
          },
        ],
      },
      reviews: {
        title: "What our clients say",
        items: [
          {
            quote:
              "The team highlighted every advantage of the property, guided us through paperwork, and made cooperation very comfortable.",
            name: "Ekaterina Ilyina",
            role: "Company director",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
          },
          {
            quote:
              "We found a suitable warehouse in two weeks. Price and location matched our expectations perfectly.",
            name: "Rashad Mammadov",
            role: "Logistics manager",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
          },
          {
            quote:
              "They saved us time during the office search. Legal verification was also top-notch.",
            name: "Leyla Hasanova",
            role: "Startup founder",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
          },
        ],
      },
      detail: {
        back: "Back to catalog",
        area: "Area",
        price: "Price",
        city: "City",
        category: "Category",
        deal: "Deal type",
        rent: "Rent",
        sale: "Sale",
        features: "Highlights",
        featureList: [
          "Documents verified",
          "Viewings available",
          "Transparent commission",
          "Negotiation support",
        ],
        cta: "Enquire about this property",
        gallery: "Gallery",
      },
      contact: {
        titleLine1: "Let's discuss",
        titleLine2: "cooperation!",
        subtitle: "Have a question? Leave a request — we'll get back to you soon.",
        name: "Your name",
        phone: "Phone",
        email: "Email",
        submit: "Send request",
        sent: "Sent ✓",
        address: "Baku, Narimanov dist.",
        social: "Social network",
        copyright: "© 2026 Əmlak. All rights reserved.",
      },
    },
  };

  return {
    ...base[lang],
    search,
    properties: props,
  };
}

export const translations = {
  az: makeLang("az"),
  ru: makeLang("ru"),
  en: makeLang("en"),
};

export function formatPrice(price, deal, t) {
  const formatted = price.toLocaleString("az-AZ");
  if (deal === "sale") return `${formatted} AZN · ${t.catalog.sale}`;
  return `${formatted} AZN/${t.catalog.rent}`;
}

export function formatArea(area) {
  return `${area.toLocaleString("az-AZ")} m²`;
}
