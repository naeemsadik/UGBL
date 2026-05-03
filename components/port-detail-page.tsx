import Link from "next/link";
import type { StaticImageData } from "next/image";
import { InnerHero } from "@/components/inner-hero";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PortFact = {
  label: string;
  value: string;
  description: string;
};

type PortDetailPageProps = {
  title: string;
  subtitle: string;
  heroImage: StaticImageData;
  breadcrumbs: Breadcrumb[];
  overviewTitle: string;
  overview: string;
  facts: PortFact[];
  notesTitle: string;
  notes: string[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
};

export function PortDetailPage({
  title,
  subtitle,
  heroImage,
  breadcrumbs,
  overviewTitle,
  overview,
  facts,
  notesTitle,
  notes,
  ctaTitle,
  ctaText,
  ctaLabel,
  ctaHref,
}: PortDetailPageProps) {
  return (
    <div className="bg-slate-50">
      <InnerHero
        title={title}
        subtitle={subtitle}
        image={heroImage}
        breadcrumbs={breadcrumbs}
      />

      <section className="mx-auto w-full max-w-[1400px] px-6 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
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
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

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
        </div>
      </section>
    </div>
  );
}