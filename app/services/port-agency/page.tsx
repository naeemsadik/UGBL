"use client";

import servicesBg from "@/assets/Port Agency .jpeg";
import { ServiceDetailPage } from "@/components/service-detail-page";
<<<<<<< Updated upstream
import { downloadLinks } from "@/lib/data/downloads";

const readMoreLinks = [
  { label: "Husbandry Services", href: "/services/husbandry-agency" },
  { label: "Logistics Services", href: "/services/logistics-agency" },
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
<<<<<<< Updated upstream
      title="Port & OPA/CPA Agency"
      subtitle="Handling vessel arrivals, departures, documentation, and port authority liaison."
      heroImage={servicesBg}
      overviewTitle="Port agency"
      overview={[
        "River Tyne Ltd is a shipping agency in Bangladesh, providing comprehensive maritime services across all the major ports of Bangladesh including Chattogram, Mongla, Payra, Matarbari and other 148 countries of the world, through our Global Agency Network program. We are specialized in serving all types of vessels and handling a wide range of cargoes from international origins to final delivery destinations within the country, ensuring efficient, reliable, and compliant port operations tailored to each consignee's requirements.",
        "Our extensive experience covers cargoes such as Coal, Stone, Gypsum, Aggregates, Soybean, Sugar, Chickpeas, Clinker, Manganese Ore, TSP, Lentils, LNG, LPG, Condensate, HSFO, Vegetable Oil, MOGAS, and other bulk and liquid commodities.",
      ]}
      serviceItems={[
        "Vessel declaration with Port and Customs authorities and coordination of berthing/unberthing operations, including pilotage and tug assistance in compliance with port regulations.",
        "Submission of crew information to Immigration authorities prior to vessel arrival.",
        "Verification and preparation of vessel documentation in accordance with international maritime regulations before customs inspection.",
        "Preparation and submission of Quarantine Pre-Arrival Report (QPAR).",
        "Notification to Customs authorities regarding vessel arrival and reporting of cargo details.",
        "Logistics support including supply of provisions, bunkers, and essential vessel requirements.",
        "Preparation and submission of cargo manifest to appointed stevedores for efficient cargo operations.",
        "Close coordination with stevedores and terminal operators to ensure safe and efficient handling of containers, break-bulk, dry bulk, and liquid bulk cargoes, while keeping the vessel's Master informed of all shore-side requirements and regulations.",
        "Proven experience in handling Naval vessels at Chattogram Port.",
=======
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
>>>>>>> Stashed changes
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
