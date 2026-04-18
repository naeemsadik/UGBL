"use client";

import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";

export default function FleetPage() {
  const { t } = useTranslation();

  const fleetItems = [
    { name: t("fleet.bulkCarriers"), details: t("fleet.bulkCarriersDesc") },
    { name: t("fleet.containerVessels"), details: t("fleet.containerVesselsDesc") },
    { name: t("fleet.projectCargo"), details: t("fleet.projectCargoDesc") },
    { name: t("fleet.tankers"), details: t("fleet.tankersDesc") },
  ];

  return (
    <div>
      <InnerHero title={t("fleet.title")} subtitle={t("fleet.subtitle")} />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {fleetItems.map((item) => (
            <article key={item.name} className="info-card">
              <h2>{item.name}</h2>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
