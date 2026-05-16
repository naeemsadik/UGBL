"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/language-context";

import chattogramImg from "@/assets/Chattogram Port.jpg";
import matarbariImg from "@/assets/Matarbari Port.jpg";
import monglaImg from "@/assets/Mongla Port.jpg";
import payraImg from "@/assets/Payra Port.jpg";

const ports = [
  {
    id: "chattogram",
    image: chattogramImg,
    labelKey: "nav.chattogramPort" as const,
    descKey: "home.portChattogramDesc" as const,
    href: "/port-info/chattogram",
  },
  {
    id: "matarbari",
    image: matarbariImg,
    labelKey: "nav.matarbariPort" as const,
    descKey: "home.portMatarbariDesc" as const,
    href: "/port-info/matarbari",
  },
  {
    id: "mongla",
    image: monglaImg,
    labelKey: "nav.monglaPort" as const,
    descKey: "home.portMonglaDesc" as const,
    href: "/port-info/mongla",
  },
  {
    id: "payra",
    image: payraImg,
    labelKey: "nav.payraPort" as const,
    descKey: "home.portPayraDesc" as const,
    href: "/port-info/payra",
  },
];

export function PromoCards() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F6FAFF] py-16">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#49A98F] mb-2">
            {t("home.promoPortsLabel")}
          </p>
          <h2 className="text-2xl font-bold text-[#1D2E54] md:text-3xl">
            {t("home.portSectionTitle")}
          </h2>
        </div>

        {/* 4-card grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ports.map((port) => (
            <Link
              key={port.id}
              href={port.href}
              className="group relative overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(29,46,84,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(29,46,84,0.14)]"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={port.image}
                  alt={t(port.labelKey)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D2E54]/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="bg-white p-5">
                <h3 className="text-[0.95rem] font-bold text-[#1D2E54] group-hover:text-[#3B71B5] transition-colors">
                  {t(port.labelKey)}
                </h3>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-[#5a6a7d] line-clamp-2">
                  {t(port.descKey)}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#49A98F]">
                  {t("port.common.readMore")}
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
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
