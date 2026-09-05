import { useEffect } from "react";
import { Outlet, useParams, Navigate, useLocation } from "react-router-dom";
import { Header } from "./Shared";
import { Footer } from "./Footer";
import { useLang } from "../LangContext";
import { LANG_CODES } from "../seo/config";

export default function Layout() {
  const { lang: paramLang } = useParams();
  const { lang, setLang } = useLang();
  const location = useLocation();
  const isContact = location.pathname.includes("/elaqe");

  useEffect(() => {
    if (paramLang && LANG_CODES.includes(paramLang) && paramLang !== lang) {
      setLang(paramLang);
    }
  }, [paramLang, lang, setLang]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  if (paramLang && !LANG_CODES.includes(paramLang)) {
    return <Navigate to="/az" replace />;
  }

  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer compact={isContact} />
    </div>
  );
}
