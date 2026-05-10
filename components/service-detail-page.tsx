"use client";

import Link from "next/link";
import type { StaticImageData } from "next/image";
import { Download, BookOpen, Phone, Mail } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";

interface SidebarLink {
  label: string;
  href: string;
}

interface SidebarContact {
  phone: string;
  email: string;
  contactHref: string;
  contactLabel: string;
}

type ServiceDetailPageProps = {
  title: string;
  subtitle: string;
  heroImage: StaticImageData | string;
  overviewTitle: string;
  overview: string | string[];
  /** Optional bullet list of services offered */
  serviceItems?: string[];
  /** Optional additional paragraphs */
  additionalSections?: {
    title: string;
    content: string;
  }[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
  readMoreLinks: SidebarLink[];
  downloadLinks: SidebarLink[];
  contact: SidebarContact;
};

export function ServiceDetailPage({
  title,
  subtitle,
  heroImage,
  overviewTitle,
  overview,
  serviceItems,
  additionalSections,
  ctaTitle,
  ctaText,
  ctaLabel,
  ctaHref,
  readMoreLinks,
  downloadLinks,
  contact,
}: ServiceDetailPageProps) {
  return (
    <div className="bg-slate-50">
      <InnerHero
        title={title}
        subtitle={subtitle}
        backgroundImage={heroImage}
      />

      <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-[80%_20%] lg:items-start gap-8">

          <div className="grid gap-8">
            {/* Overview */}
            <div className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
              <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                Service overview
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-5xl">
                {overviewTitle}
              </h2>
              <div className="mt-5 max-w-none space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
                {Array.isArray(overview) ? (
                  overview.map((paragraph, index) => (
                    <p key={`overview-${index}`}>{paragraph}</p>
                  ))
                ) : (
                  <p>{overview}</p>
                )}
              </div>
            </div>

            {/* Service Items List */}
            {serviceItems && serviceItems.length > 0 && (
              <div className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
                <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                  What we offer
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-4xl">
                  Our Services
                </h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {[
                    serviceItems.slice(0, Math.ceil(serviceItems.length / 2)),
                    serviceItems.slice(Math.ceil(serviceItems.length / 2)),
                  ].map((items, columnIndex) => (
                    <div
                      key={`services-col-${columnIndex}`}
                      className={
                        columnIndex === 0
                          ? "rounded-2xl border border-[#1D2E54]/10 bg-[#F3F7FF] p-5"
                          : "rounded-2xl border border-[#49A98F]/12 bg-[#F2FBF8] p-5"
                      }
                    >
                      <ul className="list-disc space-y-3 pl-5 text-lg font-semibold leading-6 text-slate-700">
                        {items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Sections */}
            {additionalSections?.map((section) => (
              <div key={section.title} className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
                <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                  Details
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-5 max-w-none text-base leading-relaxed text-slate-600 md:text-lg">
                  {section.content}
                </p>
              </div>
            ))}

            {/* CTA Block */}
            <div className="rounded-[28px] bg-[#1D2E54] p-8 text-white shadow-[0_24px_70px_rgba(29,46,84,0.28)] md:p-10">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-white/55">
                  {ctaTitle}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  {ctaText}
                </p>
                <Link
                  href={ctaHref}
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-[#1D2E54] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="grid gap-8">
            {/* Read More / Other Services */}
            <div className="rounded-[20px] border border-white/60 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#3B71B5]" />
                <h3 className="text-xs font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                  Other Services
                </h3>
              </div>
              <div className="space-y-2">
                {readMoreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-3 text-xs font-bold text-slate-700 transition-all hover:border-[#3B71B5] hover:bg-blue-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Download Section */}
            <div className="rounded-[20px] border border-white/60 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="mb-4 flex items-center gap-2">
                <Download className="h-5 w-5 text-[#3B71B5]" />
                <h3 className="text-xs font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                  Download
                </h3>
              </div>
              <div className="space-y-2">
                {downloadLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-lg border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-3 text-xs font-bold text-slate-700 transition-all hover:border-[#3B71B5] hover:bg-blue-50"
                  >
                    <span>{link.label}</span>
                    <Download className="h-4 w-4 text-[#3B71B5] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Section */}
           <div className="rounded-[20px] border border-white/60 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#3B71B5]" />
                <h3 className="text-xs font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                  Contact Us
                </h3>
              </div>
              <div className="space-y-3">
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-3 text-xs font-bold text-slate-700 transition-all hover:border-[#3B71B5] hover:bg-blue-50"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{contact.phone}</span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-3 text-xs font-bold text-slate-700 transition-all hover:border-[#3B71B5] hover:bg-blue-50"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="truncate">{contact.email}</span>
                </a>
                <Link
                  href={contact.contactHref}
                  className="block rounded-lg border border-[#1D2E54] bg-[#1D2E54] p-3 text-center text-xs font-bold text-white transition-all hover:bg-[#3B71B5]"
                >
                  {contact.contactLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}