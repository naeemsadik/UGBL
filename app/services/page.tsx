"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";
import servicesBg from "@/assets/card-services.jpeg";

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      number: "01",
      name: t("services.websiteStrategy"),
      details: t("services.websiteStrategyDesc"),
      href: "/services/port-agency",
    },
    {
      number: "02",
      name: t("services.uiuxDesign"),
      details: t("services.uiuxDesignDesc"),
      href: "/services/opa-cpa-agency",
    },
    {
      number: "03",
      name: t("services.nextjsDev"),
      details: t("services.nextjsDevDesc"),
      href: "/services/husbandry-agency",
    },
    {
      number: "04",
      name: t("services.seoAnalytics"),
      details: t("services.seoAnalyticsDesc"),
      href: "/services/logistics-agency",
    },
    {
      number: "05",
      name: t("services.brokering"),
      details: t("services.brokeringDesc"),
      href: "/services/brokering",
    },
  ];

  const coveragePoints = [
    "Dedicated teams at every major port",
    "24/7 operational support",
    "End-to-end logistics coordination",
  ];

  return (
    <div className="bg-slate-50">
      <InnerHero
        title={t("services.title")}
        subtitle={t("services.subtitle")}
        backgroundImage={servicesBg}
      />

      <section className="mx-auto w-full max-w-350 px-6 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
            <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
              Five Core Services
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-5xl">
              Comprehensive maritime and logistics solutions
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              {t("services.subtitle")}
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
              What to expect
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-200">
              Each service line is managed by dedicated professionals with deep local knowledge and strong industry networks.
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
                      Reliable support built on experience and local presence.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#3B71B5]">
                  {service.number}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#3B71B5]/70 transition-transform duration-300 group-hover:scale-125" />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-[#1D2E54]">
                {service.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.details}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3B71B5]">
                View details
                <span aria-hidden>→</span>
              </p>
              <div className="mt-6 h-px w-full bg-linear-to-r from-[#3B71B5] via-[#A9C4EA] to-transparent" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-350 px-6 pb-16 md:pb-24">
        <div className="rounded-[28px] bg-linear-to-r from-[#1D2E54] to-[#3B71B5] px-8 py-10 text-white shadow-[0_24px_70px_rgba(29,46,84,0.24)] md:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.7rem] font-black uppercase tracking-[0.24em] text-white/60">
                Complete service coverage
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                One team, five core service lines
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-100 md:text-lg">
                From port agency to end-to-end logistics, our teams deliver integrated maritime solutions across all major Bangladeshi ports.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-semibold text-white/90">
              Built for vessel owners, charterers, and cargo clients.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
