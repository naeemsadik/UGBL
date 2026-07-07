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
  tImage: (key: string, defaultImage: any) => any;
  reloadOverrides: () => Promise<void>;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ugbl-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("EN");
  const [overrides, setOverrides] = useState<Record<string, string>>({});

  const loadOverrides = useCallback(async (currentLocale: Locale) => {
    try {
      const res = await fetch(`/api/content?locale=${currentLocale}`);
      if (res.ok) {
        const data = await res.json();
        setOverrides(data);
      }
    } catch (err) {
      console.error("Failed to load content overrides:", err);
    }
  }, []);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && stored in dictionaries && stored !== locale) {
        setLocaleState(stored);
        document.documentElement.lang = stored.toLowerCase();
        loadOverrides(stored);
      } else {
        loadOverrides(locale);
      }
    } catch {
      loadOverrides(locale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    loadOverrides(newLocale);
  }, [loadOverrides]);

  const t = useCallback(
    (key: TranslationKey): string => {
      if (overrides && overrides[key]) {
        return overrides[key];
      }
      return dictionaries[locale][key] ?? dictionaries.EN[key] ?? key;
    },
    [locale, overrides]
  );

  const tImage = useCallback(
    (key: string, defaultImage: any): any => {
      if (overrides && overrides[key]) {
        return overrides[key];
      }
      return defaultImage;
    },
    [overrides]
  );

  const reloadOverrides = useCallback(async () => {
    await loadOverrides(locale);
  }, [locale, loadOverrides]);

  return (
    <LanguageContext value={{ locale, setLocale, t, tImage, reloadOverrides }}>
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

