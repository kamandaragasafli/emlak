import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "../LangContext";
import { Reveal, SearchSelect, pathFor } from "../components/Shared";
import { PROPERTIES, filterProperties } from "../data/properties";
import { formatArea, formatPrice } from "../i18n";
import Seo from "../seo/Seo";
import { Search } from "lucide-react";

const EMPTY = { city: "any", category: "any", price: "any" };

export default function CatalogPage() {
  const { t, lang } = useLang();
  const [params, setParams] = useSearchParams();
  const [draft, setDraft] = useState(() => ({
    city: params.get("city") || "any",
    category: params.get("category") || "any",
    price: params.get("price") || "any",
  }));
  const [filters, setFilters] = useState(draft);
  const [openField, setOpenField] = useState(null);
  const [start, setStart] = useState(0);
  const visible = 3;

  useEffect(() => {
    const next = {
      city: params.get("city") || "any",
      category: params.get("category") || "any",
      price: params.get("price") || "any",
    };
    setDraft(next);
    setFilters(next);
  }, [params]);

  const results = useMemo(() => filterProperties(PROPERTIES, filters), [filters]);

  useEffect(() => {
    setStart(0);
  }, [filters]);

  const apply = (next) => {
    setFilters(next);
    const q = new URLSearchParams();
    if (next.city !== "any") q.set("city", next.city);
    if (next.category !== "any") q.set("category", next.category);
    if (next.price !== "any") q.set("price", next.price);
    setParams(q, { replace: true });
  };

  const reset = () => {
    setDraft(EMPTY);
    apply(EMPTY);
  };

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

  const canPrev = start > 0;
  const canNext = start < Math.max(0, results.length - visible);

  return (
    <>
      <Seo pageKey="catalog" />
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        <Reveal>
          <h1 className="text-[32px] font-semibold tracking-tight text-ink md:text-[40px]">
            {t.catalog.title}
          </h1>
          <p className="mt-2 max-w-sm text-[15px] text-muted">{t.catalog.subtitle}</p>
        </Reveal>

        <form
          className="mt-8"
          onSubmit={(e) => {
            e.preventDefault();
            setOpenField(null);
            apply(draft);
          }}
          role="search"
        >
          <div className="rounded-[22px] border border-mist bg-white p-2 shadow-sm md:rounded-full md:p-1.5">
            <div className="flex flex-col md:flex-row md:items-center">
              <SearchSelect
                label={t.search.city}
                value={draft.city}
                options={cityOptions}
                onChange={(v) => setDraft((d) => ({ ...d, city: v }))}
                open={openField === "city"}
                onOpen={(v) => setOpenField(v ? "city" : null)}
              />
              <div className="mx-2 hidden h-8 w-px bg-mist md:block" />
              <SearchSelect
                label={t.search.category}
                value={draft.category}
                options={categoryOptions}
                onChange={(v) => setDraft((d) => ({ ...d, category: v }))}
                open={openField === "category"}
                onOpen={(v) => setOpenField(v ? "category" : null)}
              />
              <div className="mx-2 hidden h-8 w-px bg-mist md:block" />
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
                className="mt-2 flex h-12 items-center justify-center gap-2 rounded-xl bg-ink px-6 text-sm font-semibold text-white md:mt-0 md:ml-1 md:h-[48px] md:rounded-full"
              >
                <Search className="h-4 w-4" />
                {t.search.search}
              </button>
            </div>
          </div>
        </form>

        <p className="mt-6 text-sm font-medium text-steel-deep">{t.catalog.results(results.length)}</p>

        {results.length === 0 ? (
          <div className="mt-10 rounded-2xl bg-surface px-6 py-12 text-center">
            <p className="text-[15px] text-muted">{t.catalog.empty}</p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white"
            >
              {t.catalog.reset}
            </button>
          </div>
        ) : (
          <>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((p, i) => {
                const copy = t.properties[p.id];
                return (
                  <Reveal key={p.id} delay={i * 50}>
                    <Link
                      to={pathFor(lang, "property", p.id)}
                      className="group block text-left"
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
                        <h2 className="mt-4 text-[16px] font-medium text-ink">{copy?.title}</h2>
                        <p className="mt-1 text-[13px] text-soft">
                          {formatArea(p.area)} — {formatPrice(p.price, p.deal, t)}
                        </p>
                        <p className="mt-2 text-[13px] font-semibold text-ink opacity-0 transition-opacity group-hover:opacity-100">
                          {t.catalog.view} →
                        </p>
                      </article>
                    </Link>
                  </Reveal>
                );
              })}
            </div>

            {results.length > 6 && (
              <div className="mt-8 flex justify-end gap-3">
                <button
                  onClick={() => canPrev && setStart((s) => s - 1)}
                  disabled={!canPrev}
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${
                    canPrev ? "bg-ink text-white" : "bg-mist text-[#c5ccd4]"
                  }`}
                  aria-label={t.catalog.prev}
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => canNext && setStart((s) => s + 1)}
                  disabled={!canNext}
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${
                    canNext ? "bg-ink text-white" : "bg-mist text-[#c5ccd4]"
                  }`}
                  aria-label={t.catalog.next}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
