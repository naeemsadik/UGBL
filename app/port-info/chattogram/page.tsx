import heroImg from "@/assets/hero3.jpeg";
import { PortDetailPage } from "@/components/port-detail-page";

export default function ChattogramPortPage() {
  return (
    <PortDetailPage
      title="Chattogram Port"
      subtitle="Bangladesh's primary seaport and the network's broadest cargo-handling gateway."
      heroImage={heroImg}
      breadcrumbs={[
        { label: "HOME", href: "/" },
        { label: "PORT INFO", href: "/port-info" },
        { label: "CHATTOGRAM PORT" },
      ]}
      overviewTitle="Core seaport operations"
      overview="Chattogram is the country's main seaport and the anchor for day-to-day cargo, container, and vessel-service coordination. The published berth profile highlights the largest operating envelope in the network and makes it the natural hub for high-volume calls."
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
    />
  );
}