"use client";

import servicesBg from "@/assets/Port Agency .jpeg";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { useTranslation } from "@/lib/language-context";

export default function PortAgencyPage() {
  const { t } = useTranslation();

  const readMoreLinks = [
    { label: t("service.opacpa.title"), href: "/services/opa-cpa-agency" },
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
      title={t("service.portAgency.title")}
      subtitle={t("service.portAgency.subtitle")}
      heroImage={servicesBg}
      overviewTitle={t("service.portAgency.overviewTitle")}
      overview={t("service.portAgency.overview")}
      serviceItems={[
        t("service.portAgency.item1"),
        t("service.portAgency.item2"),
        t("service.portAgency.item3"),
        t("service.portAgency.item4"),
        t("service.portAgency.item5"),
        t("service.portAgency.item6"),
        t("service.portAgency.item7"),
        t("service.portAgency.item8"),
        t("service.portAgency.item9"),
        t("service.portAgency.item10"),
      ]}
      additionalSections={[
        {
          title: t("service.portAgency.secTitle"),
          content: t("service.portAgency.secContent"),
        },
      ]}
      ctaTitle={t("service.portAgency.ctaTitle")}
      ctaText={t("service.portAgency.ctaText")}
      ctaLabel={t("service.common.contactUs")}
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
