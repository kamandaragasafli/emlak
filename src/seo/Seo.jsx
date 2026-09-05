import { Helmet } from "react-helmet-async";
import { SITE, absoluteUrl, LANG_CODES, PAGE_SEO } from "./config";
import { useLang } from "../LangContext";

/**
 * Full document head for SEO: title, description, canonical, OG, Twitter, hreflang, JSON-LD.
 */
export default function Seo({
  pageKey,
  title: titleOverride,
  description: descriptionOverride,
  path: pathOverride,
  image,
  type = "website",
  noindex = false,
  jsonLd,
}) {
  const { lang } = useLang();
  const page = pageKey ? PAGE_SEO[lang]?.[pageKey] : null;

  const title = titleOverride || page?.title || SITE.name;
  const description = descriptionOverride || page?.description || "";
  const slug = pathOverride ?? page?.path ?? "";
  const path = `/${lang}/${slug}`.replace(/\/+/g, "/").replace(/\/$/, "") || `/${lang}`;
  const canonical = absoluteUrl(
    path === `/${lang}` || path === `/${lang}/` ? `/${lang}` : path.replace(/\/$/, "")
  );
  const ogImage = absoluteUrl(image || SITE.defaultImage);

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl("/favicon.svg"),
    telephone: "+994123456789",
    email: "info@emlak.az",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Baku",
      addressCountry: "AZ",
    },
    areaServed: ["AZ"],
    availableLanguage: ["az", "ru", "en"],
  };

  const schemas = [orgLd, ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [])];

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />
      <link rel="canonical" href={canonical} />

      {LANG_CODES.map((code) => {
        const altPath = `/${code}/${slug}`.replace(/\/+/g, "/").replace(/\/$/, "") || `/${code}`;
        const href = absoluteUrl(
          altPath === `/${code}` ? `/${code}/` : altPath
        );
        return <link key={code} rel="alternate" hrefLang={code} href={href} />;
      })}
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl("/az/")} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={SITE.locale[lang]} />
      {LANG_CODES.filter((c) => c !== lang).map((c) => (
        <meta key={c} property="og:locale:alternate" content={SITE.locale[c]} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  );
}
