import servicesBg from "@/assets/logistic.jpg";
import { ServiceDetailPage } from "@/components/service-detail-page";

const readMoreLinks = [
  { label: "Port Agency", href: "/services/port-agency" },
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

export default function OpaCpaAgencyPage() {
  return (
    <ServiceDetailPage
      title="OPA/CPA Agency"
      subtitle="Owner's and Charterer's Protecting Agent services ensuring all interests are safeguarded at every port call."
      heroImage={servicesBg}
      overviewTitle="Protecting agent services"
      overview="River Tyne Ltd acts as Owner's Protecting Agent (OPA) and Charterer's Protecting Agent (CPA) to safeguard the interests of vessel owners and charterers during port calls in Bangladesh. Our experienced team provides independent oversight, ensuring transparent operations and accurate reporting throughout the entire port stay."
      serviceItems={[
        "Independent cargo survey and monitoring",
        "Draft survey attendance and verification",
        "Hatch inspection and condition reporting",
        "Cargo loading and discharge supervision",
        "Statement of facts preparation",
        "Laytime calculation and verification",
        "NOR tendering assistance",
        "Damage and shortage claim coordination",
        "On-board attendance and crew liaison",
        "Photographic evidence and documentation",
      ]}
      additionalSections={[
        {
          title: "Why choose our OPA/CPA services?",
          content:
            "Our protecting agent team works independently from the nominated port agent to provide unbiased oversight of all cargo operations. We ensure that the interests of our principals are protected at every stage — from vessel arrival through cargo operations to final departure. Our detailed reporting gives principals full visibility into operations on the ground.",
        },
      ]}
      ctaTitle="Need protecting agent services?"
      ctaText="River Tyne provides independent OPA/CPA services across all major Bangladeshi ports, ensuring your interests are fully protected during every port call."
      ctaLabel="Contact us"
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
