"use client";

import { HeroCarousel } from "@/components/hero-carousel";
import { InfoCards } from "@/components/info-cards";
import { FleetStats } from "@/components/fleet-stats";
import { PromoCards } from "@/components/promo-cards";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <InfoCards />
      <FleetStats />
      <PromoCards />
    </div>
  );
}
