"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/language-context";

export function PromoCards() {
  const { t } = useTranslation();

  const cards = [
    {
      image: "/card-about.png",
      label: t("home.promoAboutLabel"),
      desc: t("home.promoAboutDesc"),
      cta: t("home.promoAboutCta"),
      href: "/about",
      overlay: "from-[#1B2D5A]/90 to-[#1B2D5A]/50",
    },
    {
      image: "/card-services.png",
      label: t("home.promoServicesLabel"),
      desc: t("home.promoServicesDesc"),
      cta: t("home.promoServicesCta"),
      href: "/services",
      overlay: "from-[#2E9E6F]/85 to-[#2E9E6F]/40",
    },
    {
      image: "/card-ports.png",
      label: t("home.promoPortsLabel"),
      desc: t("home.promoPortsDesc"),
      cta: t("home.promoPortsCta"),
      href: "/port-info",
      overlay: "from-[#2088C0]/85 to-[#2088C0]/40",
    },
  ];

  return (
    <section className="bg-[#EFF5F8] py-16">
      <div className="mx-auto grid w-full max-w-[1320px] gap-5 px-6 md:grid-cols-3">
        {cards.map((card) => (
          <Link key={card.label} href={card.href} className="promo-card group block">
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.label}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 33vw"
            />

            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${card.overlay}`} />

            {/* Content */}
            <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-end p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                {card.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/90">
                {card.desc}
              </p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-all group-hover:gap-2.5">
                {card.cta}
                <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
