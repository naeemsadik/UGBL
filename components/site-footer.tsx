"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/language-context";

import logoImg from "@/assets/River Tyne Ltd. logo transparent.png";

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white">
      {/* Logo */}
      <div className="flex flex-col items-center pt-14 pb-6">
        <Image src={logoImg} alt="River Tyne" width={72} height={72} />
      </div>

      {/* Subscribe + social */}
      <div className="flex flex-wrap items-center justify-center gap-5 px-6 pb-8">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-[#d0dbe6] px-5 py-2.5 text-sm font-medium text-[#1D2E54] transition hover:border-[#3B71B5] hover:text-[#3B71B5]"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {t("footer.subscribe")}
        </Link>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {[
            {
              label: "Facebook",
              path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
            },
            {
              label: "Instagram",
              path: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7a1 1 0 110-2 1 1 0 010 2z",
            },
            {
              label: "LinkedIn",
              path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
            },
          ].map((social) => (
            <a
              key={social.label}
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d0dbe6] text-[#6a7a8d] transition hover:border-[#3B71B5] hover:text-[#3B71B5]"
              aria-label={social.label}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom links */}
      <div className="border-t border-gray-100">
        <div className="mx-auto flex w-full max-w-[1320px] flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-4 text-xs text-[#8a99ab]">
          <Link
            href="/mission-vision"
            className="transition hover:text-[#3B71B5]"
          >
            {t("footer.aboutLink")}
          </Link>
          <span className="text-gray-200">|</span>
          <Link href="/services" className="transition hover:text-[#3B71B5]">
            {t("footer.servicesLink")}
          </Link>
          <span className="text-gray-200">|</span>
          <Link href="/faq" className="transition hover:text-[#3B71B5]">
            FAQ
          </Link>
          <span className="text-gray-200">|</span>
          <Link href="#" className="transition hover:text-[#3B71B5]">
            {t("footer.termsConditions")}
          </Link>
          <span className="text-gray-200">|</span>
          <Link href="#" className="transition hover:text-[#3B71B5]">
            {t("footer.privacyPolicy")}
          </Link>
          <span className="text-gray-200">|</span>
          <Link href="#" className="transition hover:text-[#3B71B5]">
            {t("footer.disclaimer")}
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#F6FAFF] py-3 text-center text-xs text-[#a0acb9]">
        © 2026 River Tyne Shipping Limited
      </div>
    </footer>
  );
}
