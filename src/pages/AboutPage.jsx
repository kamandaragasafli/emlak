import { PARTNERS } from "../data/properties";
import { useLang } from "../LangContext";
import { Reveal } from "../components/Shared";
import Seo from "../seo/Seo";

export default function AboutPage() {
  const { t } = useLang();
  return (
    <>
      <Seo pageKey="about" />
      <article className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <h1 className="text-[32px] font-semibold tracking-tight text-ink md:text-[40px]">
            {t.about.title}
          </h1>
        </Reveal>
        <div className="mt-8 grid items-start gap-10 md:grid-cols-2 md:gap-16">
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
            <h2 className="mb-6 text-sm font-semibold tracking-wide text-ink">{t.about.partnersTitle}</h2>
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
      </article>
    </>
  );
}
