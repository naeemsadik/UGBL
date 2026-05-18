"use client";

import { ServiceDetailPage } from "@/components/service-detail-page";
import { useTranslation } from "@/lib/language-context";

const heroImageUrl =
  "https://public.axsmarine.com/wp-content/uploads/2026/05/freight-estimation-shipping.webp";

export default function BrokeringPage() {
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
      title={t("service.brokering.title")}
      subtitle={t("service.brokering.subtitle")}
      heroImage={heroImageUrl}
      heroImageSize="cover"
      heroImagePosition="center 30%"
      contentAlignment="right"
      overviewTitle={t("service.brokering.overviewTitle")}
      overview={t("service.brokering.overview")}
      serviceItems={[
        t("service.brokering.item1"),
        t("service.brokering.item2"),
        t("service.brokering.item3"),
        t("service.brokering.item4"),
        t("service.brokering.item5"),
        t("service.brokering.item6"),
        t("service.brokering.item7"),
        t("service.brokering.item8"),
        t("service.brokering.item9"),
        t("service.brokering.item10"),
        t("service.brokering.item11"),
      ]}
      additionalSections={[
        {
          title: t("service.brokering.secTitle"),
          content: t("service.brokering.secContent"),
        },
        {
          title: t("service.brokering.sec2Title"),
          content: t("service.brokering.sec2Content"),
        },
      ]}
      ctaTitle={t("service.brokering.ctaTitle")}
      ctaText={t("service.brokering.ctaText")}
      ctaLabel={t("service.common.contactUs")}
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
