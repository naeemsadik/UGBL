"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";
import { BangladeshMap, OFFICES } from "@/components/bangladesh-map";
import contactBg from "@/assets/contactus.jpg";

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

  // Form state
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [showModal, setShowModal] = useState(false);

  const displayId = hoveredId ?? activeId;
  const activeOffice = OFFICE_DATA.find((o) => o.id === displayId) ?? OFFICE_DATA[0];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const submitStatus = params.get("submit");
    if (submitStatus === "success") {
      setStatus("success");
      setShowModal(true);
    } else if (submitStatus === "error") {
      setStatus("error");
      setShowModal(true);
    } else {
      return;
    }

    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.delete("submit");
    nextUrl.searchParams.delete("requestId");
    window.history.replaceState({}, "", `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
    console.info("[contact] submit:start", {
      name: data.name,
      email: data.email,
      company: data.company,
      messageLength: data.message.length,
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await response.json().catch(() => null);
      console.info("[contact] submit:response", {
        ok: response.ok,
        status: response.status,
        payload,
      });

      if (response.ok) {
        setStatus("success");
        setShowModal(true);
        form.reset();
      } else {
        console.error("Contact API error:", payload?.error ?? `HTTP ${response.status}`);
        setStatus("error");
        setShowModal(true);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setShowModal(true);
    }
  };

  return (
    <div className="bg-white">
      <InnerHero title={t("contact.title")} subtitle={t("contact.subtitle")} backgroundImage={contactBg} />

      {/* ══ SECTION 1: BGN-style Bangladesh Map + Office Tabs ══ */}
      <section
        className="py-20"
        style={{
          background: "hsla(0, 0%, 100%, 1)",
          backgroundImage:
            "linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(200, 96%, 43%, 1) 100%)",
        }}
      >
        <div className="mx-auto max-w-[1320px] px-8">

          {/* Section header */}
          <div className="mb-12 text-center">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#49A98F] mb-3">
              Our Presence
            </p>
            <h2 className="text-3xl font-bold text-[#0d1e35] md:text-4xl">
              {t("offices.sectionTitle")}
            </h2>
            <p className="mt-3 text-[#2b4b6b] text-sm max-w-xl mx-auto">
              {t("offices.sectionSubtitle")}
            </p>
          </div>

          {/* Map + Sidebar layout */}
          <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">

            {/* ── Map ── */}
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
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
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 border backdrop-blur-md shadow-sm ${
                        isActive
                          ? "bg-white/80 border-[#49A98F]/50 shadow-[0_4px_20px_rgba(73,169,143,0.15)]"
                          : "bg-white/50 border-white/40 hover:bg-white/70 hover:border-white/60 hover:shadow-md"
                      }`}
                    >
                      {/* Pin indicator */}
                      <span className={`h-2.5 w-2.5 rounded-full shrink-0 transition-colors ${
                        isActive ? "bg-[#49A98F]" : "bg-[#1D2E54]/40"
                      }`} />
                      <span>
                        <span className="block text-[13px] font-semibold leading-tight text-[#0d1e35]">
                          {office.label}
                        </span>
                        <span className={`text-[11px] ${isActive ? "text-[#49A98F] font-medium" : "text-[#1D2E54]/60"}`}>
                          {office.sublabel}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active office detail card */}
              <div className="rounded-2xl border border-white/20 bg-[#0d1e35] p-6 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
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
          onSubmit={handleSubmit}
          method="post"
          action="/api/contact"
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
              disabled={status === "submitting"}
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
              disabled={status === "submitting"}
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
              disabled={status === "submitting"}
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
              disabled={status === "submitting"}
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? t("contact.sending") : t("contact.sendInquiry")}
          </button>
        </form>
      </section>

      {/* ══ Status Modal ══ */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#07111f]/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-[#e2eaf2] text-center animate-in zoom-in-95 duration-300">
            <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
              status === "success" ? "bg-[#49A98F]/10 text-[#49A98F]" : "bg-red-50 text-red-500"
            }`}>
              {status === "success" ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <h3 className="text-xl font-bold text-[#1D2E54] mb-2">
              {status === "success" ? t("contact.successTitle") : t("contact.errorTitle")}
            </h3>
            <p className="text-[#5a6a7d] text-sm leading-relaxed mb-8">
              {status === "success" ? t("contact.successMessage") : t("contact.errorMessage")}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="btn-primary w-full justify-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}