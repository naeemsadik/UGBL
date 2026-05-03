import heroImg from "@/assets/hero3.jpeg";
import { PortDetailPage } from "@/components/port-detail-page";

export default function MatarbariPortPage() {
  return (
    <PortDetailPage
      title="Matarbari Port"
      subtitle="A deep-sea gateway built for heavier project cargo and modern port operations."
      heroImage={heroImg}
      breadcrumbs={[
        { label: "HOME", href: "/" },
        { label: "PORT INFO", href: "/port-info" },
        { label: "MATARBARI PORT" },
      ]}
      overviewTitle="Deep-sea project cargo focus"
      overview="The Matarbari Coal Jetty is the most specialized port profile in the documentation. It supports larger vessels, relies on tide-aware berthing, and is positioned for faster cargo discharge through self-unloader operations."
      facts={[
        {
          label: "Max LOA",
          value: "230 M",
          description: "Vessels up to 230 metres can take berth at the coal jetty.",
        },
        {
          label: "Fresh water draft",
          value: "11.5 M",
          description: "Fresh water draft limit stated in the port note.",
        },
        {
          label: "Channel draft",
          value: "12.0 M",
          description: "Channel draft with sufficient UKC.",
        },
        {
          label: "Discharge rate",
          value: "25k-30k MT/day",
          description: "Typical discharge rate by terminal self-unloader.",
        },
      ]}
      notesTitle="Operational context"
      notes={[
        "No restriction is noted for DWT, beam, or air draft in the document.",
        "Berthing and unberthing are performed on high-water tide and lightering is strictly prohibited.",
        "Pilotage comes from Chittagong Port, and four tugs are used for berthing and unberthing.",
      ]}
      ctaTitle="Need Matarbari support?"
      ctaText="This port is the best match for project cargo and high-throughput discharge plans that need tide-sensitive coordination and tug support."
      ctaLabel="Contact us"
      ctaHref="/contact"
    />
  );
}