import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "en" | "sl";
export type Copy = Record<Locale, string>;

type LocaleValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("gel.locale");
    if (saved === "en" || saved === "sl") setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "sl" ? "sl" : "en";
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("gel.locale", next);
  };

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("LocaleProvider is missing");
  return value;
}

export function useT() {
  const { locale } = useLocale();
  return (copy: Copy) => copy[locale];
}
