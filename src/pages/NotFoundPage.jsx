import { Link } from "react-router-dom";
import { useLang } from "../LangContext";
import { pathFor } from "../components/Shared";
import Seo from "../seo/Seo";

export default function NotFoundPage() {
  const { t, lang } = useLang();
  return (
    <>
      <Seo pageKey="notFound" noindex />
      <div className="mx-auto flex min-h-[50vh] max-w-6xl flex-col items-center justify-center px-5 py-20 text-center">
        <p className="text-6xl font-semibold text-steel">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-ink">
          {lang === "ru" ? "Страница не найдена" : lang === "en" ? "Page not found" : "Səhifə tapılmadı"}
        </h1>
        <Link
          to={pathFor(lang, "home")}
          className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
        >
          {lang === "ru" ? "На главную" : lang === "en" ? "Go home" : "Ana səhifə"}
        </Link>
      </div>
    </>
  );
}
