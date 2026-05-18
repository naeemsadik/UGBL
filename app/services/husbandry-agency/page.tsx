"use client";

import servicesBg from "@/assets/Husbandry.jpg";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { useTranslation } from "@/lib/language-context";

export default function HusbandryAgencyPage() {
  const { t } = useTranslation();

  const readMoreLinks = [
    { label: t("service.portAgency.title"), href: "/services/port-agency" },
    { label: t("service.opacpa.title"), href: "/services/opa-cpa-agency" },
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
      title={t("service.husbandry.title")}
      subtitle={t("service.husbandry.subtitle")}
      heroImage={servicesBg}
      overviewTitle={t("service.husbandry.overviewTitle")}
      overview={t("service.husbandry.overview")}
      serviceItems={[
        t("service.husbandry.item1"),
        t("service.husbandry.item2"),
        t("service.husbandry.item3"),
        t("service.husbandry.item4"),
        t("service.husbandry.item5"),
        t("service.husbandry.item6"),
        t("service.husbandry.item7"),
        t("service.husbandry.item8"),
        t("service.husbandry.item9"),
        t("service.husbandry.item10"),
        t("service.husbandry.item11"),
        t("service.husbandry.item12"),
      ]}
      additionalSections={[
        {
          title: t("service.husbandry.secTitle"),
          content: t("service.husbandry.secContent"),
        },
      ]}
      ctaTitle={t("service.husbandry.ctaTitle")}
      ctaText={t("service.husbandry.ctaText")}
      ctaLabel={t("service.common.contactUs")}
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
