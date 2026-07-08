"use client";

import { HeroCarousel } from "@/components/hero-carousel";
import { InfoCards } from "@/components/info-cards";
import { CompanyOverview } from "@/components/company-overview";
import { useTranslation } from "@/lib/language-context";

export default function Home() {
  const { tVisibility } = useTranslation();

  return (
    <div>
      {tVisibility("visibility.homeHero") && <HeroCarousel />}
      {tVisibility("visibility.homeInfoCards") && <InfoCards />}
      {tVisibility("visibility.homeCompanyOverview") && <CompanyOverview />}
    </div>
  );
}

