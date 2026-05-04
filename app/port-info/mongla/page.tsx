import heroImg from "@/assets/hero3.jpeg";
import { PortDetailPage } from "@/components/port-detail-page";

const readMoreLinks = [
  { label: "Chattogram Port", href: "/port-info/chattogram" },
  { label: "Payra Port", href: "/port-info/payra" },
  { label: "Matarbari Port", href: "/port-info/matarbari" },
];

const downloadLinks = [
  { label: "Company Profile", href: "/downloads/company-profile.pdf" },
  { label: "Draft Chart", href: "/downloads/draft-chart.pdf" },
  { label: "Tide Table", href: "/downloads/tide-table.pdf" },
];

const contact = {
  phone: "+880-2588-811813",
  email: "uni-global.bd@ugblgroup.com",
  contactHref: "/contact",
  contactLabel: "Send Message",
};

export default function MonglaPortPage() {
  return (
    <PortDetailPage
      title="Mongla Port"
      subtitle="A strategic secondary gateway for bulk and breakbulk operations in the south-west corridor."
      heroImage={heroImg}
      overviewTitle="Bulk and breakbulk gateway"
      overview="Mongla is a key gateway for bulk flows and breakbulk handling. The documentation points to low congestion, accessible drafts, and enough operating flexibility to support both direct berthing and anchorage work."
      mapTitle="Mongla Port"
      mapDescription="The document highlights Mongla Fairway Buoy and Harbaria anchorage as the working reference points."
      mapQuery="Mongla Port, Bangladesh"
      facts={[
        {
          label: "Fairway Draft",
          value: "13-14.5 M",
          description: "Available draft at the fairway buoy.",
        },
        {
          label: "Maximum LOA",
          value: "200 M",
          description: "Maximum vessel length supported.",
        },
        {
          label: "Working Hours",
          value: "24/7",
          description: "Includes holidays with double payment.",
        },
        {
          label: "Water Density",
          value: "998-1003 kg/m3",
          description: "Operational range for Mongla waters.",
        },
      ]}
      technicalSections={[
        {
          title: "Anchorage & Berthing",
          items: [
            { label: "Harbaria Anchorage", value: "Permissible Draft", description: "No congestion to call any vessel." },
            { label: "Direct Berthing", value: "On Arrival", description: "Subject to achieving permissible draft." },
            { label: "Fairway Buoy", value: "No Restriction", description: "No congestion reported for calls." },
          ],
        },
      ]}
      notesTitle="Operational context"
      notes={[
        "Vessels can make direct berthing upon arrival by achieving permissible draft.",
        "There is no congestion to call any vessel at Mongla Fairway Buoy and Harbaria anchorage.",
        "At Mongla, vessels can work round the clock even on holidays.",
        "Vessel can continue work by paying double payment on holidays.",
        "Bulk Cargo Discharging is done by ship’s Crane and Grabs by STS operation.",
      ]}
      ctaTitle="Need Mongla support?"
      ctaText="River Tyne can coordinate the arrival, berth planning, port-side services, and follow-on cargo movement for Mongla calls."
      ctaLabel="Contact us"
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}