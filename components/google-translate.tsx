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

export function GoogleTranslate() {
  useEffect(() => {
    // If already initialized, skip
    if (document.getElementById("gt-script")) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,bn,es,zh-CN",
          layout: 1,
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

    // Google Translate dynamically injects the dropdown.
    // We poll until it exists, then change the default "Select Language" text to "English".
    const checkAndChangeText = setInterval(() => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (select && select.options.length > 0) {
        select.options[0].text = "English";
        // Also ensure any dynamically added text nodes by Google are hidden or replaced
        const defaultOption = select.options[0];
        if (defaultOption.innerHTML !== "English") {
            defaultOption.innerHTML = "English";
        }
        clearInterval(checkAndChangeText);
      }
    }, 100);

    // Clean up interval on unmount
    return () => clearInterval(checkAndChangeText);
  }, []);

  return (
    <>
      <style>{`
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        #google_translate_element .goog-te-gadget {
          font-family: inherit !important;
          font-size: 0 !important;
        }
        #google_translate_element .goog-te-gadget > span {
          display: none !important;
        }
        #google_translate_element .goog-te-combo {
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: #1D2E54;
          background: transparent;
          border: none;
          padding: 0.2rem 1.2rem 0.2rem 0;
          cursor: pointer;
          outline: none;
          transition: color 0.2s;
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%231D2E54' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0 center;
          background-size: 10px;
        }
        #google_translate_element .goog-te-combo:hover {
          color: #49A98F;
        }
        .goog-logo-link,
        .goog-te-gadget > div:last-child {
          display: none !important;
        }
      `}</style>
      <div id="google_translate_element" />
    </>
  );
}
