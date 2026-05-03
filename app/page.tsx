"use client";

import { HeroCarousel } from "@/components/hero-carousel";
import { InfoCards } from "@/components/info-cards";
import { CompanyOverview } from "@/components/company-overview";
import { FleetStats } from "@/components/fleet-stats";
import { PromoCards } from "@/components/promo-cards";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <InfoCards />
      <CompanyOverview />
      <FleetStats />
      <PromoCards />
    </div>
  );
}
