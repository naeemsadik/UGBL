import heroImg from "@/assets/Chattogram Port.jpg";
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
  email: "info@rivertyneltd.com",
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
          label: "Primary Anchorage",
          value: "Alpha",
          description: "Deep draft berth with 11-11.5 M FW draft.",
        },
        {
          label: "Max Draft (Inner)",
          value: "9.55 M",
          description: "Permissible draft for entering/leaving port berths.",
        },
        {
          label: "Max LOA (Inner)",
          value: "190.00 M",
          description: "Length overall supported for port berths.",
        },
        {
          label: "Role in network",
          value: "Primary seaport",
          description: "Best suited for broad cargo mix and standard port calls.",
        },
      ]}
      technicalSections={[
        {
          title: "General Jetty Information",
          items: [
            { label: "Max Draft (Berth)", value: "9.55 M", description: "Permissible for entering/leaving." },
            { label: "Max LOA (Berth)", value: "190.00 M", description: "Standard permissible length." },
            { label: "Night Navigation LOA", value: "175.00 M", description: "Maximum for night entry." },
            { label: "Jetty 2-9 Draft", value: "8.55 M", description: "Main Jetty areas." },
            { label: "Jetty 10-13 Draft", value: "9.50 M", description: "Includes CCT, NCT, GSJ, DOJ-4-7." },
          ],
        },
        {
          title: "Anchorage & Lightening",
          items: [
            { label: "Kutubdia Draft", value: "13-14 M", description: "No LOA/Beam/Air Draft restrictions." },
            { label: "Alpha FW Draft", value: "11-11.5 M", description: "Discharging bulk cargo as per tide." },
            { label: "Lightening Requirement", value: "> 11.5 M Draft", description: "Must lighten at Kutubdia to achieve suitable draft." },
          ],
        },
      ]}
      berthRestrictions={{
        title: "Tanker Vessel Berth Restrictions",
        items: [
          { name: "TSP Jetty (Small)", maxLOA: "143.40 M", maxDraft: "8.25 M", details: "FW Draft" },
          { name: "TSP Jetty (Large)", maxLOA: "175.25 M", maxDraft: "7.90 M", details: "FW Draft" },
          { name: "DOJ-3", maxLOA: "183.00 M", maxDraft: "7.60 M", details: "Dolphin Oil Jetty-3" },
          { name: "DOJ-4", maxLOA: "160.00 M", maxDraft: "9.50 M", details: "Dolphin Oil Jetty-4" },
          { name: "DOJ-5/6/7", maxLOA: "186.00 M", maxDraft: "9.50 M", details: "Can go up to 190M/9.00M with special permission" },
          { name: "RM-10", maxLOA: "130.00 M", maxDraft: "7.80 M", details: "River Mooring-10" },
          { name: "UTT Jetty", maxLOA: "183.00 M", maxDraft: "9.50 M", details: "United Tanker Terminal" },
        ],
      }}
      lngTerminals={[
        {
          name: "Summit LNG Terminal",
          location: "Northwest of Sonadia Island, 1.5 Miles from Moheshkhali",
          position: "Lat. 21-33.20N, Long: 091-48.58 E",
          maxDWT: "180,000 MT",
          maxDisplacement: "160,000 MT",
          maxLOA: "320 M",
          maxDraft: "12.50 M",
        },
        {
          name: "Moheshkhali Floating LNG (MLNG)",
          location: "2.40 KM offshore Sonadia Island, 20 KM NW of Cox’s Bazar",
          position: "Lat.: 21-32.04′ N, Long : 091-49.07’E",
          maxDisplacement: "180,000 MT",
          maxLOA: "350 M",
          maxBerthingSpeed: "0.12 M/Sec",
        },
      ]}
      notesTitle="Operational context"
      notes={[
        "Bulk Cargo Discharging done by ship’s Crane and Grabs by STS operation.",
        "At Chattogram vessel can work round the clock even in holiday (double payment).",
        "All vessels must have at least 16 ropes for safe berthing.",
        "Tanker vessels having wire ropes must have at least 12 polypropylene ropes.",
        "Entry permissible draft depends on the day’s maximum permissible draft.",
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
