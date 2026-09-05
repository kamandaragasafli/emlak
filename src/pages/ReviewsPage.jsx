import { Quote } from "lucide-react";
import { useLang } from "../LangContext";
import { Reveal } from "../components/Shared";
import Seo from "../seo/Seo";

export default function ReviewsPage() {
  const { t } = useLang();
  return (
    <>
      <Seo pageKey="reviews" />
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <h1 className="mb-8 text-[32px] font-semibold tracking-tight text-ink md:text-[40px]">
            {t.reviews.title}
          </h1>
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
