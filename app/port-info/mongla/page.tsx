import heroImg from "@/assets/hero3.jpeg";
import { PortDetailPage } from "@/components/port-detail-page";

export default function MonglaPortPage() {
  return (
    <PortDetailPage
      title="Mongla Port"
      subtitle="A strategic secondary gateway for bulk and breakbulk operations in the south-west corridor."
      heroImage={heroImg}
      breadcrumbs={[
        { label: "HOME", href: "/" },
        { label: "PORT INFO", href: "/port-info" },
        { label: "MONGLA PORT" },
      ]}
      overviewTitle="Bulk and breakbulk gateway"
      overview="Mongla is the port profile for steady bulk flows, breakbulk handling, and flexible working windows. The documentation points to low congestion, accessible drafts, and enough operating flexibility to support both direct berthing and anchorage work." 
      mapTitle="Mongla Port"
      mapDescription="The document highlights Mongla Fairway Buoy and Harbaria anchorage as the working reference points, so the map focuses on the Mongla port area and its access routes."
      mapQuery="Mongla Port, Bangladesh"
      facts={[
        {
          label: "Fairway draft",
          value: "13-14.5 M",
          description: "Available draft at the fairway buoy.",
        },
        {
          label: "Maximum LOA",
          value: "200 M",
          description: "Maximum vessel length stated in the note.",
        },
        {
          label: "STS window",
          value: "Oct-March",
          description: "STS operations are permissible in the stated seasonal window.",
        },
        {
          label: "Water density",
          value: "998-1003 kg/m3",
          description: "Density range recorded for Mongla waters.",
        },
      ]}
      notesTitle="Operational context"
      notes={[
        "Vessels with an 8.0-8.5 metre draft can enter and depart via the new channel.",
        "Bulk discharge is handled by ship cranes and grabs, including STS operations where permitted.",
        "The port note says work can continue around the clock, including holidays, with double payment.",
      ]}
      ctaTitle="Need Mongla support?"
      ctaText="Use Mongla when you need a secondary gateway that can still support direct berthing, anchorage operations, and bulk cargo handling without heavy congestion."
      ctaLabel="Contact us"
      ctaHref="/contact"
    />
  );
}