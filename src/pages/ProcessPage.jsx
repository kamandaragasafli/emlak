import { ClipboardCheck, Search, Eye, FileCheck, Handshake } from "lucide-react";
import { useLang } from "../LangContext";
import { Reveal } from "../components/Shared";
import Seo from "../seo/Seo";

const ICONS = [ClipboardCheck, Search, Eye, FileCheck, Handshake];

export default function ProcessPage() {
  const { t } = useLang();
  const badgeLines = t.process.badge.split("\n");

  return (
    <>
      <Seo pageKey="process" />
      <article className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <h1 className="text-[32px] font-semibold tracking-tight text-ink md:text-[40px]">
            {t.process.title}
          </h1>
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

          <ol className="flex flex-col">
            {t.process.steps.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={step.title} delay={i * 70} as="li">
                  <div
                    className={`group flex gap-4 py-5 ${
                      i < t.process.steps.length - 1 ? "border-b border-mist" : ""
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                    </div>
                    <div className="pt-0.5">
                      <h2 className="font-medium text-ink">{step.title}</h2>
                      <p className="mt-1 max-w-sm text-[14px] leading-relaxed text-muted">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </article>
    </>
  );
}
