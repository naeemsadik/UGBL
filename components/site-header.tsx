"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/language-context";
import type { Locale } from "@/lib/translations";
import type { TranslationKey } from "@/lib/translations";

import logoImg from "@/assets/River Tyne Ltd. logo transparent.png";

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
      { key: "nav.atAGlance", href: "/about" },
      { key: "nav.missionVision", href: "/mission-vision" },
      { key: "nav.policyCompliance", href: "/policy-compliance" },
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
  {
    key: "nav.webMail",
    href: "https://www.rivertyneltd.com:2096/",
    external: true,
  },
  { key: "nav.contactUs", href: "/contact" },
];

/* ─── Nav link / dropdown ────────────────────────── */
function NavDropdown({
  item,
  scrolled,
}: {
  item: NavItem;
  scrolled: boolean;
}) {
  const { t } = useTranslation();
  const hasChildren = item.children && item.children.length > 0;

  /* Pacific Basin spec: Purista-Bold / 14px / 20px line-height / normal spacing */
  const linkCls = "inline-flex items-center font-bold uppercase text-[14px] leading-[20px] tracking-normal whitespace-nowrap transition-colors duration-200 text-[#1D2E54] hover:text-[#49A98F]";

  const LinkOrA = item.external ? "a" : Link;
  const extra = item.external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  if (!hasChildren) {
    return (
      <div className="relative flex items-center">
        <LinkOrA href={item.href} className={linkCls} {...extra}>
          {t(item.key)}
        </LinkOrA>
      </div>
    );
  }

  return (
    <div className="group relative flex items-center">
      <Link href={item.href} className={`${linkCls} gap-1`}>
        {t(item.key)}
        <svg
          className="h-2.5 w-2.5 opacity-50 transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>

      <div className="pointer-events-none absolute left-1/2 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 -translate-x-1/2">
        <div className="min-w-[220px] rounded border border-[#e5eaf0] bg-white py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
          {item.children!.map((child) => (
            <Link
              key={child.key}
              href={child.href}
              className="block px-5 py-2.5 text-[13px] leading-[18px] font-normal text-[#3a4f63] tracking-[0.02em] transition hover:bg-[#F6FAFF] hover:text-[#1D2E54]"
            >
              {t(child.key)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Language switcher (reusable) ────────────────── */
function LangSwitcher({ scrolled }: { scrolled: boolean }) {
  const { locale, setLocale, t } = useTranslation();

  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 font-bold uppercase text-[14px] leading-[20px] tracking-normal transition-colors duration-200 text-[#1D2E54] hover:text-[#49A98F]"
        aria-label={t("nav.selectLanguage")}
      >
        {locale === "EN"
          ? "EN"
          : locale === "ES"
            ? "ES"
            : locale === "ZH"
              ? "中文"
              : "বাং"}
        <svg
          className="h-2.5 w-2.5 opacity-50 transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div className="pointer-events-none absolute right-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="min-w-[150px] rounded border border-[#e5eaf0] bg-white py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
          {(
            [
              { code: "EN" as Locale, label: "English" },
              { code: "ES" as Locale, label: "Español" },
              { code: "ZH" as Locale, label: "中文" },
              { code: "BN" as Locale, label: "বাংলা" },
            ] as const
          ).map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLocale(lang.code)}
              className={`block w-full px-4 py-2 text-left text-[0.82rem] transition ${
                locale === lang.code
                  ? "bg-[#F6FAFF] text-[#1D2E54] font-medium"
                  : "text-[#3a4f63] font-normal hover:bg-[#F6FAFF] hover:text-[#1D2E54]"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile slide-out menu ──────────────────────── */
function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t, locale, setLocale } = useTranslation();

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <nav className="absolute right-0 top-0 h-full w-[280px] overflow-y-auto bg-white shadow-2xl">
        {/* Close row — no logo to avoid duplication */}
        <div className="flex items-center justify-end px-5 py-4 border-b border-gray-100">
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-5 space-y-1">
          {navItems.map((item) => (
            <div key={item.key}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block py-2.5 text-[0.82rem] font-medium uppercase tracking-[0.12em] text-[#1D2E54] hover:text-[#49A98F] transition-colors"
              >
                {t(item.key)}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.key}
                  href={child.href}
                  onClick={onClose}
                  className="block py-2 pl-4 text-[0.8rem] text-[#5a6a7d] hover:text-[#49A98F] transition-colors"
                >
                  {t(child.key)}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 px-6 py-4">
          <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-gray-400">
            Language
          </p>
          <div className="flex flex-wrap gap-2">
            {(
              [
                { code: "EN" as Locale, label: "English" },
                { code: "ES" as Locale, label: "Español" },
                { code: "ZH" as Locale, label: "中文" },
                { code: "BN" as Locale, label: "বাংলা" },
              ] as const
            ).map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLocale(lang.code)}
                className={`rounded-full px-3 py-1.5 text-[0.78rem] font-medium transition ${
                  locale === lang.code
                    ? "bg-[#1D2E54] text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
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

/* ═══════════════════════════════════════════════════
   HEADER
   ─────────────────────────────────────────────────
   BEFORE SCROLL (spacious, two-row feel):
   ┌──────────────────────────────────── EN ∨ ┐  ← utility row
   │  LOGO    HOME  ABOUT US ∨  SERVICES ∨ … │  ← main nav row
   └──────────────────────────────────────────┘

   AFTER SCROLL (compact, single merged row):
   ┌ LOGO  HOME  ABOUT US ∨  SERVICES ∨ … EN ∨ ┐
   └────────────────────────────────────────────┘
   ═══════════════════════════════════════════════ */
export function SiteHeader() {
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
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        {/* Single row: Logo — Nav — Language — Hamburger */}
        <div
          className={`mx-auto max-w-[1320px] flex items-center px-8 md:px-10 transition-all duration-300 ${
            scrolled ? "h-[70px]" : "h-[90px]"
          }`}
        >
          {/* Logo — stays large, minimal shrink */}
          <Link href="/" className="shrink-0 pl-4">
            <Image
              src={logoImg}
              alt="River Tyne"
              width={scrolled ? 72 : 86}
              height={scrolled ? 72 : 86}
              className="transition-all duration-300"
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-9 h-full">
            {navItems.map((item) => (
              <NavDropdown key={item.key} item={item} scrolled={scrolled} />
            ))}
          </nav>

          {/* Language — always visible inline */}
          <div className="hidden lg:block shrink-0">
            <LangSwitcher scrolled={true} />
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-auto p-2 text-[#1D2E54]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
