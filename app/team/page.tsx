"use client";

import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";

export default function TeamPage() {
  const { t } = useTranslation();

  const team = [
    { name: t("team.abdulKarim"), role: t("team.abdulKarimRole"), exp: t("team.abdulKarimExp") },
    { name: t("team.sadiaRahman"), role: t("team.sadiaRahmanRole"), exp: t("team.sadiaRahmanExp") },
    { name: t("team.rezaulHaque"), role: t("team.rezaulHaqueRole"), exp: t("team.rezaulHaqueExp") },
    { name: t("team.fahimIslam"), role: t("team.fahimIslamRole"), exp: t("team.fahimIslamExp") },
  ];

  return (
    <div>
      <InnerHero title={t("team.title")} subtitle={t("team.subtitle")} />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <article key={member.name} className="info-card">
              <h2>{member.name}</h2>
              <p className="font-semibold text-[#1a8ec8]">{member.role}</p>
              <p>{member.exp}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
