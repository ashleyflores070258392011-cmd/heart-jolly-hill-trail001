import { useState } from "react";
import { Link, useRouterState, type LinkProps } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { countries } from "@/lib/catalog";
import { useLocale, useT, type Copy } from "@/lib/locale";
import { cn } from "@/lib/cn";

export const btn =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-50";

export const btnAccent = cn(btn, "bg-accent text-ink hover:bg-accent-deep");
export const btnPrimary = cn(btn, "bg-primary text-paper hover:bg-primary-deep");
export const btnLine = cn(btn, "border border-line bg-paper text-ink hover:bg-bg");
export const btnGhost = cn(btn, "border border-mist/40 text-paper hover:bg-paper/10");

export const fieldClass =
  "min-h-11 w-full rounded-xl border border-line bg-paper px-3 text-base font-normal text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";

const quoteSearch = { from: "SI", to: "DE", kg: 12, mode: "freight" };
const trackSearch = { id: "" };
const contactSearch = { service: "", note: "" };
const servicesSearch = { service: "freight" };

const nav: { to: LinkProps["to"]; label: Copy; search?: LinkProps["search"] }[] = [
  { to: "/services", label: { en: "Services", sl: "Storitve" }, search: servicesSearch },
  { to: "/network", label: { en: "Network", sl: "Mreža" } },
  { to: "/quote", label: { en: "Quote", sl: "Ponudba" }, search: quoteSearch },
  { to: "/track", label: { en: "Track", sl: "Sledenje" }, search: trackSearch },
  { to: "/contact", label: { en: "Contact", sl: "Kontakt" }, search: contactSearch },
];

function LocaleSwitch() {
  const { locale, setLocale } = useLocale();
  const t = useT();
  return (
    <div className="flex rounded-full border border-mist/30 p-1" role="group" aria-label={t({ en: "Language", sl: "Jezik" })}>
      {(["en", "sl"] as const).map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={locale === code}
          onClick={() => setLocale(code)}
          className={cn(
            "min-h-9 min-w-11 rounded-full px-2 text-xs font-semibold uppercase tracking-wide",
            locale === code ? "bg-accent text-ink" : "text-mist hover:text-paper",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const t = useT();
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ink text-paper">
      <div className="h-1 bg-accent" />
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.jpg"
            alt="Global Express Logistics"
            className="h-14 w-14 rounded-lg object-cover sm:h-16 sm:w-16"
          />
          <span className="hidden leading-none sm:block">
            <span className="block font-display text-2xl uppercase tracking-wide">Global Express</span>
            <span className="block font-display text-sm uppercase tracking-widest text-accent">Logistics</span>
          </span>
        </Link>
        <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label={t({ en: "Primary", sl: "Glavni meni" })}>
          {nav.map((item) => {
            const on = path === item.to;
            return (
              <Link
                key={String(item.to)}
                to={item.to}
                search={item.search}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium",
                  on ? "bg-paper/10 text-paper" : "text-mist hover:text-paper",
                )}
              >
                {t(item.label)}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <LocaleSwitch />
          <Link to="/quote" search={quoteSearch} className={cn(btnAccent, "hidden sm:inline-flex")}>
            {t({ en: "Get a quote", sl: "Pridobi ponudbo" })}
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-mist/30 lg:hidden"
            aria-expanded={open}
            aria-label={open ? t({ en: "Close menu", sl: "Zapri meni" }) : t({ en: "Open menu", sl: "Odpri meni" })}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-mist/20 px-4 py-3 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1" aria-label={t({ en: "Mobile", sl: "Mobilni meni" })}>
            {nav.map((item) => (
              <Link
                key={String(item.to)}
                to={item.to}
                search={item.search}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-paper hover:bg-paper/10"
              >
                {t(item.label)}
              </Link>
            ))}
            <Link to="/quote" search={quoteSearch} onClick={() => setOpen(false)} className={cn(btnAccent, "mt-2")}>
              {t({ en: "Get a quote", sl: "Pridobi ponudbo" })}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  const t = useT();
  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <img src="/images/logo.jpg" alt="" className="h-16 w-16 rounded-lg object-cover" />
          <p className="mt-4 max-w-xs text-sm text-mist">
            {t({
              en: "Fast, reliable, worldwide — with the European hub in Ljubljana and the sea gate at Koper.",
              sl: "Hitro, zanesljivo, po vsem svetu — z evropskim vozliščem v Ljubljani in morskimi vrati v Kopru.",
            })}
          </p>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-accent">
            {t({ en: "The board", sl: "Plošča" })}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={String(item.to)}>
                <Link to={item.to} search={item.search} className="text-mist hover:text-paper">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-accent">
            {t({ en: "Gates", sl: "Vrata" })}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-mist">
            <li>{t({ en: "European hub, Ljubljana", sl: "Evropsko vozlišče, Ljubljana" })}</li>
            <li>{t({ en: "Sea gate, Port of Koper", sl: "Morska vrata, Luka Koper" })}</li>
            <li>{t({ en: "Air gate, Ljubljana Airport (LJU)", sl: "Letalska vrata, Letališče Ljubljana (LJU)" })}</li>
            <li>{t({ en: "Desk 07:00–19:00 CET, Mon–Sat", sl: "Miza 07.00–19.00, pon–sob" })}</li>
            <li>
              {countries.length} {t({ en: "countries on the board", sl: "držav na plošči" })}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-mist/20">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-mist">
          {t({
            en: "Global Express Logistics · Fast · Reliable · Worldwide. Quote and tracking samples on this site stay in your browser.",
            sl: "Global Express Logistics · Hitro · Zanesljivo · Po vsem svetu. Vzorci ponudb in sledenja ostanejo v vašem brskalniku.",
          })}
        </p>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const t = useT();
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        {t({ en: "Skip to content", sl: "Preskoči na vsebino" })}
      </a>
      <Header />
      <main id="content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function PageIntro({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <p className="font-display text-sm uppercase tracking-widest text-accent">{kicker}</p>
        <h1 className="mt-2 max-w-3xl font-display text-5xl uppercase leading-none md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-mist">{lede}</p>
      </div>
    </section>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-ink">
      {label}
      {children}
      {hint ? <span className="text-xs font-normal text-muted">{hint}</span> : null}
    </label>
  );
}
