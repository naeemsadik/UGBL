import heroImg from "@/assets/Payra Port.jpg";
import { PortDetailPage } from "@/components/port-detail-page";

const readMoreLinks = [
  { label: "Chattogram Port", href: "/port-info/chattogram" },
  { label: "Mongla Port", href: "/port-info/mongla" },
  { label: "Matarbari Port", href: "/port-info/matarbari" },
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

export default function PayraPortPage() {
  return (
    <PortDetailPage
      title="Payra Port"
      subtitle="An emerging deep-sea access point for industrial cargo and project moves through the Rabnabad Channel."
      heroImage={heroImg}
      overviewTitle="Deep-sea access for project cargo"
      overview="Payra is a strategic deep-water port profile relevant for cargo movements that need anchorage handling, pilotage, and flexible channel access. It is a strong fit for project cargo and larger industrial moves with established STS operation windows."
      mapTitle="Payra Port"
      mapDescription="The document references the fairway buoy, inner anchorage (Lat 21°56.0΄N Long 090°17.8΄E), and Rabnabad Channel access."
      mapQuery="Payra Port, Bangladesh"
      facts={[
        {
          label: "Fairway Draft",
          value: "13-14 M",
          description: "No draft restriction at Fairway Buoy.",
        },
        {
          label: "Maximum LOA",
          value: "200 M",
          description: "Length overall supported for port calls.",
        },
        {
          label: "Channel Draft",
          value: "6-6.5 M",
          description: "Vessels can enter/depart through Rabnabad Channel.",
        },
        {
          label: "STS Season",
          value: "Mid-Sep to March",
          description: "Permissible by Payra Port Authority.",
        },
      ]}
      technicalSections={[
        {
          title: "Anchorage & Access",
          items: [
            { label: "Inner Anchorage", value: "Lat 21°56.0΄N Long 090°17.8΄E", description: "Wide anchorage established at PPA." },
            { label: "Rabnabad Channel", value: "6-6.5 M Draft", description: "Main entry/departure route." },
            { label: "Water Density", value: "998-1001 kg/m3", description: "Standard operational range." },
          ],
        },
      ]}
      notesTitle="Operational context"
      notes={[
        "STS operations at Fairway Buoy are permissible from Mid-September to the end of March.",
        "Bulk Cargo Discharging done by ship's Crane and Grabs by STS operation at anchorage.",
        "Vessels can make direct berthing upon arrival by achieving permissible draft.",
        "Port operates round the clock even on holidays (double payment applicable).",
        "No congestion reported for calling vessels subject to permissible draft.",
      ]}
      ctaTitle="Need Payra support?"
      ctaText="River Tyne can coordinate the arrival, berth planning, port-side services, and follow-on cargo movement for Payra calls."
      ctaLabel="Contact us"
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
