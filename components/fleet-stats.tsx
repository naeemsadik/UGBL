"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { useTranslation } from "@/lib/language-context";

function ShipIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 36l6-18h24l6 18" />
      <path d="M12 18v-6h24v6" />
      <path d="M20 12V8h8v4" />
      <path d="M2 40c4-4 8-4 12 0s8 4 12 0 8-4 12 0" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 6l14 6v10c0 10-6 16-14 20-8-4-14-10-14-20V12l14-6z" />
      <path d="M16 24l6 6 10-12" />
    </svg>
  );
}

function CrewIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="16" r="6" />
      <path d="M10 40c0-8 6-14 14-14s14 6 14 14" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="12" width="32" height="28" rx="3" />
      <path d="M8 22h32" />
      <path d="M18 12v28" />
    </svg>
  );
}

export function FleetStats() {
  const { t } = useTranslation();

  const handleCardMouseMove = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty("--x", `${x}%`);
    target.style.setProperty("--y", `${y}%`);
  };

  const handleCardMouseLeave = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    target.style.setProperty("--x", "50%");
    target.style.setProperty("--y", "50%");
  };

  const services = [
    {
      title: t("home.shippingServices"),
      desc: t("home.shippingServicesDesc"),
      icon: <ShipIcon />,
      href: "/services",
    },
    {
      title: t("home.charteringServices"),
      desc: t("home.charteringServicesDesc"),
      icon: <ShieldIcon />,
      href: "/services",
    },
    {
      title: t("home.logisticsServices"),
      desc: t("home.logisticsServicesDesc"),
      icon: <CrewIcon />,
      href: "/services",
    },
    {
      title: t("home.husbandryServices"),
      desc: t("home.husbandryServicesDesc"),
      icon: <BoxIcon />,
      href: "/services",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F6FAFF] py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(29,46,84,0.18) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-[#3B71B5] md:text-xl">
            {t("home.ourServicesLabel")}
          </p>
          <h2 className="mt-6 text-3xl font-semibold uppercase leading-tight text-[#1D2E54] md:text-4xl">
            {t("home.whatWeCanDo")}
            <span className="block text-[#49A98F]">{t("home.forYou")}</span>
          </h2>
          <p className="mt-6 text-[0.98rem] leading-7 text-[#51627A]">
            {t("home.fleetSubtitle")}
          </p>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(29,46,84,0.12)] bg-white p-6 shadow-[0_10px_30px_rgba(29,46,84,0.10)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-[rgba(59,113,181,0.45)] hover:shadow-[0_18px_45px_rgba(29,46,84,0.18)]"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), rgba(73,169,143,0.18), rgba(73,169,143,0.06) 40%, transparent 65%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(59,113,181,0.12)] text-[#3B71B5] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[rgba(73,169,143,0.18)] group-hover:text-[#49A98F]">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1D2E54] md:text-[1.15rem]">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-5 text-[0.97rem] leading-7 text-[#4a5a70]">
                  {service.desc}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3B71B5] transition group-hover:text-[#49A98F]"
                >
                  {t("home.readMore")}
                  <span className="h-px w-0 bg-[#49A98F] transition-all duration-300 group-hover:w-6" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
