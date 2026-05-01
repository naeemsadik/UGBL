"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/language-context";

import hero1 from "@/assets/hero1.jpeg";
import hero2 from "@/assets/hero2.jpeg";
import hero3 from "@/assets/hero3.jpeg";
import hero4 from "@/assets/hero4.jpeg";

/**
 * 4 full-bleed image cards sitting flush (no gaps) on a navy background,
 * matching the Pacific Basin layout exactly.
 */
export function InfoCards() {
  const { t } = useTranslation();

  const cards = [
    {
      label: t("home.card1Label"),
      title: t("home.card1Title"),
      image: hero1,
      href: "/mission-vision",
    },
    {
      label: t("home.card2Label"),
      title: t("home.card2Title"),
      image: hero2,
      href: "/services",
    },
    {
      label: t("home.card3Label"),
      title: t("home.card3Title"),
      image: hero3,
      href: "/port-info",
    },
    {
      label: t("home.card4Label"),
      title: t("home.card4Title"),
      image: hero4,
      href: "/contact",
    },
  ];

  return (
    <section className="bg-[#1D2E54]">
      <div className="mx-auto grid w-full max-w-[1320px] md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="group relative block overflow-hidden"
          >
            {/* Background image */}
            <div className="relative h-[280px] md:h-[320px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 25vw"
              />

              {/* Dark navy overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2E54]/90 via-[#1D2E54]/40 to-[#1D2E54]/20 transition-opacity duration-300 group-hover:from-[#1D2E54]/95" />

              {/* Content pinned to bottom */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                {/* Label */}
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">
                  {card.label}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-[0.95rem] font-semibold leading-snug text-white">
                  {card.title}
                </h3>

                {/* CTA arrow */}
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-all group-hover:text-white group-hover:gap-2.5">
                  {t("home.viewMore")}
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
