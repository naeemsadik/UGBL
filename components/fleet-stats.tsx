"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/language-context";

/* ── Stat icons ──────────────────────────────────── */
function ShipIcon() {
  return (
    <svg className="h-12 w-12 text-[#1B2D5A]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 36l6-18h24l6 18" />
      <path d="M12 18v-6h24v6" />
      <path d="M20 12V8h8v4" />
      <path d="M2 40c4-4 8-4 12 0s8 4 12 0 8-4 12 0" />
    </svg>
  );
}

function AnchorIcon() {
  return (
    <svg className="h-12 w-12 text-[#1B2D5A]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="10" r="4" />
      <path d="M24 14v26" />
      <path d="M16 20h16" />
      <path d="M8 36c4-8 12-10 16-10s12 2 16 10" />
    </svg>
  );
}

function CargoIcon() {
  return (
    <svg className="h-12 w-12 text-[#1B2D5A]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="16" width="32" height="24" rx="2" />
      <path d="M8 24h32" />
      <path d="M8 32h32" />
      <path d="M20 16v24" />
      <path d="M28 16v24" />
      <path d="M16 10l8-4 8 4" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="h-12 w-12 text-[#1B2D5A]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="18" />
      <ellipse cx="24" cy="24" rx="9" ry="18" />
      <path d="M8 16h32M8 32h32" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="h-12 w-12 text-[#1B2D5A]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="14" r="6" />
      <path d="M12 40c0-8 5-14 12-14s12 6 12 14" />
      <circle cx="38" cy="16" r="4" />
      <path d="M38 22c5 1 8 5 8 10" />
      <circle cx="10" cy="16" r="4" />
      <path d="M10 22c-5 1-8 5-8 10" />
    </svg>
  );
}

function CustomersIcon() {
  return (
    <svg className="h-12 w-12 text-[#1B2D5A]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="5" />
      <path d="M6 36c0-7 4-12 10-12s10 5 10 12" />
      <circle cx="34" cy="16" r="5" />
      <path d="M24 36c0-7 4-12 10-12s10 5 10 12" />
    </svg>
  );
}

/* ── Fleet & Network Stats ────────────────────────── */
export function FleetStats() {
  const { t } = useTranslation();

  const row1 = [
    {
      icon: <ShipIcon />,
      number: "4",
      label: t("home.stat1Label"),
      color: "#2E9E6F",
    },
    {
      icon: <AnchorIcon />,
      number: "50+",
      label: t("home.stat2Label"),
      color: "#2088C0",
    },
    {
      icon: <CargoIcon />,
      number: "4+",
      suffix: t("home.statYears"),
      label: t("home.stat3Label"),
      color: "#2E9E6F",
    },
  ];

  const row2 = [
    {
      icon: <GlobeIcon />,
      number: "24/7",
      label: t("home.stat4Label"),
      color: "#2088C0",
    },
    {
      icon: <TeamIcon />,
      number: "4",
      suffix: t("home.statServices"),
      label: t("home.stat5Label"),
      color: "#2E9E6F",
    },
    {
      icon: <CustomersIcon />,
      number: "100+",
      label: t("home.stat6Label"),
      color: "#2088C0",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-[1000px] px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#1B2D5A] md:text-4xl">
          {t("home.fleetTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-7 text-[#5a6a7d]">
          {t("home.fleetSubtitle")}
        </p>

        {/* Stats row 1 */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {row1.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-3 animate-fade-up">
              <div className="flex h-16 w-16 items-center justify-center">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold md:text-4xl" style={{ color: stat.color }}>
                {stat.number}
                {stat.suffix && (
                  <span className="ml-1 text-lg font-medium text-[#5a6a7d]">{stat.suffix}</span>
                )}
              </p>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#4a5a70]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Divider text */}
        <p className="mx-auto mt-12 max-w-xl text-[0.92rem] leading-7 text-[#6a7a8d]">
          {t("home.fleetDesc")}
        </p>

        {/* Stats row 2 */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {row2.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-3 animate-fade-up">
              <div className="flex h-16 w-16 items-center justify-center">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold md:text-4xl" style={{ color: stat.color }}>
                {stat.number}
                {stat.suffix && (
                  <span className="ml-1 text-lg font-medium text-[#5a6a7d]">{stat.suffix}</span>
                )}
              </p>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#4a5a70]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <Link href="/services" className="btn-primary mt-14 inline-flex">
          {t("home.learnMoreFleet")}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Footnote */}
        <p className="mt-8 text-xs italic text-[#8a99ab]">
          {t("home.fleetFootnote")}
        </p>
      </div>
    </section>
  );
}
