import servicesBg from "@/assets/Port Agency .jpeg";
import { ServiceDetailPage } from "@/components/service-detail-page";

const readMoreLinks = [
  { label: "OPA/CPA Agency", href: "/services/opa-cpa-agency" },
  { label: "Husbandry Agency", href: "/services/husbandry-agency" },
  { label: "Logistics Agency", href: "/services/logistics-agency" },
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
      title="Port Agency"
      subtitle="Full-service port agency handling vessel arrivals, departures, documentation, and port authority liaison."
      heroImage={servicesBg}
      overviewTitle="Full-service port agency"
      overview="River Tyne Ltd is a  shipping agency in Bangladesh, providing comprehensive maritime services across all major ports, including Chattogram, Mongla and Payra.We specialize in serving all types of vessels and handling a wide range of cargoes from international origins to final delivery destinations within the country, ensuring efficient, reliable, and compliant port operations tailored to each consignee’s requirements.
Our extensive experience covers cargoes such as Coal, Stone, Gypsum, Aggregates, Soybean, Sugar, Chickpeas, Clinker, Manganese Ore, TSP, Lentils, LNG, LPG, Condensate, HSFO, Vegetable Oil, MOGAS, and other bulk and liquid commodities.
"
      serviceItems={[
        "Pre-arrival planning and coordination",
        "Vessel arrival and departure formalities",
        "Port authority and customs liaison",
        "Documentation and cargo paperwork",
        "Berth planning and scheduling",
        "Cargo supervision and tallying",
        "Stevedoring coordination",
        "Port disbursement management",
        "Crew immigration assistance",
        "Communication relay between vessel and shore",
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
