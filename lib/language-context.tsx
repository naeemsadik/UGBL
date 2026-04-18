"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { dictionaries, type Locale, type TranslationKey } from "./translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ugbl-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("EN");

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && stored in dictionaries) {
        setLocaleState(stored);
      }
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // ignore
    }
    // Update the html lang attribute
    document.documentElement.lang = newLocale.toLowerCase();
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return dictionaries[locale][key] ?? dictionaries.EN[key] ?? key;
    },
    [locale]
  );

  return (
    <LanguageContext value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
