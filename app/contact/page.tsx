"use client";

import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div>
      <InnerHero title={t("contact.title")} subtitle={t("contact.subtitle")} />
      <section className="mx-auto grid w-full max-w-[1200px] gap-8 px-6 py-14 md:grid-cols-2">
        <div className="info-card">
          <h2>{t("contact.contactInfo")}</h2>
          <p>{t("contact.contactInfoDesc")}</p>
          <div className="mt-6 space-y-2 text-base text-[#415165]">
            <p>{t("contact.email")}</p>
            <p>{t("contact.phone")}</p>
            <p>{t("contact.hours")}</p>
          </div>
        </div>

        <form className="info-card space-y-5">
          <h2>{t("contact.sendMessage")}</h2>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-[#3f4f61]">
              {t("contact.fullName")}
            </label>
            <input id="name" type="text" placeholder={t("contact.namePlaceholder")} className="field" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-[#3f4f61]">
              {t("contact.emailLabel")}
            </label>
            <input
              id="email"
              type="email"
              placeholder={t("contact.emailPlaceholder")}
              className="field"
            />
          </div>
          <div>
            <label htmlFor="company" className="mb-2 block text-sm text-[#3f4f61]">
              {t("contact.company")}
            </label>
            <input id="company" type="text" placeholder={t("contact.companyPlaceholder")} className="field" />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-[#3f4f61]">
              {t("contact.projectDetails")}
            </label>
            <textarea
              id="message"
              placeholder={t("contact.messagePlaceholder")}
              rows={5}
              className="field resize-none"
            />
          </div>
          <button type="submit" className="hero-btn-primary w-full justify-center">
            {t("contact.sendInquiry")}
          </button>
        </form>
      </section>
    </div>
  );
}
