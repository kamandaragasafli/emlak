import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, MapPin, Maximize2, Tag, Building2 } from "lucide-react";
import { useLang } from "../LangContext";
import { pathFor } from "../components/Shared";
import { PROPERTIES } from "../data/properties";
import { formatArea, formatPrice } from "../i18n";
import Seo from "../seo/Seo";
import { propertySeo, absoluteUrl, SITE } from "../seo/config";

export default function PropertyPage() {
  const { id, lang: paramLang } = useParams();
  const { t, lang } = useLang();
  const property = PROPERTIES.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(0);
  const [sent, setSent] = useState(false);

  if (!property) {
    return <Navigate to={`/${paramLang || lang}/kataloq`} replace />;
  }

  const copy = t.properties[property.id];
  const gallery = property.gallery?.length ? property.gallery : [property.img];
  const seo = propertySeo(lang, property, copy);

  const productLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: copy?.title,
    description: copy?.desc,
    url: absoluteUrl(`/${lang}/obyekt/${property.id}`),
    image: property.img,
    address: {
      "@type": "PostalAddress",
      streetAddress: copy?.address,
      addressCountry: "AZ",
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.area,
      unitCode: "MTK",
    },
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "AZN",
      availability: "https://schema.org/InStock",
      businessFunction:
        property.deal === "rent"
          ? "https://schema.org/LeaseOut"
          : "https://schema.org/Sell",
    },
    seller: {
      "@type": "RealEstateAgent",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={`obyekt/${property.id}`}
        image={property.img}
        type="product"
        jsonLd={productLd}
      />

      <article className="pb-16">
        <div className="border-b border-mist bg-white">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-4 md:px-8">
            <Link
              to={pathFor(lang, "catalog")}
              className="flex h-11 items-center gap-2 rounded-full border border-mist px-4 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.detail.back}
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 pt-6 md:px-8 md:pt-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="overflow-hidden rounded-2xl bg-mist md:rounded-3xl">
                <img
                  src={gallery[activeImg]}
                  alt={copy?.title}
                  className="aspect-[4/3] w-full object-cover"
                  width={900}
                  height={675}
                />
              </div>
              {gallery.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                  {gallery.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImg(i)}
                      className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                        i === activeImg ? "border-ink" : "border-transparent opacity-70"
                      }`}
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <p className="text-sm font-medium text-steel-deep">
                {t.search.categories[property.category]} · {t.search.cities[property.city]}
              </p>
              <h1 className="mt-2 text-[28px] font-semibold tracking-tight text-ink md:text-[36px]">
                {copy?.title}
              </h1>
              <p className="mt-2 flex items-start gap-2 text-[15px] text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {copy?.address}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { icon: Maximize2, label: t.detail.area, value: formatArea(property.area) },
                  {
                    icon: Tag,
                    label: t.detail.price,
                    value: formatPrice(property.price, property.deal, t),
                  },
                  {
                    icon: Building2,
                    label: t.detail.category,
                    value: t.search.categories[property.category],
                  },
                  {
                    icon: MapPin,
                    label: t.detail.deal,
                    value: property.deal === "rent" ? t.detail.rent : t.detail.sale,
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-surface px-3 py-3">
                    <item.icon className="h-4 w-4 text-soft" />
                    <p className="mt-2 text-[11px] text-soft">{item.label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-ink">{item.value}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-muted">{copy?.desc}</p>

              <div className="mt-6">
                <h2 className="text-sm font-semibold text-ink">{t.detail.features}</h2>
                <ul className="mt-3 space-y-2">
                  {t.detail.featureList.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-steel" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={pathFor(lang, "contact")}
                onClick={() => setSent(true)}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] sm:w-auto"
              >
                {sent ? t.contact.sent : t.detail.cta}
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
