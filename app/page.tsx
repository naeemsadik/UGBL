"use client";

import { HeroCarousel } from "@/components/hero-carousel";
import { InfoCards } from "@/components/info-cards";
import { CompanyOverview } from "@/components/company-overview";



export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <InfoCards />
      <CompanyOverview />


    </div>
  );
}
