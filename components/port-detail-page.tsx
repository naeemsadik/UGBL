"use client";

import Link from "next/link";
import type { StaticImageData } from "next/image";
import { Download, BookOpen, Phone, Mail } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";

type PortFact = {
  label: string;
  value: string;
  description: string;
};

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

type TechnicalSection = {
  title: string;
  items: { label: string; value: string; description?: string }[];
};

type BerthRestriction = {
  name: string;
  maxLOA?: string;
  maxDraft?: string;
  details?: string;
};

type LNGTerminalInfo = {
  name: string;
  location?: string;
  position?: string;
  maxDWT?: string;
  maxDisplacement?: string;
  maxLOA?: string;
  maxDraft?: string;
  maxBerthingSpeed?: string;
};

type PortDetailPageProps = {
  title: string;
  subtitle: string;
  heroImage: StaticImageData;
  overviewTitle: string;
  overview: string;
  facts: PortFact[];
  mapTitle: string;
  mapDescription: string;
  mapQuery: string;
  notesTitle: string;
  notes: string[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
  readMoreLinks: SidebarLink[];
  downloadLinks: SidebarLink[];
  contact: SidebarContact;
  technicalSections?: TechnicalSection[];
  berthRestrictions?: {
    title: string;
    items: BerthRestriction[];
  };
  lngTerminals?: LNGTerminalInfo[];
};

export function PortDetailPage({
  title,
  subtitle,
  heroImage,
  overviewTitle,
  overview,
  facts,
  mapTitle,
  mapDescription,
  mapQuery,
  notesTitle,
  notes,
  ctaTitle,
  ctaText,
  ctaLabel,
  ctaHref,
  readMoreLinks,
  downloadLinks,
  contact,
  technicalSections,
  berthRestrictions,
  lngTerminals,
}: PortDetailPageProps) {
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  return (
    <div className="bg-slate-50">
      <InnerHero
        title={title}
        subtitle={subtitle}
        image={heroImage}
      />

      <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-[80%_20%] lg:items-start gap-8">

          <div className="grid gap-8">
            <div className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
              <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                Port profile
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-5xl">
                {overviewTitle}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                {overview}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#3B71B5]">
                      {fact.label}
                    </p>
                    <p className="mt-3 text-2xl font-black tracking-tight text-[#1D2E54]">
                      {fact.value}
                    </p>
                    {fact.description && (
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {fact.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Sections */}
            {technicalSections?.map((section) => (
              <div key={section.title} className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
                <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                  Technical Specs
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {section.items.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                      <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#3B71B5]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-bold text-[#1D2E54]">
                        {item.value}
                      </p>
                      {item.description && (
                        <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Berth Restrictions */}
            {berthRestrictions && (
              <div className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
                <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                  Restrictions
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-4xl">
                  {berthRestrictions.title}
                </h2>
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="pb-4 font-black uppercase tracking-wider text-slate-500">Berth/Jetty</th>
                        <th className="pb-4 font-black uppercase tracking-wider text-slate-500">Max LOA</th>
                        <th className="pb-4 font-black uppercase tracking-wider text-slate-500">Max Draft</th>
                        <th className="pb-4 font-black uppercase tracking-wider text-slate-500">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {berthRestrictions.items.map((item) => (
                        <tr key={item.name} className="group hover:bg-slate-50/50">
                          <td className="py-4 font-bold text-[#1D2E54]">{item.name}</td>
                          <td className="py-4 text-slate-600">{item.maxLOA || "—"}</td>
                          <td className="py-4 text-slate-600">{item.maxDraft || "—"}</td>
                          <td className="py-4 text-slate-600">{item.details || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* LNG Terminals */}
            {lngTerminals && lngTerminals.length > 0 && (
              <div className="rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
                <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                  Specialized Terminals
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-4xl">
                  LNG Terminal Information
                </h2>
                <div className="mt-8 grid gap-6">
                  {lngTerminals.map((terminal) => (
                    <div key={terminal.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-black text-[#1D2E54]">{terminal.name}</h3>
                      {terminal.location && <p className="mt-1 text-sm text-slate-500">{terminal.location}</p>}
                      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {terminal.position && (
                          <div>
                            <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#3B71B5]">Position</p>
                            <p className="mt-1 text-sm font-bold text-slate-700">{terminal.position}</p>
                          </div>
                        )}
                        {terminal.maxDWT && (
                          <div>
                            <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#3B71B5]">Max DWT</p>
                            <p className="mt-1 text-sm font-bold text-slate-700">{terminal.maxDWT}</p>
                          </div>
                        )}
                        {terminal.maxDisplacement && (
                          <div>
                            <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#3B71B5]">Max Displacement</p>
                            <p className="mt-1 text-sm font-bold text-slate-700">{terminal.maxDisplacement}</p>
                          </div>
                        )}
                        {terminal.maxLOA && (
                          <div>
                            <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#3B71B5]">Max LOA</p>
                            <p className="mt-1 text-sm font-bold text-slate-700">{terminal.maxLOA}</p>
                          </div>
                        )}
                        {terminal.maxDraft && (
                          <div>
                            <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#3B71B5]">Max Draft</p>
                            <p className="mt-1 text-sm font-bold text-slate-700">{terminal.maxDraft}</p>
                          </div>
                        )}
                        {terminal.maxBerthingSpeed && (
                          <div>
                            <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#3B71B5]">Max Berthing Speed</p>
                            <p className="mt-1 text-sm font-bold text-slate-700">{terminal.maxBerthingSpeed}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[28px] bg-[#1D2E54] p-8 text-white shadow-[0_24px_70px_rgba(29,46,84,0.28)] md:p-10">
              <p className="text-[0.7rem] font-black uppercase tracking-[0.24em] text-white/55">
                {notesTitle}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-200">
                {ctaText}
              </p>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                {notes.map((note, index) => (
                  <div
                    key={note}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-black text-white">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-200">{note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-white/55">
                  {ctaTitle}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  Support this port with agency coordination, cargo planning, and responsive communication.
                </p>
                <Link
                  href={ctaHref}
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-[#1D2E54] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>


            <section className="rounded-[28px] border border-white/60 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8">
              <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                {mapTitle}
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-5xl">
                Location map
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                {mapDescription}
              </p>
              <a
                href={mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1D2E54] px-5 py-3 text-sm font-black text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Open in Google Maps
              </a>

              <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
                <iframe
                  title={`${title} map`}
                  src={mapEmbedUrl}
                  className="h-[520px] w-full md:h-[720px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>

          </div>

          <div className="grid gap-8">
            {/* Read More Section */}
            <div className="rounded-[20px] border border-white/60 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#3B71B5]" />
                <h3 className="text-xs font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                  Read More
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
                    className="block rounded-lg border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-3 text-xs font-bold text-slate-700 transition-all hover:border-[#3B71B5] hover:bg-blue-50"
                  >
                    {link.label}
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