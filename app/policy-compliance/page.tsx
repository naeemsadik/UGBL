"use client";

import policyHero from "@/assets/Policy and Complainace .webp";
import { InnerHero } from "@/components/inner-hero";
import { useTranslation } from "@/lib/language-context";

export default function PolicyCompliancePage() {
  const { t } = useTranslation();

  const policies = [
    {
      title: t("policy.quality.title"),
      summary: t("policy.quality.summary"),
    },
    {
      title: t("policy.hse.title"),
      summary: t("policy.hse.summary"),
    },
    {
      title: t("policy.energy.title"),
      summary: t("policy.energy.summary"),
    },
    {
      title: t("policy.security.title"),
      summary: t("policy.security.summary"),
      intro: t("policy.security.intro"),
      footer: t("policy.security.footer"),
    },
    {
      title: t("policy.drug.title"),
      summary: t("policy.drug.summary"),
      intro: t("policy.drug.intro"),
      bullets: [
        t("policy.drug.b1"),
        t("policy.drug.b2"),
        t("policy.drug.b3"),
        t("policy.drug.b4"),
      ],
    },
    {
      title: t("policy.risk.title"),
      summary: t("policy.risk.summary"),
      intro: t("policy.risk.intro"),
      bullets: [
        t("policy.risk.b1"),
        t("policy.risk.b2"),
        t("policy.risk.b3"),
        t("policy.risk.b4"),
      ],
      footer: t("policy.risk.footer"),
    },
    {
      title: t("policy.hr.title"),
      summary: t("policy.hr.summary"),
      intro: t("policy.hr.intro"),
      sections: [
        {
          label: t("policy.hr.shoreLabel"),
          bullets: [
            t("policy.hr.shoreB1"),
            t("policy.hr.shoreB2"),
            t("policy.hr.shoreB3"),
          ],
        },
        {
          label: t("policy.hr.seafarersLabel"),
          bullets: [
            t("policy.hr.seafarersB1"),
            t("policy.hr.seafarersB2"),
            t("policy.hr.seafarersB3"),
          ],
        },
      ],
    },
    {
      title: t("policy.purchasing.title"),
      summary: t("policy.purchasing.summary"),
      intro: t("policy.purchasing.intro"),
      bullets: [
        t("policy.purchasing.b1"),
        t("policy.purchasing.b2"),
        t("policy.purchasing.b3"),
        t("policy.purchasing.b4"),
      ],
    },
    {
      title: t("policy.social.title"),
      summary: t("policy.social.summary"),
      intro: t("policy.social.intro"),
      footer: t("policy.social.footer"),
    },
    {
      title: t("policy.cyber.title"),
      summary: t("policy.cyber.summary"),
      intro: t("policy.cyber.intro"),
      bulletsLabel: t("policy.cyber.bulletsLabel"),
      bullets: [
        t("policy.cyber.b1"),
        t("policy.cyber.b2"),
        t("policy.cyber.b3"),
        t("policy.cyber.b4"),
        t("policy.cyber.b5"),
      ],
    },
  ];

  const ethicsPoints = [
    t("policy.ethics.p1"),
    t("policy.ethics.p2"),
    t("policy.ethics.p3"),
    t("policy.ethics.p4"),
    t("policy.ethics.p5"),
  ];

  const hseqPoints = [
    t("policy.hseq.p1"),
    t("policy.hseq.p2"),
    t("policy.hseq.p3"),
    t("policy.hseq.p4"),
    t("policy.hseq.p5"),
  ];

  return (
    <div>
      <InnerHero
        title={t("policy.heroTitle")}
        subtitle={t("policy.heroSubtitle")}
        backgroundImage={policyHero}
      />

      <section className="mx-auto w-full max-w-[1200px] space-y-8 px-6 py-14">
        <article className="info-card">
          <h2>{t("policy.ourCommitment")}</h2>
          <p>{t("policy.commitmentP1")}</p>
          <p className="mt-4">{t("policy.commitmentP2")}</p>
        </article>

        <article className="info-card">
          <h2>{t("policy.corporatePolicies")}</h2>
          <p className="mt-3 text-[1.04rem] leading-[1.75] text-[#4a586d]">
            Our operations are governed by a comprehensive Integrated Management System (IMS), supported by:
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1D2E54]/10 bg-[#F3F7FF] p-5">
              <ul className="list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
                <li>{t("policy.quality.title")}</li>
                <li>{t("policy.hse.title")}</li>
                <li>{t("policy.energy.title")}</li>
                <li>{t("policy.security.title")}</li>
                <li>{t("policy.drug.title")}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#49A98F]/12 bg-[#F2FBF8] p-5">
              <ul className="list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
                <li>{t("policy.risk.title")}</li>
                <li>{t("policy.hr.title")}</li>
                <li>{t("policy.purchasing.title")}</li>
                <li>{t("policy.social.title")}</li>
                <li>{t("policy.cyber.title")}</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="info-card !border-[#1D2E54]/10 !bg-[#F3F7FF]">
            <h2>{t("policy.codeOfEthics")}</h2>
            <p className="mt-3 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              River Tyne Ltd promotes integrity, professionalism, and accountability across all business activities.
            </p>
            <ul className="mt-3 list-disc space-y-3 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              {ethicsPoints.map((item) => {
                const [title, ...rest] = item.split(":");
                const description = rest.join(":");
                return (
                  <li key={item}>
                    <span className="font-bold text-[#1D2E54] glazy-title">
                      {title}
                    </span>
                    {description && `:${description}`}
                  </li>
                );
              })}
            </ul>
          </article>

          <article className="info-card !border-[#49A98F]/12 !bg-[#F2FBF8]">
            <h2>{t("policy.hseq")}</h2>
            <p className="mt-3 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              Health, Safety, Environmental protection, and Quality management form the foundation of our operations.
            </p>
            <p className="mt-3 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              Objectives:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              {hseqPoints.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              River Tyne Ltd is committed to achieving Zero Accidents and Zero Pollution.
            </p>
          </article>
        </div>

        <article className="info-card">
          <h2>{t("policy.policyAreas")}</h2>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#dfe8f2] bg-[#f8fbff] p-5"
              >
                <h3 className="text-lg font-semibold text-[#1d2e54]">
                  {policy.title}
                </h3>
                <p className="mt-2 text-[1rem] leading-[1.7] text-[#4a586d]">
                  {policy.summary}
                </p>
                {policy.intro && (
                  <p className="mt-2 text-[1rem] leading-[1.7] text-[#4a586d]">
                    {policy.intro}
                  </p>
                )}
                {policy.bulletsLabel && (
                  <p className="mt-3 text-[1rem] leading-[1.7] text-[#4a586d]">
                    {policy.bulletsLabel}
                  </p>
                )}
                {policy.bullets && (
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-[1rem] leading-[1.7] text-[#4a586d]">
                    {policy.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {policy.sections?.map((section) => (
                  <div key={section.label} className="mt-3">
                    <p className="font-semibold text-[1rem] leading-[1.7] text-[#4a586d]">
                      {section.label}
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-6 text-[1rem] leading-[1.7] text-[#4a586d]">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {policy.footer && (
                  <p className="mt-3 text-[1rem] leading-[1.7] text-[#4a586d]">
                    {policy.footer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </article>

        <article className="info-card">
          <h2>{t("policy.continuousImprovement")}</h2>
          <p>{t("policy.improvementDesc")}</p>
        </article>
      </section>
    </div>
  );
}
