"use client";

import Link from "next/link";
import type { StaticImageData } from "next/image";
import { InnerHero } from "@/components/inner-hero";
import { useTranslation } from "@/lib/language-context";

type ServiceDetailPageProps = {
  title: string;
  subtitle: string;
  heroImage: StaticImageData | string;
  heroImageSize?: string;
  heroImagePosition?: string;
  contentAlignment?: "left" | "right";
  overviewTitle: string;
  overview: string | string[];
  /** Optional badge label above the service items heading */
  serviceItemsLabel?: string | null;
  /** Optional heading for the service items section */
  serviceItemsTitle?: string;
  /** Optional description paragraph below the service items heading */
  serviceDescription?: string;
  /** Optional title displayed after the service description */
  serviceDescriptionTitle?: string;
  /** Optional compact spacing for the service items block */
  serviceItemsCompact?: boolean;
  /** Optional bullet list of services offered */
  serviceItems?: string[];
  /** Optional additional paragraphs with optional service items */
  additionalSections?: {
    title: string;
    content: string;
    /** Controls how the section title is rendered */
    titleStyle?: "badge" | "heading";
    /** Optional badge label for the items section */
    itemsLabel?: string | null;
    /** Optional heading for the items section */
    itemsTitle?: string;
    /** Optional bullet items for this section */
    items?: string[];
    /** Optional compact spacing for the items block */
    itemsCompact?: boolean;
  }[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
  // contact removed: sidebar contact section not shown for services
};

export function ServiceDetailPage({
  title,
  subtitle,
  heroImage,
  heroImageSize,
  heroImagePosition,
  contentAlignment,
  overviewTitle,
  overview,
  serviceItemsLabel,
  serviceItemsTitle,
  serviceDescription,
  serviceDescriptionTitle,
  serviceItemsCompact,
  serviceItems,
  additionalSections,
  ctaTitle,
  ctaText,
  ctaLabel,
  ctaHref,
}: ServiceDetailPageProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50">
      <InnerHero
        title={title}
        subtitle={subtitle}
        backgroundImage={heroImage}
        backgroundSize={heroImageSize}
        backgroundPosition={heroImagePosition}
        contentAlignment={contentAlignment}
      />

      <section className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 py-16 md:py-24 space-y-12 animate-fade-in">
        {/* Card 1: Main Service Content Container */}
        <div className="rounded-[32px] border border-slate-100 bg-white p-6 sm:p-8 md:p-12 xl:p-16 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
          {/* ── Service Overview ──────────────────────── */}
          <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
            {t("service.common.overview")}
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-5xl leading-tight">
            {overviewTitle}
          </h2>
          <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600 md:text-lg w-full">
            {(Array.isArray(overview) ? overview : overview.split("\n\n")).map(
              (paragraph, index) => (
                <p key={`overview-${index}`}>{paragraph}</p>
              )
            )}
          </div>

          {/* ── What We Offer ────────────────────────── */}
          {serviceItems && serviceItems.length > 0 && (
            <div
              className={
                serviceItemsCompact
                  ? "mt-4 border-t border-slate-100 pt-4"
                  : "mt-12 border-t border-slate-100 pt-12"
              }
            >
              {serviceItemsLabel !== null && (
                <span className="inline-flex items-center rounded-full bg-[#49A98F]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#49A98F]">
                  {serviceItemsLabel || t("service.common.whatWeOffer")}
                </span>
              )}
              <h3 className="mt-5 text-2xl font-black tracking-tight text-[#1D2E54] md:text-4xl leading-tight">
                {serviceItemsTitle || t("service.common.ourServices")}
              </h3>
              {serviceDescription && (
                <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
                  {serviceDescription}
                </p>
              )}
              {serviceDescriptionTitle && (
                <h4 className="mt-8 text-xl font-black tracking-tight text-[#1D2E54] md:text-2xl leading-tight">
                  {serviceDescriptionTitle}
                </h4>
              )}
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {[
                  serviceItems.slice(0, Math.ceil(serviceItems.length / 2)),
                  serviceItems.slice(Math.ceil(serviceItems.length / 2)),
                ].map((items, columnIndex) => (
                  <div
                    key={`services-col-${columnIndex}`}
                    className={
                      columnIndex === 0
                        ? "rounded-2xl border border-[#1D2E54]/10 bg-[#F3F7FF] p-6 shadow-sm"
                        : "rounded-2xl border border-[#49A98F]/12 bg-[#F2FBF8] p-6 shadow-sm"
                    }
                  >
                    <ul className="list-disc space-y-3 pl-5 text-base font-semibold leading-relaxed text-slate-700">
                      {items.map((item) => (
                        <li key={item} className="marker:text-[#1D2E54]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Card 2+: Additional Content Sections */}
        {additionalSections && additionalSections.length > 0 && additionalSections.map((section) => (
          <div key={section.title} className="rounded-[32px] border border-slate-100 bg-white p-6 sm:p-8 md:p-12 xl:p-16 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
            {/* ── Section Overview ── */}
            {section.titleStyle === "heading" ? (
              <h3 className="text-2xl font-black tracking-tight text-[#1D2E54] md:text-4xl leading-tight">
                {section.title}
              </h3>
            ) : (
              <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                {section.title}
              </span>
            )}
            <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600 md:text-lg w-full">
              {section.content.split("\n\n").map((paragraph, index) => (
                <p key={`sec-p-${index}`}>{paragraph}</p>
              ))}
            </div>

            {/* ── Section Service Items ──────────── */}
            {section.items && section.items.length > 0 && (
              <div
                className={
                  section.itemsCompact
                    ? "mt-4 border-t border-slate-100 pt-4"
                    : "mt-12 border-t border-slate-100 pt-12"
                }
              >
                {section.itemsLabel !== null && (
                  <span className="inline-flex items-center rounded-full bg-[#49A98F]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#49A98F]">
                    {section.itemsLabel || t("service.common.whatWeOffer")}
                  </span>
                )}
                <h3 className="mt-5 text-2xl font-black tracking-tight text-[#1D2E54] md:text-4xl leading-tight">
                  {section.itemsTitle || t("service.common.ourServices")}
                </h3>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {[
                    section.items.slice(0, Math.ceil(section.items.length / 2)),
                    section.items.slice(Math.ceil(section.items.length / 2)),
                  ].map((items, columnIndex) => (
                    <div
                      key={`sec-items-col-${columnIndex}`}
                      className={
                        columnIndex === 0
                          ? "rounded-2xl border border-[#1D2E54]/10 bg-[#F3F7FF] p-6 shadow-sm"
                          : "rounded-2xl border border-[#49A98F]/12 bg-[#F2FBF8] p-6 shadow-sm"
                      }
                    >
                      <ul className="list-disc space-y-3 pl-5 text-base font-semibold leading-relaxed text-slate-700">
                        {items.map((item) => (
                          <li key={item} className="marker:text-[#1D2E54]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Standalone CTA Banner */}
        <div className="rounded-[24px] bg-[#1D2E54] p-8 text-white shadow-[0_20px_50px_rgba(29,46,84,0.18)] md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-white/55">
                {ctaTitle}
              </p>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-200">
                {ctaText}
              </p>
            </div>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#1D2E54] transition-all duration-300 hover:bg-[#49A98F] hover:text-white hover:-translate-y-0.5 shadow-md shrink-0 self-start md:self-center"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
