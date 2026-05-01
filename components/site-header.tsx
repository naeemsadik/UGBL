"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/language-context";
import { RTLogo } from "@/components/rt-logo";
import type { Locale } from "@/lib/translations";
import type { TranslationKey } from "@/lib/translations";

type NavItem = {
  key: TranslationKey;
  href: string;
  external?: boolean;
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
  { key: "nav.webMail", href: "https://webmail.ugblgroup.com/", external: true },
  { key: "nav.contactUs", href: "/contact" },
];

/* ─── Dropdown item ──────────────────────────────── */
function DropdownItem({ item, scrolled }: { item: NavItem; scrolled: boolean }) {
  const { t } = useTranslation();
  const hasChildren = item.children && item.children.length > 0;

  const baseLinkClass = `inline-flex items-center h-8 font-semibold uppercase tracking-wider text-[0.82rem] transition-colors duration-200 ${
    scrolled
      ? "text-[#1B2D5A] hover:text-[#2E9E6F]"
      : "text-white/90 hover:text-[#45B585]"
  }`;

  const LinkOrAnchor = item.external ? "a" : Link;
  const extraProps = item.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (!hasChildren) {
    return (
      <LinkOrAnchor href={item.href} className={baseLinkClass} {...extraProps}>
        {t(item.key)}
      </LinkOrAnchor>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className={`${baseLinkClass} gap-1`}
      >
        {t(item.key)}
        <svg
          className="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div className="pointer-events-none absolute left-1/2 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 -translate-x-1/2">
        <div className="min-w-[210px] rounded-lg border border-[#e5eaf0] bg-white py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          {item.children!.map((child) => (
            <Link
              key={child.key}
              href={child.href}
              className="block px-5 py-2.5 text-[0.84rem] font-medium text-[#3a4f63] transition hover:bg-[#f0faf5] hover:text-[#2E9E6F]"
            >
              {t(child.key)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile menu ────────────────────────────────── */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, locale, setLocale } = useTranslation();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <nav className="absolute right-0 top-0 h-full w-[300px] overflow-y-auto bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <RTLogo size={32} />
            <span className="text-lg font-bold text-[#1B2D5A]">River Tyne</span>
          </div>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-800">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.key}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block py-2.5 text-[0.92rem] font-semibold uppercase tracking-wide text-[#1B2D5A] hover:text-[#2E9E6F]"
              >
                {t(item.key)}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.key}
                  href={child.href}
                  onClick={onClose}
                  className="block py-2 pl-4 text-sm text-[#4a5a70] hover:text-[#2E9E6F]"
                >
                  {t(child.key)}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Language selector */}
        <div className="border-t border-gray-100 px-5 py-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Language
          </p>
          <div className="flex flex-wrap gap-2">
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
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  locale === lang.code
                    ? "bg-[#2E9E6F] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

/* ─── Header ─────────────────────────────────────── */
export function SiteHeader() {
  const { locale, setLocale, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md text-[#1B2D5A] shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-gradient-to-b from-[rgba(18,32,63,0.82)] via-[rgba(18,32,63,0.5)] to-transparent text-white"
        }`}
      >
        {/* Top bar */}
        <div
          className={`mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "py-2" : "py-3"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <RTLogo size={scrolled ? 36 : 42} />
            <div className="leading-none">
              <span
                className={`font-bold tracking-wide transition-all duration-300 ${
                  scrolled ? "text-lg" : "text-xl"
                }`}
              >
                <span className="text-[#2E9E6F]">River</span>{" "}
                <span className={scrolled ? "text-[#1B2D5A]" : ""}>Tyne</span>
              </span>
            </div>
          </Link>

          {/* Right side: language + hamburger */}
          <div className="flex items-center gap-4">
            {/* Language selector — desktop */}
            <div className="hidden items-center gap-3 lg:flex">
              <div className="group relative">
                <button
                  type="button"
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium tracking-wide transition-colors ${
                    scrolled
                      ? "border-[#c8d5e2] bg-[#f4f7fa] text-[#1B2D5A]"
                      : "border-white/30 bg-white/10 text-white backdrop-blur-sm"
                  }`}
                  aria-label={t("nav.selectLanguage")}
                >
                  {locale === "EN" ? "EN" : locale === "ES" ? "ES" : locale === "ZH" ? "中文" : "বাং"}
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
                        className={`block w-full px-4 py-2 text-left text-sm font-medium transition ${
                          locale === lang.code
                            ? "bg-[#f0faf5] text-[#2E9E6F]"
                            : "text-[#3a4f63] hover:bg-[#f0faf5] hover:text-[#2E9E6F]"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hamburger — mobile */}
            <button
              className="lg:hidden p-1.5"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Nav row — desktop */}
        <div
          className={`mx-auto flex w-full max-w-[1320px] items-center justify-center px-6 transition-all duration-300 ${
            scrolled ? "pb-2" : "pb-3"
          }`}
        >
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <DropdownItem key={item.key} item={item} scrolled={scrolled} />
            ))}
          </nav>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
