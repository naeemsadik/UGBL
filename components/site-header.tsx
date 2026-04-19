"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/language-context";
import type { Locale } from "@/lib/translations";
import type { TranslationKey } from "@/lib/translations";

type NavItem = {
  key: TranslationKey;
  href: string;
  children?: { key: TranslationKey; href: string }[];
};

const navItems: NavItem[] = [
  { key: "nav.home", href: "/" },
  {
    key: "nav.aboutUs",
    href: "/about",
    children: [
      { key: "nav.missionVision", href: "/about" },
      { key: "nav.policyCompliance", href: "/about" },
    ],
  },
  {
    key: "nav.services",
    href: "/services",
    children: [
      { key: "nav.portAgency", href: "/services" },
      { key: "nav.opaCpaAgency", href: "/services" },
      { key: "nav.husbandryAgency", href: "/services" },
      { key: "nav.logisticsAgency", href: "/services" },
    ],
  },
  { key: "nav.ourTeam", href: "/team" },
  {
    key: "nav.portInfo",
    href: "/port-info",
    children: [
      { key: "nav.chattogramPort", href: "/port-info" },
      { key: "nav.matarbariPort", href: "/port-info" },
      { key: "nav.payraPort", href: "/port-info" },
      { key: "nav.monglaPort", href: "/port-info" },
    ],
  },
  { key: "nav.webMail", href: "https://webmail.ugblgroup.com/" },
  { key: "nav.contactUs", href: "/contact" },
];

function DropdownItem({
  item,
  scrolled,
}: {
  item: NavItem;
  scrolled: boolean;
}) {
  const { t } = useTranslation();
  const hasChildren = item.children && item.children.length > 0;

  const baseLinkClass = `font-semibold uppercase tracking-wide transition ${scrolled
      ? "text-[0.88rem] text-[#2a3d52] hover:text-[#1a8ec8]"
      : "text-[0.95rem] text-white/95 hover:text-[#8fd3ff]"
    }`;

  if (!hasChildren) {
    return (
      <Link href={item.href} className={baseLinkClass}>
        {t(item.key)}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className={`${baseLinkClass} inline-flex items-center gap-1`}
      >
        {t(item.key)}
        <svg
          className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>

      {/* Dropdown panel */}
      <div className="pointer-events-none absolute left-1/2 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 -translate-x-1/2">
        <div className="min-w-[210px] rounded-lg border border-[#e5eaf0] bg-white py-2 shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
          {item.children!.map((child) => (
            <Link
              key={child.key}
              href={child.href}
              className="block px-5 py-2.5 text-[0.85rem] font-medium text-[#3a4f63] transition hover:bg-[#f4f8fc] hover:text-[#1a8ec8]"
            >
              {t(child.key)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const { locale, setLocale, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white text-[#1a2d42] shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
          : "bg-[linear-gradient(180deg,rgba(1,22,48,0.82),rgba(1,22,48,0.4)_60%,rgba(1,22,48,0.05))] text-white"
        }`}
    >
      {/* Top bar: logo + language */}
      <div
        className={`mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 text-[0.82rem] transition-all duration-300 ${scrolled ? "py-2" : "py-4"
          }`}
      >
        <Link
          href="/"
          className={`font-bold tracking-tight leading-none transition-all duration-300 ${scrolled ? "text-2xl" : "text-4xl"
            }`}
        >
          <span className="text-[#1a8ec8]">U</span>
          <span className={scrolled ? "text-[#1a2d42]" : ""}>niverse</span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="group relative">
            <button
              type="button"
              className={`inline-flex items-center gap-1.5 rounded-sm border px-3 py-1.5 text-sm font-medium tracking-wide outline-none transition-colors duration-300 ${
                scrolled
                  ? "border-[#c8d5e2] bg-[#f4f7fa] text-[#1a2d42]"
                  : "border-white/35 bg-white/10 text-white backdrop-blur-sm"
              }`}
              aria-label={t("nav.selectLanguage")}
            >
              {locale === "EN"
                ? "English"
                : locale === "ES"
                  ? "Español"
                  : locale === "ZH"
                    ? "中文"
                    : "বাংলা"}
              <svg
                className="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="pointer-events-none absolute right-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="min-w-[150px] rounded-lg border border-[#e5eaf0] bg-white py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                {([
                  { code: "EN" as Locale, label: "English" },
                  { code: "ES" as Locale, label: "Español" },
                  { code: "ZH" as Locale, label: "中文" },
                  { code: "BN" as Locale, label: "বাংলা" },
                ] as const).map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => setLocale(lang.code)}
                    className={`block w-full px-4 py-2 text-left text-[0.88rem] font-medium transition ${
                      locale === lang.code
                        ? "bg-[#f0f7fc] text-[#1a8ec8]"
                        : "text-[#3a4f63] hover:bg-[#f4f8fc] hover:text-[#1a8ec8]"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav row with dropdowns */}
      <div
        className={`mx-auto flex w-full max-w-[1280px] items-center justify-center px-6 transition-all duration-300 ${scrolled ? "pb-2" : "pb-4"
          }`}
      >
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <DropdownItem
              key={item.key}
              item={item}
              scrolled={scrolled}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
