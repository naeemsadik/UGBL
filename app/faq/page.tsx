"use client";

import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";

export default function FaqPage() {
  const { t } = useTranslation();

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  return (
    <div>
      <InnerHero title={t("faq.title")} subtitle={t("faq.subtitle")} />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="space-y-5">
          {faqs.map((item) => (
            <article key={item.q} className="info-card">
              <h2>{item.q}</h2>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
