"use client";

import servicesBg from "@/assets/Husbandry.jpg";
import { ServiceDetailPage } from "@/components/service-detail-page";
<<<<<<< Updated upstream
import { downloadLinks } from "@/lib/data/downloads";

const readMoreLinks = [
  { label: "Port & OPA/CPA Agency", href: "/services/port-agency" },
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
<<<<<<< Updated upstream
      title="Husbandry Services"
      subtitle="24/7 vessel husbandry including crew changes, supplies, provisions, and clearance operations."
      heroImage={servicesBg}
      overviewTitle="Complete vessel husbandry"
      overview="Our Commitment River Tyne Ltd features an efficient husbandry team committed to providing 24/7 support for all vessels calling under our agency within Bangladesh ports.
"
      serviceItems={[
        "Crew handling: Meet & greet, hotel booking, shore passes, local transportation, air ticket booking, etc.",
        "Ship's spares: Prompt and efficient clearance and delivery on board vessels.",
        "Bunkers and lubricants: Supplied exclusively from the government subsidiary company, Jamuna Oil, at prevailing market prices during the time of supply.",
        "Provisions and fresh water supply.",
        "Liaison and communication: Working with local authorities and maintaining proper communication with ships for any required assistance.",
        "Follow-up activities: Coordinating with workshops, contractors, and vendors.",
        "Medical support/assistance.",
        "Waste management: Garbage and sludge disposal.",
        "Dry docking: Coordination for vessel dry docking, if required.",
        "General assistance: Any other husbandry-related services required by the owner or principal.",
        "Cash to Master",
        "Repair and maintenance services",
        "Security services",
        "Under Water Inspection and Cleaning",
=======
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
>>>>>>> Stashed changes
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
