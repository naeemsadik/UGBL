"use client";

import servicesBg from "@/assets/logistic.png";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { useTranslation } from "@/lib/language-context";

export default function LogisticsAgencyPage() {
  const { t } = useTranslation();

  const readMoreLinks = [
    { label: t("service.portAgency.title"), href: "/services/port-agency" },
    { label: t("service.opacpa.title"), href: "/services/opa-cpa-agency" },
    { label: t("service.husbandry.title"), href: "/services/husbandry-agency" },
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
      title={t("service.logistics.title")}
      subtitle={t("service.logistics.subtitle")}
      heroImage={servicesBg}
      overviewTitle={t("service.logistics.overviewTitle")}
      overview={t("service.logistics.overview")}
      serviceItems={[
        t("service.logistics.item1"),
        t("service.logistics.item2"),
        t("service.logistics.item3"),
        t("service.logistics.item4"),
        t("service.logistics.item5"),
        t("service.logistics.item6"),
        t("service.logistics.item7"),
        t("service.logistics.item8"),
        t("service.logistics.item9"),
        t("service.logistics.item10"),
        t("service.logistics.item11"),
        t("service.logistics.item12"),
      ]}
      ctaTitle={t("service.logistics.ctaTitle")}
      ctaText={t("service.logistics.ctaText")}
      ctaLabel={t("service.common.contactUs")}
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
