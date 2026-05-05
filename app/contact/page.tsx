"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";
import { BangladeshMap, OFFICES } from "@/components/bangladesh-map";

/* ── Office detail data (addresses pulled from translations) ── */
const OFFICE_DATA = [
  {
    id: "dhaka",
    titleKey: "offices.dhakaTitle" as const,
    lines: [
      "offices.dhakaLine1" as const,
      "offices.dhakaLine2" as const,
      "offices.dhakaLine3" as const,
    ],
    phoneKey: "offices.dhakaPhone" as const,
    emailKey: "offices.dhakaEmail" as const,
    isHQ: true,
  },
  {
    id: "chattogram",
    titleKey: "offices.chattogramTitle" as const,
    lines: [
      "offices.chattogramLine1" as const,
      "offices.chattogramLine2" as const,
      "offices.chattogramLine3" as const,
    ],
    phoneKey: "offices.chattogramPhone" as const,
    emailKey: "offices.chattogramEmail" as const,
    isHQ: false,
  },
  {
    id: "khulna",
    titleKey: "offices.khulnaTitle" as const,
    lines: [
      "offices.khulnaLine1" as const,
      "offices.khulnaLine2" as const,
      "offices.khulnaLine3" as const,
    ],
    phoneKey: "offices.khulnaPhone" as const,
    emailKey: "offices.khulnaEmail" as const,
    isHQ: false,
  },
  {
    id: "mongla",
    titleKey: "offices.monglaPortTitle" as const,
    lines: [
      "offices.monglaPortLine1" as const,
      "offices.monglaPortLine2" as const,
      "offices.monglaPortLine3" as const,
    ],
    phoneKey: "offices.monglaPortPhone" as const,
    emailKey: "offices.monglaPortEmail" as const,
    isHQ: false,
  },
  {
    id: "payra",
    titleKey: "offices.payraTitle" as const,
    lines: [
      "offices.payraLine1" as const,
      "offices.payraLine2" as const,
      "offices.payraLine3" as const,
    ],
    phoneKey: "offices.payraPhone" as const,
    emailKey: "offices.payraEmail" as const,
    isHQ: false,
  },
];

