"use client";

import missionHero from "@/assets/Mission and Vision.jpg";
import { InnerHero } from "@/components/inner-hero";
import { useTranslation } from "@/lib/language-context";

export default function MissionVisionPage() {
  const { t } = useTranslation();

  return (
    <div>
      <InnerHero
        title={t("missionVision.heroTitle")}
        subtitle={t("missionVision.heroSubtitle")}
        backgroundImage={missionHero}
      />
      <section className="mx-auto w-full max-w-[1200px] space-y-8 px-6 py-14">
        <article id="mission-vision" className="info-card">
          <h2>{t("missionVision.ourVision")}</h2>
          <p>{t("missionVision.visionP1")}</p>
          <p>{t("missionVision.visionP2")}</p>
          <p>{t("missionVision.visionFoundTitle")}</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
            <li>{t("missionVision.visionVal1")}</li>
            <li>{t("missionVision.visionVal2")}</li>
            <li>{t("missionVision.visionVal3")}</li>
            <li>{t("missionVision.visionVal4")}</li>
            <li>{t("missionVision.visionVal5")}</li>
            <li>{t("missionVision.visionVal6")}</li>
          </ul>
        </article>

        <div className="grid items-start gap-8 md:grid-cols-2">
          <article className="info-card !border-[#1D2E54]/10 !bg-[#F3F7FF]">
            <h2>{t("missionVision.ourMission")}</h2>
            <p>{t("missionVision.missionP1")}</p>
            <p>{t("missionVision.missionP2")}</p>
            <p>{t("missionVision.missionDedicationTitle")}</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              <li>{t("missionVision.missionDed1")}</li>
              <li>{t("missionVision.missionDed2")}</li>
              <li>{t("missionVision.missionDed3")}</li>
              <li>{t("missionVision.missionDed4")}</li>
            </ul>
            <p>{t("missionVision.missionPriorities")}</p>
          </article>

          <article className="info-card !border-[#49A98F]/12 !bg-[#F2FBF8]">
            <h2>{t("missionVision.keyObjectives")}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              <li>{t("missionVision.obj1")}</li>
              <li>{t("missionVision.obj2")}</li>
              <li>{t("missionVision.obj3")}</li>
              <li>{t("missionVision.obj4")}</li>
              <li>{t("missionVision.obj5")}</li>
              <li>{t("missionVision.obj6")}</li>
              <li>{t("missionVision.obj7")}</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
