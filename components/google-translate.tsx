"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            layout?: number;
            autoDisplay?: boolean;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

/**
 * Loads Google Translate script (hidden). Does NOT render any visible UI.
 * The visible dropdown is handled by the LangSwitcher in site-header.
 * We only use Google Translate programmatically for ES and ZH.
 */
export function GoogleTranslateLoader() {
  useEffect(() => {
    if (document.getElementById("gt-script")) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "es,zh-CN",
          layout: 0, // SIMPLE — we hide it anyway
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "gt-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <style>{`
        /* Hide Google Translate banner & widget — we control it programmatically */
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        body { top: 0 !important; }
        #google_translate_element { position: absolute; opacity: 0; pointer-events: none; height: 0; overflow: hidden; }
        .goog-logo-link, .goog-te-gadget > div:last-child { display: none !important; }
      `}</style>
      <div id="google_translate_element" />
    </>
  );
}

/**
 * Programmatically sets Google Translate to a language, or resets it.
 * @param langCode - "es" | "zh-CN" | "" (empty = reset to original)
 */
export function setGoogleTranslateLanguage(langCode: string) {
  const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event("change"));
  }
}

/**
 * Resets Google Translate back to the original page language.
 */
export function resetGoogleTranslate() {
  // Setting to empty string restores original
  setGoogleTranslateLanguage("");

  // Also clear the Google Translate cookie to fully reset
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + window.location.hostname;
}
