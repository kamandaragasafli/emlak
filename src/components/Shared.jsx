import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X, ChevronDown, Check } from "lucide-react";
import { useLang } from "../LangContext";
import { LANGS } from "../i18n";
import { LANG_CODES, pathFor, ROUTES } from "../seo/config";

/* ---------- logo ---------- */
export function LogoMark({ className = "text-ink", size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="currentColor" className={className} aria-hidden>
      <rect x="2" y="12" width="6" height="14" rx="1.2" />
      <rect x="11" y="4" width="6" height="22" rx="1.2" />
      <rect x="20" y="9" width="6" height="17" rx="1.2" />
    </svg>
  );
}

export function Brand({ invert = false }) {
  const { t } = useLang();
  return (
    <div className="flex items-center gap-3">
      <LogoMark className={invert ? "text-white" : "text-ink"} />
      <div>
        <p className={`font-semibold leading-tight tracking-tight ${invert ? "text-white" : "text-ink"}`}>
          Əmlak
        </p>
        <p className={`text-[11px] leading-tight ${invert ? "text-white/50" : "text-soft"}`}>
          {t.brandSubtitle}
        </p>
      </div>
    </div>
  );
}

/* ---------- flags ---------- */
function FlagAZ({ className = "h-4 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 36 24" aria-hidden>
      <rect width="36" height="8" fill="#00B5E2" />
      <rect y="8" width="36" height="8" fill="#EF3340" />
      <rect y="16" width="36" height="8" fill="#509E2F" />
      <circle cx="14.5" cy="12" r="3.4" fill="#fff" />
      <circle cx="15.8" cy="12" r="2.7" fill="#EF3340" />
      <polygon
        fill="#fff"
        points="20.8,12 21.5,14.2 23.8,14.2 21.95,15.55 22.65,17.7 20.8,16.35 18.95,17.7 19.65,15.55 17.8,14.2 20.1,14.2"
        transform="translate(0.3 -2.8) scale(0.72) translate(8.5 8)"
      />
    </svg>
  );
}

function FlagRU({ className = "h-4 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 36 24" aria-hidden>
      <rect width="36" height="8" fill="#fff" />
      <rect y="8" width="36" height="8" fill="#0039A6" />
      <rect y="16" width="36" height="8" fill="#D52B1E" />
    </svg>
  );
}

function FlagEN({ className = "h-4 w-6" }) {
  return (
    <svg className={className} viewBox="0 0 36 24" aria-hidden>
      <rect width="36" height="24" fill="#012169" />
      <path d="M0 0l36 24M36 0L0 24" stroke="#fff" strokeWidth="5" />
      <path d="M0 0l36 24M36 0L0 24" stroke="#C8102E" strokeWidth="2.5" />
      <path d="M18 0v24M0 12h36" stroke="#fff" strokeWidth="8" />
      <path d="M18 0v24M0 12h36" stroke="#C8102E" strokeWidth="4.5" />
    </svg>
  );
}

const FLAGS = { az: FlagAZ, ru: FlagRU, en: FlagEN };

