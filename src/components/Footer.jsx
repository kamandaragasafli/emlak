import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";
import { useLang } from "../LangContext";
import { Brand, IconInstagram, IconFacebook, IconLinkedin, pathFor } from "./Shared";
import { Reveal } from "./Shared";
import { useState } from "react";

export function Footer({ compact = false }) {
  const { t, lang } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <footer id="elaqe" className="mt-10 scroll-mt-24 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        {!compact && (
          <Reveal>
            <div className="grid items-start gap-10 border-b border-white/10 pb-12 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="text-[32px] font-semibold leading-tight tracking-tight text-white md:text-[40px]">
                  {t.contact.titleLine1}
                  <br />
                  {t.contact.titleLine2}
                </h2>
                <p className="mt-4 max-w-sm text-[15px] text-white/45">{t.contact.subtitle}</p>
              </div>

              <form
                className="flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <input
                  required
                  type="text"
                  name="name"
                  placeholder={t.contact.name}
                  className="rounded-full border border-white/12 bg-white/5 px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/35 transition-colors focus:border-white/35"
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder={t.contact.phone}
                  className="rounded-full border border-white/12 bg-white/5 px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/35 transition-colors focus:border-white/35"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder={t.contact.email}
                  className="rounded-full border border-white/12 bg-white/5 px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/35 transition-colors focus:border-white/35"
                />
                <button
                  type="submit"
                  className="mt-1 rounded-full bg-white py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {sent ? t.contact.sent : t.contact.submit}
                </button>
              </form>
            </div>
          </Reveal>
        )}

        <div className={`grid gap-8 text-sm sm:grid-cols-3 ${compact ? "" : "pt-10"}`}>
          <Link to={pathFor(lang, "home")}>
            <Brand invert />
          </Link>
          <div className="space-y-2.5 text-white/45">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +994 12 345 67 89
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> info@emlak.az
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {t.contact.address}
            </p>
          </div>
          <div className="flex items-start gap-3 sm:justify-end">
            {[IconInstagram, IconFacebook, IconLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/50 transition-colors hover:border-white/35 hover:text-white"
                aria-label={t.contact.social}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-10 text-xs text-white/25">{t.contact.copyright}</p>
      </div>
    </footer>
  );
}

export function ContactFormOnly() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  return (
    <form
      className="mx-auto flex max-w-md flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input
        required
        type="text"
        name="name"
        placeholder={t.contact.name}
        className="rounded-full border border-mist bg-white px-5 py-3.5 text-sm text-ink outline-none focus:border-steel"
      />
      <input
        required
        type="tel"
        name="phone"
        placeholder={t.contact.phone}
        className="rounded-full border border-mist bg-white px-5 py-3.5 text-sm text-ink outline-none focus:border-steel"
      />
      <input
        required
        type="email"
        name="email"
        placeholder={t.contact.email}
        className="rounded-full border border-mist bg-white px-5 py-3.5 text-sm text-ink outline-none focus:border-steel"
      />
      <button
        type="submit"
        className="rounded-full bg-ink py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
      >
        {sent ? t.contact.sent : t.contact.submit}
      </button>
    </form>
  );
}
