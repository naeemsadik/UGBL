import heroImg from "@/assets/hero3.jpeg";
import { PortDetailPage } from "@/components/port-detail-page";

const readMoreLinks = [
  { label: "Mongla Port", href: "/port-info/mongla" },
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

export default function ChattogramPortPage() {
  return (
    <PortDetailPage
      title="Chattogram Port"
      subtitle="Bangladesh's primary seaport and the network's broadest cargo-handling gateway."
      heroImage={heroImg}
      overviewTitle="Core seaport operations"
      overview="Chattogram is the country's main seaport and the anchor for day-to-day cargo, container, and vessel-service coordination. The published berth profile highlights the largest operating envelope in the network and makes it the natural hub for high-volume calls."
      mapTitle="Chattogram Port"
      mapDescription="The source document references Chattogram Port and its anchorage profile. Use the map to view the broader port area and connect the berth information to the location context in the doc."
      mapQuery="Chattogram Port, Bangladesh"
      facts={[
        {
          label: "Berth displacement",
          value: "180,000 MT",
          description: "Maximum displacement at berth.",
        },
        {
          label: "Maximum LOA",
          value: "320 M",
          description: "Length overall supported by the berth profile.",
        },
        {
          label: "Maximum draft",
          value: "12.50 M",
          description: "Operational draft ceiling reported in the port spec.",
        },
        {
          label: "Role in network",
          value: "Primary seaport",
          description: "Best suited for broad cargo mix and standard port calls.",
        },
      ]}
      notesTitle="Operational context"
      notes={[
        "Use Chattogram when the call needs the widest service coverage and the broadest berth profile.",
        "Coordinate berth windows closely, especially when vessel size or cargo volume pushes the port envelope.",
        "This is the strongest fit for container traffic, general cargo, and standard support-heavy port calls.",
      ]}
      ctaTitle="Need Chattogram support?"
      ctaText="River Tyne can coordinate the arrival, berth planning, port-side services, and follow-on cargo movement for Chattogram calls."
      ctaLabel="Contact us"
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}