export function LangSwitcher() {
  const { lang, setLang } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const ActiveFlag = FLAGS[lang];

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const switchLang = (code) => {
    setLang(code);
    setOpen(false);
    const parts = location.pathname.split("/").filter(Boolean);
    if (LANG_CODES.includes(parts[0])) {
      parts[0] = code;
      const next = "/" + parts.join("/");
      navigate(next + location.search);
    } else {
      navigate(`/${code}`);
    }
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 items-center gap-2 rounded-full border border-mist bg-white px-3 transition-colors hover:border-steel"
        aria-label="Language"
        aria-expanded={open}
      >
        <ActiveFlag className="h-3.5 w-5 overflow-hidden rounded-[2px] shadow-sm" />
        <span className="text-[12px] font-semibold tracking-wide text-ink">{lang.toUpperCase()}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[158px] overflow-hidden rounded-xl border border-mist bg-white py-1 shadow-lg shadow-ink/10">
          {LANGS.map((l) => {
            const Flag = FLAGS[l.code];
            const active = l.code === lang;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => switchLang(l.code)}
                className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-sm transition-colors ${
                  active ? "bg-surface text-ink" : "text-muted hover:bg-surface hover:text-ink"
                }`}
              >
                <Flag className="h-3.5 w-5 shrink-0 overflow-hidden rounded-[2px] shadow-sm" />
                <span className="font-medium">{l.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ---------- reveal ---------- */
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(.21,.61,.35,1) ${delay}ms, transform 0.7s cubic-bezier(.21,.61,.35,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

/* ---------- search select ---------- */
export function SearchSelect({ label, value, options, onChange, open, onOpen, align = "left" }) {
  const ref = useRef(null);
  const selected = options.find((o) => o.value === value) || options[0];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") onOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onOpen]);

  return (
    <div className="relative min-w-0 flex-1" ref={ref}>
      <button
        type="button"
        onClick={() => onOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center gap-2 rounded-2xl px-3.5 py-2.5 text-left transition-colors md:rounded-full ${
          open ? "bg-surface" : "hover:bg-surface/80"
        }`}
      >
        <span className="min-w-0 flex-1">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-soft">
            {label}
          </span>
          <span className="mt-0.5 block truncate text-[14px] font-semibold leading-tight text-ink">
            {selected?.label}
          </span>
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-soft transition-transform duration-200 ${
            open ? "rotate-180 text-ink" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className={`absolute top-[calc(100%+10px)] z-40 max-h-60 w-[min(100%,240px)] min-w-[200px] overflow-auto rounded-2xl border border-mist bg-white py-1.5 shadow-xl shadow-ink/12 ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {options.map((opt) => {
            const active = opt.value === value;
            return (
              <li key={opt.value} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    onOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left text-[14px] transition-colors ${
                    active
                      ? "bg-surface font-semibold text-ink"
                      : "font-medium text-muted hover:bg-mist hover:text-ink"
                  }`}
                >
                  <span className="truncate">{opt.label}</span>
                  {active && <Check className="h-4 w-4 shrink-0 text-ink" strokeWidth={2.25} />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ---------- header ---------- */
export function Header() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const nav = [
    { label: t.nav.about, to: `${pathFor(lang, "home")}#haqqimizda` },
    { label: t.nav.catalog, to: `${pathFor(lang, "home")}#kataloq` },
    { label: t.nav.process, to: `${pathFor(lang, "home")}#proses` },
    { label: t.nav.reviews, to: `${pathFor(lang, "home")}#reyler` },
    { label: t.nav.contact, to: `${pathFor(lang, "home")}#elaqe` },
  ];

  const linkClass = (to) => {
    const hash = to.includes("#") ? to.split("#")[1] : "";
    const onHome =
      location.pathname.replace(/\/$/, "") === pathFor(lang, "home").replace(/\/$/, "");
    const active = onHome && hash && location.hash === `#${hash}`;
    return `text-[14px] transition-colors ${active ? "font-semibold text-ink" : "text-muted hover:text-ink"}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link to={pathFor(lang, "home")} aria-label={t.homeAria}>
          <Brand />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass(l.to)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitcher />
          <button
            className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={t.menu}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden border-t border-mist transition-all duration-300 lg:hidden"
        style={{ maxHeight: open ? "320px" : "0px" }}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {nav.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm text-muted hover:bg-surface hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

/* social icons */
export function IconInstagram({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

export function IconLinkedin({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.5 8.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM5 10h3v9H5v-9zm5 0h2.9v1.2h.1c.4-.7 1.4-1.4 2.9-1.4 3.1 0 3.7 2 3.7 4.7V19h-3v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V19h-3v-9z" />
    </svg>
  );
}

export { ROUTES, pathFor };
