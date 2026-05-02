"use client";

import { useTranslation } from "@/lib/language-context";

export function CompanyOverview() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-0.5 md:px-0">
        {/* Main paragraphs */}
        <div>
          <div className="space-y-6 text-xl font-bold leading-[1.9] text-[#2f3b4f] md:text-2xl">
            <p className="font-bold text-[#1D2E54]">
              {t("home.aboutP1")}
            </p>
            <p>{t("home.aboutP2")}</p>
            <p>{t("home.aboutP3")}</p>
            <p>{t("home.aboutP4")}</p>
          </div>
        </div>

        {/* Connections + 24/7 Response grid */}
        <div className="mt-12 grid gap-10 border-t border-[#e5eaf0] pt-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold uppercase text-[#49A98F] md:text-4xl">
              {t("home.connections")}
            </h3>
            <p className="mt-4 text-[1.02rem] leading-8 text-[#3d4756]">
              {t("home.connectionsDesc")}
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold uppercase text-[#3B71B5] md:text-4xl">
              {t("home.response")}
            </h3>
            <p className="mt-4 text-[1.02rem] leading-8 text-[#3d4756]">
              {t("home.responseDesc")}
            </p>
          </div>
        </div>

        {/* ISO commitment */}
        <p className="mt-10 border-t border-[#e5eaf0] pt-8 text-center text-[0.95rem] italic leading-7 text-[#5a6a7d]">
          {t("home.isoCommitment")}
        </p>
      </div>
    </section>
  );
}
