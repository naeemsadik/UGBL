import servicesBg from "@/assets/logistic.png";
import { ServiceDetailPage } from "@/components/service-detail-page";

const readMoreLinks = [
  { label: "Port & OPA/CPA Agency", href: "/services/port-agency" },
  { label: "Husbandry Services", href: "/services/husbandry-agency" },
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

export default function LogisticsAgencyPage() {
  return (
    <ServiceDetailPage
      title="Logistics Services"
      subtitle="End-to-end logistics solutions covering inland transportation, warehousing, and multimodal cargo delivery."
      heroImage={servicesBg}
      overviewTitle="Comprehensive logistics support"
      overview="River Tyne Ltd provides comprehensive, integrated logistics support tailored to the unique needs of our clients. We specialize in handling complex project cargo for both offshore and onshore projects, as well as terminal equipment. We are fully capable of executing complex transport logistics within all government-permissible limits, encompassing break bulk, heavy lift, and Over-Dimensional Cargo (ODC) projects."
      serviceItems={[
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
      ]}
      ctaTitle="Need logistics support?"
      ctaText="River Tyne can handle your complete logistics requirements from port to final delivery destination, including inland transport, warehousing, and multimodal solutions."
      ctaLabel="Contact us"
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
