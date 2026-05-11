import servicesBg from "@/assets/Husbandry.jpg";
import { ServiceDetailPage } from "@/components/service-detail-page";

const readMoreLinks = [
  { label: "Port Agency", href: "/services/port-agency" },
  { label: "OPA/CPA Agency", href: "/services/opa-cpa-agency" },
  { label: "Logistics Services", href: "/services/logistics-agency" },
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
