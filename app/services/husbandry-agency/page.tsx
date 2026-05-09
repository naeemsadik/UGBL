import servicesBg from "@/assets/logistic.jpg";
import { ServiceDetailPage } from "@/components/service-detail-page";

const readMoreLinks = [
  { label: "Port Agency", href: "/services/port-agency" },
  { label: "OPA/CPA Agency", href: "/services/opa-cpa-agency" },
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

export default function HusbandryAgencyPage() {
  return (
    <ServiceDetailPage
      title="Husbandry Agency"
      subtitle="24/7 vessel husbandry including crew changes, supplies, provisions, and clearance operations."
      heroImage={servicesBg}
      overviewTitle="Complete vessel husbandry"
      overview="River Tyne Ltd provides round-the-clock vessel husbandry services at all major Bangladeshi ports. Our dedicated husbandry team ensures that every vessel's operational and crew needs are met promptly and efficiently, allowing the master and crew to focus on safe vessel operations while we handle all shore-side requirements."
      serviceItems={[
        "Crew change arrangements and immigration",
        "Medical assistance and hospitalization",
        "Cash to master delivery",
        "Provisions and stores supply",
        "Spare parts delivery and clearance",
        "Fresh water supply coordination",
        "Bunker coordination and surveys",
        "Waste disposal and slop arrangements",
        "Ship repairs and maintenance coordination",
        "Launch and boat services",
        "Communication and mail handling",
        "Repatriation and travel arrangements",
      ]}
      additionalSections={[
        {
          title: "24/7 Availability",
          content:
            "Our husbandry operations desk is available around the clock, 365 days a year. Whether a vessel needs an emergency crew change at midnight or spare parts clearance on a holiday, our team is always ready to respond. We maintain strong relationships with local suppliers, medical facilities, immigration authorities, and service providers to ensure fast turnaround on all requests.",
        },
      ]}
      ctaTitle="Need husbandry support?"
      ctaText="River Tyne provides comprehensive vessel husbandry services at all major Bangladeshi ports with 24/7 availability and rapid response times."
      ctaLabel="Contact us"
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
