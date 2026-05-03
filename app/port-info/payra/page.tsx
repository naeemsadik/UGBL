import heroImg from "@/assets/hero3.jpeg";
import { PortDetailPage } from "@/components/port-detail-page";

export default function PayraPortPage() {
  return (
    <PortDetailPage
      title="Payra Port"
      subtitle="An emerging deep-sea access point for industrial cargo and project moves through the Rabnabad Channel."
      heroImage={heroImg}
      breadcrumbs={[
        { label: "HOME", href: "/" },
        { label: "PORT INFO", href: "/port-info" },
        { label: "PAYRA PORT" },
      ]}
      overviewTitle="Deep-sea access for project cargo"
      overview="Payra is the most tide-sensitive of the port profiles in the documentation and is especially relevant for cargo movements that need anchorage handling, pilotage, and flexible channel access. It is a strong fit for project cargo and larger industrial moves." 
      mapTitle="Payra Port"
      mapDescription="The document references the fairway buoy, inner anchorage, and berth access at Payra, so the map is centered on the Payra port area and its working waters."
      mapQuery="Payra Port, Bangladesh"
      facts={[
        {
          label: "Fairway draft",
          value: "13-14 M",
          description: "Available draft at the fairway buoy.",
        },
        {
          label: "Maximum LOA",
          value: "200 M",
          description: "Maximum vessel length mentioned in the note.",
        },
        {
          label: "Channel draft",
          value: "6-6.5 M",
          description: "Draft for entry and departure through Rabnabad Channel with tide.",
        },
        {
          label: "Tidal range",
          value: "1.0-3.0 M",
          description: "Semi-diurnal tides with a prominent diurnal effect.",
        },
      ]}
      notesTitle="Operational context"
      notes={[
        "Pilotage is compulsory at Payra.",
        "STS operations are permissible from mid-September to the end of March.",
        "The document notes round-the-clock work, including holidays, with double payment.",
      ]}
      ctaTitle="Need Payra support?"
      ctaText="Payra is a strong option for project cargo and tide-window planning when you need anchorage access, pilotage coordination, and broad working flexibility."
      ctaLabel="Contact us"
      ctaHref="/contact"
    />
  );
}