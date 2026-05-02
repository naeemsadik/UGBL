"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/language-context";

import hero1 from "@/assets/hero1.jpeg";
import hero2 from "@/assets/hero2.jpeg";
import hero3 from "@/assets/hero3.jpeg";
import hero4 from "@/assets/hero4.jpeg";
import hero5 from "@/assets/hero5.png";
import hero6 from "@/assets/hero6.jpeg";
import hero7 from "@/assets/hero7.jpeg";

const HERO_IMAGES = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];
const ROTATE_MS = 6000;

const TAGLINES: { key: string; sub: string }[] = [
  { key: "Navigating Your", sub: "Maritime Success" },
  { key: "Trusted Port Agency", sub: "& Logistics Partner" },
  { key: "Connecting Oceans,", sub: "Delivering Promise" },
  { key: "With You For", sub: "The Long Haul" },
  { key: "Reliable Shipping", sub: "Across Bangladesh" },
  { key: "Excellence In", sub: "Maritime Services" },
  { key: "Your Cargo,", sub: "Our Commitment" },
];

export function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p + 1) % HERO_IMAGES.length), ROTATE_MS);
    return () => clearInterval(timer);
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" });
  };

  return (
    <section className="hero-banner relative overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0" aria-hidden>
        {HERO_IMAGES.map((img, i) => (
          <Image
            key={img.src}
            src={img}
            alt=""
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-[1500ms] ${i === idx ? "opacity-100" : "opacity-0"
              }`}
            sizes="100vw"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay relative z-10 flex flex-col">
        {/* Spacer for header */}
        <div className="flex-1" />

        {/* Tagline — left aligned like Pacific Basin */}
        <div className="mx-auto w-full max-w-[1320px] pl-5 pr-8 pb-[25px] md:pb-[25px] lg:pl-[30px] lg:pb-[20px]">
          <h1 className="text-[40px] leading-[40px] font-bold tracking-normal text-white md:text-[50px] md:leading-[50px] lg:text-[59px] lg:leading-[56px]" style={{ textShadow: '1px 0px 20px rgba(0, 0, 0, 0.5)' }}>
            <span className="block">{TAGLINES[idx].key}</span>
            <span className="block">{TAGLINES[idx].sub}</span>
          </h1>
        </div>

        {/* Bottom bar: dots + scroll indicator */}
        <div className="relative flex items-end justify-between px-8 pb-6 md:px-12">
          {/* Carousel dots */}
          <div className="flex items-center gap-2.5">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`hero-dot ${i === idx ? "active" : ""}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollDown}
            className="absolute left-1/2 -translate-x-1/2 bottom-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/60 bg-[#1D2E54] text-white transition hover:bg-[#141F3A] animate-bounce-slow"
            aria-label="Scroll down"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Empty spacer for flex alignment */}
          <div className="w-20" />
        </div>
      </div>
    </section>
  );
}
