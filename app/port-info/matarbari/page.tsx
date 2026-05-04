import heroImg from "@/assets/Matarbari Port.jpg";
import { PortDetailPage } from "@/components/port-detail-page";

const readMoreLinks = [
  { label: "Chattogram Port", href: "/port-info/chattogram" },
  { label: "Mongla Port", href: "/port-info/mongla" },
  { label: "Payra Port", href: "/port-info/payra" },
];

const downloadLinks = [
  { label: "Company Profile", href: "/downloads/company-profile.pdf" },
  { label: "Draft Chart", href: "/downloads/draft-chart.pdf" },
  { label: "Tide Table", href: "/downloads/tide-table.pdf" },
];

const contact = {
  phone: "+880-2588-811813",
  email: "info@rivertyneltd.com",
  contactHref: "/contact",
  contactLabel: "Send Message",
};

export default function MatarbariPortPage() {
  return (
    <PortDetailPage
      title="Matarbari Port"
      subtitle="A deep-sea gateway built for heavier project cargo and modern port operations."
      heroImage={heroImg}
      overviewTitle="Deep-sea project cargo focus"
      overview="The Matarbari Coal Jetty is a specialized port profile supporting larger vessels and tide-aware berthing. It is positioned for faster cargo discharge through self-unloader operations and heavy project cargo handling."
      mapTitle="Matarbari Coal Jetty"
      mapDescription="The map centers the Matarbari coal jetty area, which is the relevant location for the berth, tide-aware operations, and pilotage coordination."
      mapQuery="Matarbari Coal Jetty, Bangladesh"
      facts={[
        {
          label: "Max LOA",
          value: "230 M",
          description: "Vessels up to 230 metres can take berth.",
        },
        {
          label: "Fresh Water Draft",
          value: "11.5 M",
          description: "Fresh water draft limit for berthing.",
        },
        {
          label: "Channel Draft",
          value: "12.0 M",
          description: "Channel draft with sufficient UKC.",
        },
        {
          label: "Discharge Rate",
          value: "25k-30k MT/day",
          description: "Typical rate by terminal self-unloader.",
        },
      ]}
      technicalSections={[
        {
          title: "Berthing & Pilotage",
          items: [
            { label: "Pilotage Source", value: "Chittagong Port", description: "Compulsory for all vessels." },
            { label: "Tug Support", value: "4 Tugs", description: "Used for berthing and unberthing." },
            { label: "Tide Condition", value: "High-Water", description: "Berthing/unberthing on high-water tide." },
            { label: "Lightering", value: "Strictly Prohibited", description: "Direct berthing only." },
          ],
        },
      ]}
      notesTitle="Operational context"
      notes={[
        "No restriction is noted for DWT, beam, or air draft for the Coal Jetty.",
        "Berthing and unberthing are performed on high-water tide.",
        "Four tugs are mandatory for berthing and unberthing operations.",
        "Lightering is strictly prohibited at this terminal.",
        "Pilotage is coordinated through Chittagong Port Authority.",
      ]}
      ctaTitle="Need Matarbari support?"
      ctaText="River Tyne can coordinate the arrival, berth planning, port-side services, and follow-on cargo movement for Matarbari calls."
      ctaLabel="Contact us"
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
