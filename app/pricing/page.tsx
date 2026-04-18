"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";

export default function PricingPage() {
  const { t } = useTranslation();

  const plans = [
    {
      name: t("pricing.starter"),
      price: t("pricing.starterPrice"),
      description: t("pricing.starterDesc"),
      features: [t("pricing.starterF1"), t("pricing.starterF2"), t("pricing.starterF3")],
    },
    {
      name: t("pricing.growth"),
      price: t("pricing.growthPrice"),
      description: t("pricing.growthDesc"),
      features: [t("pricing.growthF1"), t("pricing.growthF2"), t("pricing.growthF3"), t("pricing.growthF4")],
      featured: true,
    },
    {
      name: t("pricing.scale"),
      price: t("pricing.scalePrice"),
      description: t("pricing.scaleDesc"),
      features: [t("pricing.scaleF1"), t("pricing.scaleF2"), t("pricing.scaleF3")],
    },
  ];

  return (
    <div>
      <InnerHero title={t("pricing.title")} subtitle={t("pricing.subtitle")} />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`info-card flex h-full flex-col ${
                plan.featured ? "ring-2 ring-[#1a8ec8]/30" : ""
              }`}
            >
              <h2>{plan.name}</h2>
              <p className="mt-2 text-4xl font-bold text-[#1a8ec8]">{plan.price}</p>
              <p>{plan.description}</p>
              <ul className="mt-5 space-y-2 text-base text-[#3f4f61]">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <Link href="/contact" className="hero-btn-primary mt-8 w-fit">
                {t("pricing.getStarted")}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
