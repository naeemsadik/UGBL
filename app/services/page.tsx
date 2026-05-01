"use client";

import type { MouseEvent } from "react";
import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";

export default function ServicesPage() {
  const { t } = useTranslation();

  const handleCardMouseMove = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty("--x", `${x}%`);
    target.style.setProperty("--y", `${y}%`);
  };

  const handleCardMouseLeave = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    target.style.setProperty("--x", "50%");
    target.style.setProperty("--y", "50%");
  };

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
      <section className="mx-auto w-full max-w-[1200px] px-6 py-16">
        <div className="grid gap-7 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.name}
              className="info-card group relative overflow-hidden rounded-2xl border border-[rgba(29,46,84,0.12)] bg-[#F6FAFF] p-7 shadow-[0_10px_30px_rgba(29,46,84,0.10)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-[rgba(59,113,181,0.45)] hover:shadow-[0_18px_45px_rgba(29,46,84,0.18)]"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), rgba(73,169,143,0.18), rgba(73,169,143,0.06) 40%, transparent 65%)",
                }}
              />
              <div className="relative">
                <h2 className="text-xl font-semibold tracking-tight text-[#1D2E54] md:text-[1.35rem]">
                  {service.name}
                </h2>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-[#42556E]">
                  {service.details}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
