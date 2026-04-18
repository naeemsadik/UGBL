"use client";

import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";

export default function AboutPage() {
  const { t } = useTranslation();

  const cards = [
    { title: t("about.whoWeAre"), desc: t("about.whoWeAreDesc") },
    { title: t("about.ourVision"), desc: t("about.ourVisionDesc") },
    { title: t("about.ourMission"), desc: t("about.ourMissionDesc") },
    { title: t("about.certifications"), desc: t("about.certificationsDesc") },
  ];

  return (
    <div>
      <InnerHero title={t("about.title")} subtitle={t("about.subtitle")} />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <article key={card.title} className="info-card">
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
