"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/language-context";

import hero1 from "@/assets/hero1.jpeg";

export function SiteFooter() {
  const { t } = useTranslation();

  const services = [
    t("footer.portAgency"),
    t("footer.crewChanges"),
    t("footer.shipChandling"),
    t("footer.bunkering"),
    t("footer.hullCleaning"),
  ];

  return (
    <footer className="relative text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero1}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#081c30]/92" />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] gap-10 px-6 pt-16 pb-12 md:grid-cols-[1.1fr_1fr_1fr_1.2fr]">
        {/* Column 1: Brand */}
        <div>
          <Link href="/" className="text-3xl font-bold tracking-tight">
            <span className="text-[#1a8ec8]">U</span>niverse
          </Link>
          <p className="mt-5 text-[0.92rem] leading-7 text-white/75">
            {t("footer.aboutText")}
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
            <span>Mon – Sun</span>
          </div>
          <p className="mt-1 text-sm text-white/60">24/7/365 Support</p>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h3 className="text-lg font-semibold">{t("footer.ourServices")}</h3>
          <div className="mt-2 h-[2px] w-10 bg-[#1a8ec8]" />
          <ul className="mt-5 space-y-3 text-[0.92rem] text-white/75">
            {services.map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="transition hover:text-[#1a8ec8]"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold">{t("footer.getInTouch")}</h3>
          <div className="mt-2 h-[2px] w-10 bg-[#1a8ec8]" />
          <div className="mt-5 space-y-4 text-[0.92rem] leading-7 text-white/75">
            <p>
              Corporate Head Office
              <br />
              Dhaka, Bangladesh
            </p>
            <p>
              Phone: +880 258811819
            </p>
            <p>
              Email: info@universeshipping.com
            </p>
            <div className="mt-4 flex gap-3">
              {["fb", "ig", "in", "wa"].map((icon) => (
                <span
                  key={icon}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs uppercase text-white/60 transition hover:border-[#1a8ec8] hover:text-[#1a8ec8]"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Column 4: Stay Updated */}
        <div>
          <h3 className="text-lg font-semibold">{t("footer.stayUpdated")}</h3>
          <div className="mt-2 h-[2px] w-10 bg-[#1a8ec8]" />
          <p className="mt-5 text-[0.92rem] leading-7 text-white/75">
            {t("footer.stayUpdatedDesc")}
          </p>
          <div className="mt-5">
            <label htmlFor="footer-email" className="text-sm text-white/60">
              {t("footer.yourEmail")}
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Email"
              className="mt-2 w-full rounded border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#1a8ec8]"
            />
            <button
              type="button"
              className="mt-3 w-full rounded bg-[#1a8ec8] py-2.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#158ab8]"
            >
              {t("footer.subscribe")}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-4 text-xs text-white/50">
          <p>
            Universe Shipping Lines 2024 © All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-white/80">
              {t("footer.termsConditions")}
            </Link>
            <Link href="#" className="transition hover:text-white/80">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href="#" className="transition hover:text-white/80">
              {t("footer.disclaimer")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
