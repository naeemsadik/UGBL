"use client";

import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";

export default function PortfolioPage() {
  const { t } = useTranslation();

  const projects = [
    { title: t("portfolio.coalVessel"), desc: t("portfolio.coalVesselDesc") },
    { title: t("portfolio.multiPort"), desc: t("portfolio.multiPortDesc") },
    { title: t("portfolio.industrialCargo"), desc: t("portfolio.industrialCargoDesc") },
    { title: t("portfolio.husbandry"), desc: t("portfolio.husbandryDesc") },
  ];

  return (
    <div>
      <InnerHero title={t("portfolio.title")} subtitle={t("portfolio.subtitle")} />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="info-card">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
