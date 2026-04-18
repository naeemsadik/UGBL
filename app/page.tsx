"use client";

import Link from "next/link";
import { HeroCarousel } from "@/components/hero-carousel";
import { useTranslation } from "@/lib/language-context";

const CERTIFICATIONS = [
  "BIMCO",
  "ISO 9001:2015",
  "ITIC",
  "CCI-FBCCI",
  "FBCCI",
  "BAFFA",
  "DCCI",
  "BSC",
  "BSAA",
  "SCB",
  "BPTOA",
  "MetLife",
];

export default function Home() {
  const { t } = useTranslation();

  const contactBar = [
    { label: t("home.callCenter"), sub: t("home.callCenterSub"), value: t("home.callCenterValue") },
    { label: t("home.workingHours"), sub: t("home.workingHoursSub"), value: t("home.workingHoursValue") },
    { label: t("home.ourLocation"), sub: t("home.ourLocationSub"), value: t("home.ourLocationValue") },
  ];

  const services = [
    { title: t("home.shippingServices"), body: t("home.shippingServicesDesc") },
    { title: t("home.charteringServices"), body: t("home.charteringServicesDesc") },
    { title: t("home.logisticsServices"), body: t("home.logisticsServicesDesc") },
    { title: t("home.husbandryServices"), body: t("home.husbandryServicesDesc") },
  ];

  return (
    <div className="text-[#243041]">
      <HeroCarousel />

      <section className="bg-[#1a8ec8] py-8 text-white">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-6 md:grid-cols-3">
          {contactBar.map((item) => (
            <div key={item.label} className="flex gap-3">
              <div
                className="mt-1 h-8 w-8 rounded-full border border-cyan-200/40"
                aria-hidden
              />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-100">
                  {item.label}
                </p>
                <p className="text-xs text-cyan-100/80">{item.sub}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="mx-auto max-w-3xl space-y-6 text-[19px] leading-[1.7] text-[#3d4756]">
          <p className="font-semibold text-[#1f2d41]">{t("home.aboutP1")}</p>
          <p>{t("home.aboutP2")}</p>
          <p>{t("home.aboutP3")}</p>
          <p>{t("home.aboutP4")}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-10 border-t border-slate-300 pt-10 md:grid-cols-2">
          <div>
            <h3 className="text-4xl font-bold uppercase text-[#1a8ec8]">
              {t("home.connections")}
            </h3>
            <p className="mt-4 text-lg leading-8 text-[#3d4756]">
              {t("home.connectionsDesc")}
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold uppercase text-[#0e3e68]">
              {t("home.response")}
            </h3>
            <p className="mt-4 text-lg leading-8 text-[#3d4756]">
              {t("home.responseDesc")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-16">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-6 md:grid-cols-[1.1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1a8ec8]">
              {t("home.ourServicesLabel")}
            </p>
            <h2 className="mt-3 text-5xl font-extrabold uppercase leading-[1.02] text-[#0e2745]">
              {t("home.whatWeCanDo")}
              <br />
              {t("home.forYou")}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-slate-200 bg-white p-7 shadow-[0_12px_20px_rgba(14,39,69,0.08)]"
              >
                <h3 className="text-3xl font-bold text-[#12385d]">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg leading-8 text-[#4a5565]">
                  {item.body}
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-block text-sm font-semibold uppercase tracking-wider text-[#1a8ec8]"
                >
                  {t("home.readMore")}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d3b5e] py-16">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-8 px-6 md:grid-cols-[220px_1fr]">
          <div className="grid h-[190px] place-items-center rounded-xl bg-white text-6xl font-bold text-[#1a8ec8]">
            GAC
          </div>
          <p className="max-w-4xl text-4xl italic leading-[1.45] text-white">
            {t("home.gacPartnership")}
          </p>
        </div>
      </section>

      <section className="bg-[#15749f] px-6 py-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <h2 className="text-center text-4xl font-medium uppercase tracking-[0.12em] text-white md:text-6xl">
            {t("home.certifications")}
          </h2>

          <div className="mt-11 grid grid-cols-2 border border-white/12 md:grid-cols-6">
            {CERTIFICATIONS.map((item) => (
              <div
                key={item}
                className="flex min-h-[172px] items-center justify-center border-b border-r border-white/12 p-5 last:border-r-0 md:[&:nth-child(6n)]:border-r-0 md:[&:nth-last-child(-n+6)]:border-b-0"
              >
                <div className="flex h-[92px] w-[190px] items-center justify-center bg-white px-3 text-center shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
                  <span className="text-[1.1rem] font-semibold uppercase tracking-[0.06em] text-[#113860]">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
