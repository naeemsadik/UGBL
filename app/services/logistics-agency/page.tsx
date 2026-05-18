"use client";

import servicesBg from "@/assets/logistic.png";
import { ServiceDetailPage } from "@/components/service-detail-page";
<<<<<<< Updated upstream
import { downloadLinks } from "@/lib/data/downloads";

const readMoreLinks = [
  { label: "Port & OPA/CPA Agency", href: "/services/port-agency" },
  { label: "Husbandry Services", href: "/services/husbandry-agency" },
  { label: "Brokering", href: "/services/brokering" },
];

const contact = {
  phone: "+880-2588-11819",
  email: "info@rivertyneltd.com",
  contactHref: "/contact",
  contactLabel: "Send Message",
};
=======
import { useTranslation } from "@/lib/language-context";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      title="Logistics Services"
      subtitle="End-to-end logistics solutions covering inland transportation, warehousing, and multimodal cargo delivery."
=======
      title={t("service.logistics.title")}
      subtitle={t("service.logistics.subtitle")}
>>>>>>> Stashed changes
      heroImage={servicesBg}
      overviewTitle={t("service.logistics.overviewTitle")}
      overview={t("service.logistics.overview")}
      serviceItems={[
<<<<<<< Updated upstream
        "Road and river transportation",
        "Tug boat, launch, and barge supply",
        "Crane hire",
        "Warehouse facilities",
        "Loading and unloading operations",
        "Clearing and forwarding services",
        "Re-exporting of import cargo",
        "Sea and air freight",
        "Chopper hire",
        "Lightening and STS",
        "Freight forwarding",
=======
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
>>>>>>> Stashed changes
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
