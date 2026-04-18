"use client";

import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    { name: t("services.websiteStrategy"), details: t("services.websiteStrategyDesc") },
    { name: t("services.uiuxDesign"), details: t("services.uiuxDesignDesc") },
    { name: t("services.nextjsDev"), details: t("services.nextjsDevDesc") },
    { name: t("services.seoAnalytics"), details: t("services.seoAnalyticsDesc") },
    { name: t("services.perfOptimization"), details: t("services.perfOptimizationDesc") },
    { name: t("services.ongoingSupport"), details: t("services.ongoingSupportDesc") },
  ];

  return (
    <div>
      <InnerHero title={t("services.title")} subtitle={t("services.subtitle")} />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.name} className="info-card">
              <h2>{service.name}</h2>
              <p>{service.details}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