/* ── Icons ── */
function MapPinIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.11 12a19.79 19.79 0 01-3-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/* ── Main page ── */
export default function ContactPage() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>("dhaka");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const displayId = hoveredId ?? activeId;
  const activeOffice = OFFICE_DATA.find((o) => o.id === displayId) ?? OFFICE_DATA[0];

  return (
    <div className="bg-white">
      <InnerHero title={t("contact.title")} subtitle={t("contact.subtitle")} />

      {/* ══ SECTION 1: BGN-style Bangladesh Map + Office Tabs ══ */}
      <section className="bg-[#07111f] py-20">
        <div className="mx-auto max-w-[1320px] px-8">

          {/* Section header */}
          <div className="mb-12 text-center">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#49A98F] mb-3">
              Our Presence
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              {t("offices.sectionTitle")}
            </h2>
            <p className="mt-3 text-[#8aa4be] text-sm max-w-xl mx-auto">
              {t("offices.sectionSubtitle")}
            </p>
          </div>

          {/* Map + Sidebar layout */}
          <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">

            {/* ── Map ── */}
            <div className="rounded-2xl overflow-hidden border border-[#1a2d4a] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <BangladeshMap
                activeId={hoveredId ?? activeId}
                onHover={(id) => {
                  setHoveredId(id);
                  if (id) setActiveId(id);
                }}
              />
            </div>

            {/* ── Office tabs + detail ── */}
            <div className="flex flex-col gap-4">
              {/* Office tab buttons */}
              <div className="flex flex-col gap-2">
                {OFFICES.map((office) => {
                  const isActive = activeId === office.id;
                  return (
                    <button
                      key={office.id}
                      type="button"
                      onClick={() => setActiveId(office.id)}
                      onMouseEnter={() => setHoveredId(office.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 border ${
                        isActive
                          ? "bg-[#49A98F]/10 border-[#49A98F]/40 text-white"
                          : "bg-white/4 border-[#1a2d4a] text-[#8aa4be] hover:bg-white/6 hover:border-[#2a4a7f] hover:text-white"
                      }`}
                    >
                      {/* Pin indicator */}
                      <span className={`h-2.5 w-2.5 rounded-full shrink-0 transition-colors ${
                        isActive ? "bg-[#49A98F]" : "bg-[#2a4a7f]"
                      }`} />
                      <span>
                        <span className="block text-[13px] font-semibold leading-tight">
                          {office.label}
                        </span>
                        <span className={`text-[11px] ${isActive ? "text-[#49A98F]" : "text-[#4a6a8a]"}`}>
                          {office.sublabel}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active office detail card */}
              <div className="rounded-2xl border border-[#1a2d4a] bg-[#0d1e35] p-6 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-[15px] font-bold text-white leading-tight">
                      {t(activeOffice.titleKey)}
                    </h3>
                    {activeOffice.isHQ && (
                      <span className="mt-1 inline-block rounded-full bg-[#49A98F]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#49A98F]">
                        Head Office
                      </span>
                    )}
                  </div>
                  {/* Animated dot */}
                  <span className="mt-1 flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#49A98F] opacity-40" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#49A98F]" />
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Address */}
                  <div className="flex gap-3 text-[#8aa4be]">
                    <MapPinIcon />
                    <p className="text-[13px] leading-relaxed">
                      {activeOffice.lines.map((k) => t(k)).filter(Boolean).join(", ")}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3 text-[#8aa4be]">
                    <PhoneIcon />
                    <a
                      href={`tel:${t(activeOffice.phoneKey).replace(/[^+\d]/g, "")}`}
                      className="text-[13px] hover:text-[#49A98F] transition-colors"
                    >
                      {t(activeOffice.phoneKey)}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex gap-3 text-[#8aa4be]">
                    <EmailIcon />
                    <a
                      href={`mailto:${t(activeOffice.emailKey)}`}
                      className="text-[13px] hover:text-[#49A98F] transition-colors"
                    >
                      {t(activeOffice.emailKey)}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: Contact Form ══ */}
      <section className="mx-auto grid w-full max-w-[1200px] gap-10 px-8 py-20 md:grid-cols-2">

        {/* Contact info */}
        <div>
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#49A98F] mb-3">
            Get In Touch
          </p>
          <h2 className="text-2xl font-bold text-[#1D2E54] mb-4">
            {t("contact.contactInfo")}
          </h2>
          <p className="text-[#5a6a7d] text-sm leading-relaxed mb-5">
            {t("contact.contactInfoDesc")}
          </p>

          {/* Phone */}
          <div className="mb-5 flex items-start gap-3 rounded-xl border border-[#e2eaf2] bg-[#f6faff] px-4 py-3">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#3B71B5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.11 12a19.79 19.79 0 01-3-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#3B71B5] mb-0.5">Phone</p>
              <a href="tel:+880258811819" className="block text-[13px] text-[#1D2E54] hover:text-[#49A98F] transition-colors">+880 258811819</a>
              <a href="tel:+8802222286574" className="block text-[13px] text-[#1D2E54] hover:text-[#49A98F] transition-colors">+880 2222286574</a>
            </div>
          </div>

          {/* Department emails */}
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#8a9ab0] mb-3">Contact by Department</p>
          <div className="space-y-2">
            {[
              { dept: "General Inquiry", email: "info@rivertyneltd.com" },
              { dept: "Operations", email: "ops@rivertyneltd.com" },
              { dept: "Accounts", email: "accounts@rivertyneltd.com" },
              { dept: "Husbandry & Logistics", email: "husbandry@rivertyneltd.com" },
            ].map(({ dept, email }) => (
              <div key={email} className="flex items-center justify-between rounded-xl border border-[#e2eaf2] bg-[#f6faff] px-4 py-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#3B71B5]">{dept}</p>
                  <a href={`mailto:${email}`} className="text-[13px] text-[#415165] hover:text-[#49A98F] transition-colors">{email}</a>
                </div>
                <svg className="h-3.5 w-3.5 text-[#3B71B5] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          className="space-y-5"
          action="https://formspree.io/f/xnjwvawe"
          method="POST"
        >
          <h2 className="text-2xl font-bold text-[#1D2E54]">
            {t("contact.sendMessage")}
          </h2>

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#3f4f61]">
              {t("contact.fullName")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={t("contact.namePlaceholder")}
              className="field"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#3f4f61]">
              {t("contact.emailLabel")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t("contact.emailPlaceholder")}
              className="field"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#3f4f61]">
              {t("contact.company")}
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder={t("contact.companyPlaceholder")}
              className="field"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#3f4f61]">
              {t("contact.projectDetails")}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t("contact.messagePlaceholder")}
              rows={5}
              className="field resize-none"
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center">
            {t("contact.sendInquiry")}
          </button>
        </form>
      </section>
    </div>
  );
}
