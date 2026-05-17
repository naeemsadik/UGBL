import servicesBg from "@/assets/Port Agency .jpeg";
import { ServiceDetailPage } from "@/components/service-detail-page";

const readMoreLinks = [
  { label: "Husbandry Services", href: "/services/husbandry-agency" },
  { label: "Logistics Services", href: "/services/logistics-agency" },
  { label: "Brokering", href: "/services/brokering" },
];

const downloadLinks = [
  { label: "Company Profile", href: "/downloads/company-profile.pdf" },
  { label: "Service Brochure", href: "/downloads/service-brochure.pdf" },
];

const contact = {
  phone: "+880-2588-11819",
  email: "info@rivertyneltd.com",
  contactHref: "/contact",
  contactLabel: "Send Message",
};

export default function PortAgencyPage() {
  return (
    <ServiceDetailPage
      title="Port & OPA/CPA Agency"
      subtitle="Handling vessel arrivals, departures, documentation, and port authority liaison."
      heroImage={servicesBg}
      overviewTitle="Port & OPA/CPA Agency:"
      overview={[
        "River Tyne Ltd is a shipping agency in Bangladesh, providing comprehensive maritime services across all major ports, including Chattogram, Mongla, and Payra. We specialize in serving all types of vessels and handling a wide range of cargoes from international origins to final delivery destinations within the country, ensuring efficient, reliable, and compliant port operations tailored to each consignee's requirements.",
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
        "Arrangement of crew changes, including immigration documentation, flight booking, hotel accommodation, and transportation services.",
        "Provision of comprehensive ship services, including technical support, repairs, maintenance, and general supplies.",
      ]}
      additionalSections={[
        {
          title: "Port Coverage",
          content:
            "We maintain dedicated teams at Chattogram, Mongla, Payra, and Matarbari ports, providing round-the-clock agency support. Our deep local knowledge and established relationships with port authorities ensure that every vessel call is handled with maximum efficiency and minimum delays.",
        },
      ]}
      ctaTitle="Need port agency support?"
      ctaText="River Tyne can coordinate the entire port call from arrival to departure, ensuring minimal delays and maximum efficiency at any major Bangladeshi port."
      ctaLabel="Contact us"
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
