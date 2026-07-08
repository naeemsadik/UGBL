"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/language-context";

import { InnerHero } from "@/components/inner-hero";
import missionHero from "@/assets/visionary-leader.jpg";
import leaderImage from "@/assets/Leader.jpg";

const fleetData = [
  {
    sn: "01",
    name: "MT. TUG TAHMINA",
    capacity: "30 Ton (Bollard Pull)",
    type: "Tug Boat",
    flag: "Bangladesh",
    imo: "9131735",
    status: "Operational",
  },
  {
    sn: "02",
    name: "MT. SARJANA - 3",
    capacity: "1700 D.W.T",
    type: "Oil Tanker",
    flag: "Bangladesh",
    imo: "8772673",
    status: "Sold",
  },
  {
    sn: "03",
    name: "MV. SARJANA - 1",
    capacity: "1700 D.W.T",
    type: "Cargo",
    flag: "Bangladesh",
    imo: "N/A",
    status: "Sold",
  },
  {
    sn: "04",
    name: "MV. SARJANA - 2",
    capacity: "1500 D.W.T",
    type: "Cargo",
    flag: "Bangladesh",
    imo: "N/A",
    status: "Sold",
  },
];

const highlightedPhrases = [
  "Mahmodul Islam Parvez",
  "University of Luton, UK",
  "Uni-Global Business Ltd.",
  "River Tyne Ltd.",
  "Uni Global Shipping and Logistics Services Limited",
  "Universe Shipping Lines Ltd.",
];

function renderHighlightedText(text: string) {
  const pattern = new RegExp(
    `(${highlightedPhrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );

  return text.split(pattern).map((segment, index) =>
    highlightedPhrases.includes(segment) ? (
      <strong
        key={`${segment}-${index}`}
        className="font-semibold text-slate-900"
      >
        {segment}
      </strong>
    ) : (
      <span key={`${segment}-${index}`}>{segment}</span>
    ),
  );
}

export default function ManagementPage() {
  const { t, tVisibility } = useTranslation();

  return (
    <div className="bg-slate-50">
      <InnerHero
        title={t("mgmt.heroTitle")}
        subtitle={t("mgmt.heroSubtitle")}
        backgroundImage={missionHero}
        backgroundPosition="center 15%"
        subtitleClassName="mt-3 md:mt-4"
      />

      <section className="mx-auto w-full max-w-[1200px] px-6 py-16 md:py-20">
        {/* Profile Card */}
        <div className="rounded-[28px] border border-white/60 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">
          {/* Top accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#1D2E54] via-[#3B71B5] to-[#49A98F]" />

          <div className="p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 items-start">
              {/* Leader image */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-full max-w-[240px] aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1D2E54]/10 to-[#3B71B5]/10 border border-[#1D2E54]/10">
                  <Image
                    src={leaderImage}
                    alt={t("mgmt.name")}
                    fill
                    sizes="(max-width: 1024px) 70vw, 280px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Name & Title card */}
                <div className="w-full max-w-[240px] rounded-xl bg-[#1D2E54] px-5 py-4 text-center">
                  <p className="text-base font-black text-white leading-snug">
                    {t("mgmt.name")}
                  </p>
                  <p className="mt-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/60">
                    {t("mgmt.role")}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="w-full max-w-[920px]">
                <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.18em] text-[#1D2E54]">
                  {t("mgmt.profileLabel")}
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-4xl">
                  {t("mgmt.title")}
                </h2>

                <div className="mt-6 space-y-6 text-[18px] leading-8 tracking-[-0.01em] text-justify text-slate-700 [hyphens:auto] [text-justify:inter-word] md:text-[19px] md:leading-9">
                  <p>{renderHighlightedText(t("mgmt.bio1"))}</p>
                  <p>{renderHighlightedText(t("mgmt.bio2"))}</p>
                  <p>{t("mgmt.bio3")}</p>
                  <p>{t("mgmt.bio4")}</p>
                  <p>{t("mgmt.bio5")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Ownership Table */}
        {tVisibility("visibility.mgmtVesselPortfolio") && (
          <div className="mt-10 rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
            <span className="inline-flex items-center rounded-full bg-[#49A98F]/12 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#49A98F]">
              {t("mgmt.fleetLabel")}
            </span>
            <h2 className="mt-5 text-2xl font-black tracking-tight text-[#1D2E54] md:text-3xl">
              {t("mgmt.fleetTitle")}
            </h2>
            <p className="mt-2 text-sm text-slate-500">{t("mgmt.fleetDesc")}</p>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1D2E54] text-white">
                    {[
                      "SN",
                      "Name",
                      "Capacity",
                      "Type",
                      "Flag",
                      "IMO No.",
                      "Status",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3.5 text-left text-[0.68rem] font-black uppercase tracking-[0.18em] whitespace-nowrap first:rounded-tl-2xl last:rounded-tr-2xl"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fleetData.map((row, i) => (
                    <tr
                      key={row.sn}
                      className={`border-t border-slate-100 transition-colors hover:bg-slate-50 ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }`}
                    >
                      <td className="px-4 py-3.5 font-bold text-[#1D2E54]">
                        {row.sn}
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-slate-800 whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="px-4 py-3.5 text-slate-600 whitespace-nowrap">
                        {row.capacity}
                      </td>
                      <td className="px-4 py-3.5 text-slate-600">{row.type}</td>
                      <td className="px-4 py-3.5 text-slate-600">{row.flag}</td>
                      <td className="px-4 py-3.5 font-mono text-xs text-slate-500">
                        {row.imo}
                      </td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide ${
                            row.status === "Operational"
                              ? "bg-[#49A98F]/15 text-[#2d7a65]"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
