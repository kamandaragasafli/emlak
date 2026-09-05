import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
  Eye,
  FileCheck,
  Handshake,
  Quote,
} from "lucide-react";
import { useLang } from "../LangContext";
import { SearchSelect, Reveal, pathFor } from "../components/Shared";
import { PROPERTIES, PARTNERS, filterProperties } from "../data/properties";
import { formatArea, formatPrice } from "../i18n";
import Seo from "../seo/Seo";
import { SITE } from "../seo/config";

const EMPTY = { city: "any", category: "any", price: "any" };
const STEP_ICONS = [ClipboardCheck, Search, Eye, FileCheck, Handshake];

export default function HomePage() {
  const { t, lang } = useLang();
  const [draft, setDraft] = useState(EMPTY);
  const [filters, setFilters] = useState(EMPTY);
  const [openField, setOpenField] = useState(null);
  const [start, setStart] = useState(0);
  const visible = 3;

  const cityOptions = [
    { value: "any", label: t.search.anyCity },
    ...Object.entries(t.search.cities).map(([value, label]) => ({ value, label })),
  ];
  const categoryOptions = [
    { value: "any", label: t.search.anyCategory },
    ...Object.entries(t.search.categories).map(([value, label]) => ({ value, label })),
  ];
  const priceOptions = [
    { value: "any", label: t.search.anyPrice },
    ...Object.entries(t.search.prices).map(([value, label]) => ({ value, label })),
  ];

  const results = useMemo(() => filterProperties(PROPERTIES, filters), [filters]);

  useEffect(() => {
    setStart(0);
  }, [filters]);

  const onSearch = (next) => {
    setFilters(next);
    setOpenField(null);
    requestAnimationFrame(() => {
      document.getElementById("kataloq")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const resetFilters = () => {
    setDraft(EMPTY);
    setFilters(EMPTY);
  };

  const canPrev = start > 0;
  const canNext = start < Math.max(0, results.length - visible);
  const badgeLines = t.process.badge.split("\n");

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: lang,
  };

  return (
    <>
      <Seo pageKey="home" jsonLd={websiteLd} />

      {/* ---------- Hero ---------- */}
      <section className="mx-auto max-w-6xl px-5 pt-4 md:px-8 md:pt-6">
        <div className="relative isolate min-h-[440px] overflow-visible rounded-[28px] bg-steel md:min-h-[520px] md:rounded-[36px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px] md:rounded-[36px]">
            <div className="absolute inset-x-0 bottom-0 top-auto h-[38%] md:inset-y-0 md:left-[38%] md:right-0 md:h-auto md:top-0">
              <img
                src="/hero-building.jpg"
                alt={t.hero.imageAlt}
                className="h-full w-full object-cover object-center"
                width={1200}
                height={800}
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel/50 to-transparent md:bg-gradient-to-r md:from-steel/55 md:via-steel/10 md:to-transparent" />
            </div>
          </div>

          <div className="relative z-10 flex min-h-[280px] flex-col justify-center px-5 py-10 sm:px-8 md:min-h-[520px] md:max-w-[58%] md:px-12 md:py-14 lg:max-w-[62%]">
            <h1
              className="text-[32px] font-semibold leading-[1.08] tracking-tight text-white opacity-0 md:text-[46px]"
              style={{ animation: "riseIn .8s .1s cubic-bezier(.21,.61,.35,1) forwards" }}
            >
              {t.hero.titleLine1}
              <br />
              {t.hero.titleLine2}
            </h1>
            <p
              className="mt-4 max-w-[300px] text-[15px] leading-relaxed text-white/90 opacity-0"
              style={{ animation: "riseIn .8s .25s cubic-bezier(.21,.61,.35,1) forwards" }}
            >
              {t.hero.subtitle}
            </p>

            <form
              className="relative mt-7 w-full max-w-[640px] opacity-0"
              style={{ animation: "riseIn .8s .4s cubic-bezier(.21,.61,.35,1) forwards" }}
              onSubmit={(e) => {
                e.preventDefault();
                onSearch(draft);
              }}
              role="search"
              aria-label={t.search.search}
            >
              <div className="rounded-[22px] bg-white p-2 shadow-[0_12px_40px_rgba(26,29,33,0.16)] md:rounded-full md:p-1.5 md:pl-2">
                <div className="flex flex-col md:flex-row md:items-center">
                  <SearchSelect
                    label={t.search.city}
                    value={draft.city}
                    options={cityOptions}
                    onChange={(v) => setDraft((d) => ({ ...d, city: v }))}
                    open={openField === "city"}
                    onOpen={(v) => setOpenField(v ? "city" : null)}
                  />
                  <div className="mx-2 hidden h-8 w-px shrink-0 bg-mist md:block" />
                  <div className="mx-3 h-px bg-mist md:hidden" />
                  <SearchSelect
                    label={t.search.category}
                    value={draft.category}
                    options={categoryOptions}
                    onChange={(v) => setDraft((d) => ({ ...d, category: v }))}
                    open={openField === "category"}
                    onOpen={(v) => setOpenField(v ? "category" : null)}
                  />
                  <div className="mx-2 hidden h-8 w-px shrink-0 bg-mist md:block" />
                  <div className="mx-3 h-px bg-mist md:hidden" />
                  <SearchSelect
                    label={t.search.price}
                    value={draft.price}
                    options={priceOptions}
                    onChange={(v) => setDraft((d) => ({ ...d, price: v }))}
                    open={openField === "price"}
                    onOpen={(v) => setOpenField(v ? "price" : null)}
                    align="right"
                  />
                  <button
                    type="submit"
                    className="mt-2 flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-ink px-6 text-sm font-semibold text-white transition-all hover:bg-ink/90 active:scale-[0.98] md:mt-0 md:ml-1 md:h-[48px] md:rounded-full md:px-6"
                  >
                    <Search className="h-4 w-4" strokeWidth={2.25} />
                    {t.search.search}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="haqqimizda" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <h2 className="text-[32px] font-semibold tracking-tight text-ink md:text-[40px]">{t.about.title}</h2>
        </Reveal>
        <div className="mt-6 grid items-start gap-10 md:mt-8 md:grid-cols-2 md:gap-16">
          <Reveal delay={60}>
            <p className="max-w-md text-[15px] leading-relaxed text-muted">{t.about.text}</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {t.stats.map((s, i) => (
              <Reveal key={s.label} delay={80 + i * 80}>
                <p className="text-[32px] font-semibold tracking-tight text-ink md:text-[40px]">{s.value}</p>
                <p className="mt-1 text-[13px] text-soft">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={160}>
          <div className="mt-14 border-t border-mist pt-10">
            <p className="mb-6 text-sm font-semibold tracking-wide text-ink">{t.about.partnersTitle}</p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
              {PARTNERS.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center gap-2.5 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-[11px] font-bold text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.name.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="text-[15px] font-semibold tracking-tight text-ink">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- Catalog ---------- */}
      <section id="kataloq" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-10 md:px-8 md:py-14">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-[32px] font-semibold tracking-tight text-ink md:text-[40px]">
                {t.catalog.title}
              </h2>
              <p className="mt-2 max-w-sm text-[15px] text-muted">{t.catalog.subtitle}</p>
            </div>
            <p className="text-sm font-medium text-steel-deep">{t.catalog.results(results.length)}</p>
          </div>
        </Reveal>

        {results.length === 0 ? (
          <div className="mt-10 rounded-2xl bg-surface px-6 py-12 text-center">
            <p className="text-[15px] text-muted">{t.catalog.empty}</p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white"
            >
              {t.catalog.reset}
            </button>
          </div>
        ) : (
          <>
            <div className="mt-10 overflow-hidden">
              <div
                className="flex gap-5 transition-transform duration-500 ease-out md:gap-6"
                style={{
                  transform:
                    results.length > visible
                      ? `translateX(calc(-${start} * (100% / 3 + 1.25rem)))`
                      : "none",
                }}
              >
                {results.map((p, i) => {
                  const copy = t.properties[p.id];
                  return (
                    <div
                      key={p.id}
                      className="w-[78%] shrink-0 sm:w-[45%] md:w-[calc((100%-3rem)/3)]"
                    >
                      <Reveal delay={i * 50}>
                        <Link
                          to={pathFor(lang, "property", p.id)}
                          className="group block w-full text-left"
                        >
                          <article>
                            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-mist">
                              <img
                                src={p.img}
                                alt={copy?.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                loading="lazy"
                                width={600}
                                height={800}
                              />
                            </div>
                            <h3 className="mt-4 text-[16px] font-medium text-ink">{copy?.title}</h3>
                            <p className="mt-1 text-[13px] text-soft">
                              {formatArea(p.area)} — {formatPrice(p.price, p.deal, t)}
                            </p>
                            <p className="mt-2 text-[13px] font-semibold text-ink opacity-0 transition-opacity group-hover:opacity-100">
                              {t.catalog.view} →
                            </p>
                          </article>
                        </Link>
                      </Reveal>
                    </div>
                  );
                })}
              </div>
            </div>

            {results.length > visible && (
              <div className="mt-8 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => canPrev && setStart((s) => s - 1)}
                  disabled={!canPrev}
                  className={`flex h-11 w-11 items-center justify-center rounded-full transition-all ${
                    canPrev
                      ? "bg-ink text-white hover:scale-105"
                      : "cursor-not-allowed bg-mist text-[#c5ccd4]"
                  }`}
                  aria-label={t.catalog.prev}
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => canNext && setStart((s) => s + 1)}
                  disabled={!canNext}
                  className={`flex h-11 w-11 items-center justify-center rounded-full transition-all ${
                    canNext
                      ? "bg-ink text-white hover:scale-105"
                      : "cursor-not-allowed bg-mist text-[#c5ccd4]"
                  }`}
                  aria-label={t.catalog.next}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}

            <div className="mt-8 text-center">
              <Link
                to={pathFor(lang, "catalog")}
                className="text-sm font-semibold text-ink underline-offset-4 hover:underline"
              >
                {t.catalog.view} →
              </Link>
            </div>
          </>
        )}
      </section>

      {/* ---------- Process ---------- */}
      <section id="proses" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <h2 className="text-[32px] font-semibold tracking-tight text-ink md:text-[40px]">
            {t.process.title}
          </h2>
          <p className="mt-2 max-w-xs text-[15px] text-muted">{t.process.subtitle}</p>
        </Reveal>

        <div className="mt-10 grid items-start gap-12 md:mt-12 md:grid-cols-2 md:gap-16">
          <Reveal delay={80} className="relative">
            <div className="overflow-hidden rounded-2xl md:rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
                alt={t.process.imageAlt}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                width={900}
                height={1125}
              />
            </div>
            <div className="absolute -top-3 right-4 flex h-[104px] w-[104px] items-center justify-center rounded-full border-[5px] border-white bg-steel text-center shadow-sm md:right-8 md:-top-5">
              <span className="px-3 text-[12px] font-semibold leading-snug text-white">
                {badgeLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < badgeLines.length - 1 && <br />}
                  </span>
                ))}
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {t.process.steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <Reveal key={step.title} delay={i * 70}>
                  <div
                    className={`group flex gap-4 py-5 ${
                      i < t.process.steps.length - 1 ? "border-b border-mist" : ""
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                    </div>
                    <div className="pt-0.5">
                      <p className="font-medium text-ink">{step.title}</p>
                      <p className="mt-1 max-w-sm text-[14px] leading-relaxed text-muted">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Reviews ---------- */}
      <section id="reyler" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-10 md:px-8 md:py-16">
        <Reveal>
          <h2 className="mb-8 text-[32px] font-semibold tracking-tight text-ink md:text-[40px]">
            {t.reviews.title}
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {t.reviews.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <blockquote className="flex h-full flex-col rounded-2xl bg-surface p-6 md:p-7">
                <Quote className="mb-3 h-7 w-7 text-[#d5dbe3]" strokeWidth={1.5} />
                <p className="flex-1 text-[14px] leading-relaxed text-muted">{item.quote}</p>
                <footer className="mt-6 flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-11 w-11 rounded-full object-cover"
                    loading="lazy"
                    width={44}
                    height={44}
                  />
                  <div>
                    <cite className="not-italic text-sm font-medium text-ink">{item.name}</cite>
                    <p className="text-xs text-soft">{item.role}</p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
