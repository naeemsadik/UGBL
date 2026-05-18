"use client";

import servicesBg from "@/assets/OPA agent.jpg";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { useTranslation } from "@/lib/language-context";

export default function OpaCpaAgencyPage() {
  const { t } = useTranslation();

  const readMoreLinks = [
    { label: t("service.portAgency.title"), href: "/services/port-agency" },
    { label: t("service.husbandry.title"), href: "/services/husbandry-agency" },
    { label: t("service.logistics.title"), href: "/services/logistics-agency" },
  ];

  const downloadLinks = [
    { label: t("service.common.download") + " " + t("about.atGlance.breadcrumbAbout"), href: "/downloads/company-profile.pdf" },
    { label: t("service.common.download") + " " + t("service.common.details"), href: "/downloads/service-brochure.pdf" },
  ];

  const contact = {
    phone: "+880-2588-11819",
    email: "info@rivertyneltd.com",
    contactHref: "/contact",
    contactLabel: t("service.common.contactUs"),
  };

  return (
    <ServiceDetailPage
      title={t("service.opacpa.title")}
      subtitle={t("service.opacpa.subtitle")}
      heroImage={servicesBg}
      overviewTitle={t("service.opacpa.overviewTitle")}
      overview={t("service.opacpa.overview")}
      serviceItems={[
        t("service.opacpa.item1"),
        t("service.opacpa.item2"),
        t("service.opacpa.item3"),
        t("service.opacpa.item4"),
        t("service.opacpa.item5"),
        t("service.opacpa.item6"),
        t("service.opacpa.item7"),
        t("service.opacpa.item8"),
        t("service.opacpa.item9"),
        t("service.opacpa.item10"),
      ]}
      additionalSections={[
        {
          title: t("service.opacpa.secTitle"),
          content: t("service.opacpa.secContent"),
        },
      ]}
      ctaTitle={t("service.opacpa.ctaTitle")}
      ctaText={t("service.opacpa.ctaText")}
      ctaLabel={t("service.common.contactUs")}
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
