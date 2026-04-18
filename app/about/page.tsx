"use client";

import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      <InnerHero title={t("about.title")} subtitle={t("about.subtitle")} />
      <section className="mx-auto w-full max-w-[1200px] space-y-8 px-6 py-14">
        <article className="info-card">
          <h2>Our Vision</h2>
          <p>
            Universe Shipping Lines aspires to be a recognized leader in
            delivering world-class Ship Management and Marine Services,
            consistently supporting clients in achieving and exceeding their
            commercial and operational objectives while building long-term
            sustainable business partnerships.
          </p>
          <p>
            We aim to establish Universe Shipping Lines as a benchmark
            organization within the global shipping industry, setting standards
            in business ethics, customer satisfaction, stakeholder value
            creation, safety, environmental protection, quality excellence,
            financial strength, operational reliability, technical excellence,
            and employee development and retention.
          </p>
        </article>

        <article className="info-card">
          <h2>Our Mission</h2>
          <p>
            Universe Shipping Lines is committed to delivering high-quality,
            customized maritime services in full compliance with all applicable
            legal, regulatory, and client requirements.
          </p>
          <p>
            Our mission is to ensure safe, efficient, and environmentally
            responsible operations that protect human life and health, the
            marine environment, company assets, client property, and vessel
            integrity. Senior Management and employees remain dedicated to
            maintaining the highest standards of safety, quality, security, and
            environmental stewardship while fostering a culture of continuous
            improvement and risk prevention.
          </p>
        </article>

        <article className="info-card">
          <h2>Our Objectives</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
            <li>Zero incidents and accidents</li>
            <li>Zero oil spills</li>
            <li>Continuous reduction of emissions</li>
            <li>Zero occupational health incidents</li>
            <li>Prevention of marine and atmospheric pollution</li>
            <li>Zero security breaches</li>
            <li>Protection of assets and prevention of property damage</li>
          </ul>
        </article>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="info-card">
            <h2>{t("about.whoWeAre")}</h2>
            <p>{t("about.whoWeAreDesc")}</p>
          </article>
          <article className="info-card">
            <h2>{t("about.certifications")}</h2>
            <p>{t("about.certificationsDesc")}</p>
          </article>
        </div>
      </section>
    </div>
  );
}
