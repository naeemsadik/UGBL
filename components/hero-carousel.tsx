"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import hero1 from "@/assets/hero1.jpeg";
import hero2 from "@/assets/hero2.jpeg";
import hero3 from "@/assets/hero3.jpeg";
import hero4 from "@/assets/hero4.jpeg";

const HERO_IMAGES = [hero1, hero2, hero3, hero4];
const ROTATE_INTERVAL_MS = 5000;

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % HERO_IMAGES.length);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-banner relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        {HERO_IMAGES.map((image, index) => (
          <Image
            key={image.src}
            src={image}
            alt=""
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
          />
        ))}
      </div>

      <div className="hero-overlay relative z-10">
        <div className="mx-auto flex h-full w-full max-w-[1200px] flex-col items-center justify-center px-6 text-center">
          <p className="text-2xl font-semibold text-white">Welcome to</p>
          <h1 className="mt-1 text-5xl font-extrabold uppercase leading-[0.98] text-white md:text-7xl">
            Universe Logistics
            <br />
            <span className="text-[#4ce6eb]">Ltd.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-200">
            We are a reliable shipping, logistics and chartering agent. All
            shipping services under one umbrella.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/services" className="hero-btn-primary">
              Our Services
            </Link>
            <Link href="/contact" className="hero-btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
