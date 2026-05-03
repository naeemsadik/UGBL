"use client";

import Link from "next/link";
import heroImg from "@/assets/hero3.jpeg";
import { InnerHero } from "@/components/inner-hero";
import { useTranslation } from "@/lib/language-context";

export default function PortInfoPage() {
  const { t } = useTranslation();

  const ports = [
    {
      number: "01",
      name: t("portInfo.chattogram"),
      info: t("portInfo.chattogramDesc"),
      href: "/port-info/chattogram",
    },
    {
      number: "02",
      name: t("portInfo.matarbari"),
      info: t("portInfo.matarbariDesc"),
      href: "/port-info/matarbari",
    },
    {
      number: "03",
      name: t("portInfo.mongla"),
      info: t("portInfo.monglaDesc"),
      href: "/port-info/mongla",
    },
    {
      number: "04",
      name: t("portInfo.payra"),
      info: t("portInfo.payraDesc"),
      href: "/port-info/payra",
    },
  ];

  const coveragePoints = [
    t("portInfo.coveragePoint1"),
    t("portInfo.coveragePoint2"),
    t("portInfo.coveragePoint3"),
  ];

  return (
    <div className="bg-slate-50">
      <InnerHero
        title={t("portInfo.title")}
        subtitle={t("portInfo.subtitle")}
        image={heroImg}
        breadcrumbs={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.portInfo") },
        ]}
      />

      <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
            <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
              {t("portInfo.kicker")}
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-5xl">
              {t("portInfo.overviewTitle")}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              {t("portInfo.overview")}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {coveragePoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm font-semibold text-slate-700"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-[#1D2E54] p-8 text-white shadow-[0_24px_70px_rgba(29,46,84,0.28)] md:p-10">
            <p className="text-[0.7rem] font-black uppercase tracking-[0.24em] text-white/55">
              {t("portInfo.sideLabel")}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-200">
              {t("portInfo.sideCopy")}
            </p>
            <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
              {coveragePoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-black text-white">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{point}</p>
                    <p className="mt-1 text-sm text-slate-300">
                      {t("portInfo.sideDetail")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ports.map((port) => (
            <Link
              key={port.name}
              href={port.href}
              className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#3B71B5]">
                  {port.number}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#3B71B5]/70 transition-transform duration-300 group-hover:scale-125" />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-[#1D2E54]">
                {port.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{port.info}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3B71B5]">
                {t("portInfo.viewDetails")}
                <span aria-hidden>→</span>
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-[#3B71B5] via-[#A9C4EA] to-transparent" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 pb-16 md:pb-24">
        <div className="rounded-[28px] bg-gradient-to-r from-[#1D2E54] to-[#3B71B5] px-8 py-10 text-white shadow-[0_24px_70px_rgba(29,46,84,0.24)] md:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.7rem] font-black uppercase tracking-[0.24em] text-white/60">
                {t("portInfo.footerLabel")}
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                {t("portInfo.footerTitle")}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-100 md:text-lg">
                {t("portInfo.footerCopy")}
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-semibold text-white/90">
              {t("portInfo.footerTag")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
