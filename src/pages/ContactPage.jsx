import { Phone, MapPin, Mail } from "lucide-react";
import { useLang } from "../LangContext";
import { Reveal } from "../components/Shared";
import { ContactFormOnly } from "../components/Footer";
import Seo from "../seo/Seo";
import { SITE, absoluteUrl } from "../seo/config";

export default function ContactPage() {
  const { t, lang } = useLang();

  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `${t.contact.titleLine1} ${t.contact.titleLine2}`,
    url: absoluteUrl(`/${lang}/elaqe`),
    mainEntity: {
      "@type": "RealEstateAgent",
      name: SITE.name,
      telephone: "+994123456789",
      email: "info@emlak.az",
    },
  };

  return (
    <>
      <Seo pageKey="contact" jsonLd={contactLd} />
      <article className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <h1 className="text-[32px] font-semibold tracking-tight text-ink md:text-[40px]">
            {t.contact.titleLine1} {t.contact.titleLine2}
          </h1>
          <p className="mt-3 max-w-md text-[15px] text-muted">{t.contact.subtitle}</p>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <Reveal delay={60}>
            <ContactFormOnly />
          </Reveal>
          <Reveal delay={100}>
            <address className="not-italic space-y-4 text-[15px] text-muted">
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-ink" />
                <a href="tel:+994123456789" className="hover:text-ink">
                  +994 12 345 67 89
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-ink" />
                <a href="mailto:info@emlak.az" className="hover:text-ink">
                  info@emlak.az
                </a>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-ink" />
                {t.contact.address}
              </p>
            </address>
          </Reveal>
        </div>
      </article>
    </>
  );
}
