export interface PortFact {
  label: string;
  value: string;
  description: string;
}

export interface SidebarLink {
  label: string;
  href: string;
}

export interface SidebarContact {
  phone: string;
  email: string;
  contactHref: string;
  contactLabel: string;
}

export interface TechnicalSection {
  title: string;
  items: { label: string; value: string; description?: string }[];
}

export interface FlatCoreSection {
  title?: string;
  paragraphs: string[];
}

export interface BerthRestriction {
  name: string;
  maxLOA?: string;
  maxDraft?: string;
  details?: string;
}

export interface LNGTerminalInfo {
  name: string;
  location?: string;
  position?: string;
  maxDWT?: string;
  maxDisplacement?: string;
  maxLOA?: string;
  maxDraft?: string;
  maxBerthingSpeed?: string;
}

export interface PortData {
  slug: string;
  title: string;
  subtitle: string;
  heroImageName: string; // Used to map to static imports
  overviewTitle: string;
  overview: string;
  facts: PortFact[];
  mapTitle: string;
  mapDescription: string;
  mapQuery: string;
  notesTitle: string;
  notes: string[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  ctaHref: string;
  readMoreLinks: SidebarLink[];
  downloadLinks: SidebarLink[];
  contact: SidebarContact;
  technicalSections?: TechnicalSection[];
  berthRestrictions?: {
    title: string;
    items: BerthRestriction[];
  };
  lngTerminals?: LNGTerminalInfo[];
  flatCoreSections?: FlatCoreSection[];
}

export const ports: Record<string, PortData> = {
  chattogram: {
    slug: "chattogram",
    title: "Chattogram Port",
    subtitle: "Bangladesh's primary seaport and the network's broadest cargo-handling gateway.",
    heroImageName: "Chattogram Port.jpg",
    overviewTitle: "Core seaport operations",
    overview: "Chattogram is the country's main seaport and the anchor for day-to-day cargo, container, and vessel-service coordination. The published berth profile highlights the largest operating envelope in the network and makes it the natural hub for high-volume calls.",
    mapTitle: "Chattogram Port",
    mapDescription: "The source document references Chattogram Port and its anchorage profile. Use the map to view the broader port area and connect the berth information to the location context in the doc.",
    mapQuery: "Chattogram Port, Bangladesh",
    facts: [
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
    ],
    flatCoreSections: [
      {
        title: "Port profile",
        paragraphs: [
          "There is no draft restriction at Kutubdia and available FW draft is 14 M and available draft at customary inner anchorage is 11-11.5 M. If vsl's draft is more than 11-11.5 M FW then she has to lighten some quantity of cargo at Kutubdia anchorage to reach shifting FW draft of 11-11.5 M.",
          "There are three customary inner anchorages namely Alpha, Bravo, and Charlie and among them, Alpha is the deep draft berth. Presently vessels are calling at Chattogram Alpha anchorage with 11-11.5 M FW draft on high water tide on a particular day for discharging bulk cargo without any problem.",
          "No restriction on LOA, beam, DWT, air draft, etc at Kutubdia and Alpha/Bravo/Charlie anchorages.",
          "All kinds of bulk cargo (except liquid cargo) discharging done by ship's crane and using grabs by STS operation.",
          "There is no congestion to arrive any vessel at Kutubdia and customary inner anchorage (A, B, C).",
          "Vessel can make direct berthing upon arrival by achieving permissible draft to Kutubdia and on high water tide with help of local deep sea/bay pilot at inner anchorage A/B/C.",
          "Vessel can arrive on high water tide with help of local deep sea/bay pilot at Alpha/Bravo/Charlie anchorage and can sail at any time from Alpha/Bravo/Charlie anchorage.",
          "At Chattogram vessel can work round the clock even in holiday and vessel can continue work by paying double payment.",
        ],
      },
      {
        title: "General jetty/berth information",
        paragraphs: [
          "The maximum permissible FW draft for entering and leaving Chattogram Port berth is 10.00 M.",
          "The maximum permissible length for entering Chattogram Port berth is 190.00 Meters.",
          "The maximum permissible entry length for night navigation is to/from berth 175.00 Meters.",
          "The maximum permissible draft for main jetty areas (Jetty 2-8) is 8.55 M and Jetty 9-13, CCT-1-3, NCT-1-4, GSJ, DOJ-5 to -7, K (U & A) is 9.50 M up to LOA 186.00 M.",
          "The vessel LOA 183 M and 160 M permissible draft 9.50 M for DOJ-3 and DOJ-4 respectively.",
          "The entry permissible draft would however depend on the day's maximum permissible draft.",
        ],
      },
      {
        title: "Tanker vessel",
        paragraphs: [
          "Please find here below all tanker berths restrictions and details information of Chittagong Port:",
          "BERTH TSP JETTY: Vessel having LOA up to 143.40 M with FW draft 8.25 M can take berth at TSP Jetty. Vessel having LOA more than 143.40 M and up to 175.25 M with FW draft 7.90 M can take berth at TSP Jetty.",
          "DOJ-3 (Dolphin Oil Jetty-3): Vessel having LOA up to 183.00 M with FW draft 7.60 M can take berth at DOJ-3 Jetty.",
          "DOJ-4 (Dolphin Oil Jetty-4): Vessel having LOA up to 160.00 M with FW draft 9.50 M can take berth at DOJ-4 Jetty.",
          "DOJ-5 (Dolphin Oil Jetty-5): Vessel having LOA up to 186.00 M with FW draft 9.50 M can take berth at DOJ-5 Jetty. Vessel having LOA from 186 M to 190 M with FW draft 9.00 M or 0.50 M less than the day's permissible draft can take berth at DOJ-5 under special permission.",
          "DOJ-6 (Dolphin Oil Jetty-6): Vessel having LOA up to 186.00 M with FW draft 9.50 M can take berth at DOJ-6 Jetty. Vessel having LOA from 186 M to 190 M with FW draft 9.00 M or 0.50 M less than the day's permissible draft can take berth at DOJ-6 under special permission.",
          "DOJ-7 (Dolphin Oil Jetty-7): Vessel having LOA up to 186.00 M with FW draft 9.50 M can take berth at DOJ-7 Jetty. Vessel having LOA from 186 M to 190 M with FW draft 9.00 M or 0.50 M less than the day's permissible draft can take berth at DOJ-7 under special permission.",
          "DOJ-8 (Dolphin Oil Jetty-8): Vessel having LOA up to 175.00 M with FW draft 10.00 M depending on prevailing real time hydrological condition can take berth at DOJ-8 Jetty.",
          "UTT Jetty: Vessel having LOA up to 183.00 M with FW draft 9.50 M can take berth at UTT Jetty.",
          "Please note all vessels must have at least 16 ropes for safe berthing. Tanker vessels having wire ropes must have at least 12 polypropylene ropes and no other restriction or information other than above.",
        ],
      },
    ],
    technicalSections: [
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
    ],
    berthRestrictions: {
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
    },
    lngTerminals: [
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
    ],
    notesTitle: "Operational context",
    notes: [
      "Bulk Cargo Discharging done by ship’s Crane and Grabs by STS operation.",
      "At Chattogram vessel can work round the clock even in holiday (double payment).",
      "All vessels must have at least 16 ropes for safe berthing.",
      "Tanker vessels having wire ropes must have at least 12 polypropylene ropes.",
      "Entry permissible draft depends on the day’s maximum permissible draft.",
    ],
    ctaTitle: "Need Chattogram support?",
    ctaText: "River Tyne can coordinate the arrival, berth planning, port-side services, and follow-on cargo movement for Chattogram calls.",
    ctaLabel: "Contact us",
    ctaHref: "/contact",
    readMoreLinks: [
      { label: "Mongla Port", href: "/port-info/mongla" },
      { label: "Payra Port", href: "/port-info/payra" },
      { label: "Matarbari Port", href: "/port-info/matarbari" },
    ],
    downloadLinks: [
      { label: "Company Profile", href: "/downloads/company-profile.pdf" },
      { label: "Draft Chart", href: "/downloads/draft-chart.pdf" },
      { label: "Tide Table", href: "/downloads/tide-table.pdf" },
    ],
    contact: {
      phone: "+880-2588-811813",
      email: "info@rivertyneltd.com",
      contactHref: "/contact",
      contactLabel: "Send Message",
    },
  },
  matarbari: {
    slug: "matarbari",
    title: "Matarbari Port",
    subtitle: "A deep-sea gateway built for heavier project cargo and modern port operations.",
    heroImageName: "Matarbari Port.jpg",
    overviewTitle: "Deep-sea project cargo focus",
    overview: "The Matarbari Coal Jetty is a specialized port profile supporting larger vessels and tide-aware berthing. It is positioned for faster cargo discharge through self-unloader operations and heavy project cargo handling.",
    mapTitle: "Matarbari Coal Jetty",
    mapDescription: "The map centers the Matarbari coal jetty area, which is the relevant location for the berth, tide-aware operations, and pilotage coordination.",
    mapQuery: "Matarbari Coal Jetty, Bangladesh",
    facts: [
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
    ],
    technicalSections: [
      {
        title: "Berthing & Pilotage",
        items: [
          { label: "Pilotage Source", value: "Chittagong Port", description: "Compulsory for all vessels." },
          { label: "Tug Support", value: "4 Tugs", description: "Used for berthing and unberthing." },
          { label: "Tide Condition", value: "High-Water", description: "Berthing/unberthing on high-water tide." },
          { label: "Lightering", value: "Strictly Prohibited", description: "Direct berthing only." },
        ],
      },
    ],
    notesTitle: "Operational context",
    notes: [
      "No restriction is noted for DWT, beam, or air draft for the Coal Jetty.",
      "Berthing and unberthing are performed on high-water tide.",
      "Four tugs are mandatory for berthing and unberthing operations.",
      "Lightering is strictly prohibited at this terminal.",
      "Pilotage is coordinated through Chittagong Port Authority.",
    ],
    ctaTitle: "Need Matarbari support?",
    ctaText: "River Tyne can coordinate the arrival, berth planning, port-side services, and follow-on cargo movement for Matarbari calls.",
    ctaLabel: "Contact us",
    ctaHref: "/contact",
    readMoreLinks: [
      { label: "Chattogram Port", href: "/port-info/chattogram" },
      { label: "Mongla Port", href: "/port-info/mongla" },
      { label: "Payra Port", href: "/port-info/payra" },
    ],
    downloadLinks: [
      { label: "Company Profile", href: "/downloads/company-profile.pdf" },
      { label: "Draft Chart", href: "/downloads/draft-chart.pdf" },
      { label: "Tide Table", href: "/downloads/tide-table.pdf" },
    ],
    contact: {
      phone: "+880-2588-811813",
      email: "info@rivertyneltd.com",
      contactHref: "/contact",
      contactLabel: "Send Message",
    },
  },
  mongla: {
    slug: "mongla",
    title: "Mongla Port",
    subtitle: "A strategic secondary gateway for bulk and breakbulk operations in the south-west corridor.",
    heroImageName: "Mongla Port.jpg",
    overviewTitle: "Bulk and breakbulk gateway",
    overview: "Mongla is a key gateway for bulk flows and breakbulk handling. The documentation points to low congestion, accessible drafts, and enough operating flexibility to support both direct berthing and anchorage work.",
    mapTitle: "Mongla Port",
    mapDescription: "The document highlights Mongla Fairway Buoy and Harbaria anchorage as the working reference points.",
    mapQuery: "Mongla Port, Bangladesh",
    facts: [
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
    ],
    technicalSections: [
      {
        title: "Anchorage & Berthing",
        items: [
          { label: "Harbaria Anchorage", value: "Permissible Draft", description: "No congestion to call any vessel." },
          { label: "Direct Berthing", value: "On Arrival", description: "Subject to achieving permissible draft." },
          { label: "Fairway Buoy", value: "No Restriction", description: "No congestion reported for calls." },
        ],
      },
    ],
    notesTitle: "Operational context",
    notes: [
      "Vessels can make direct berthing upon arrival by achieving permissible draft.",
      "There is no congestion to call any vessel at Mongla Fairway Buoy and Harbaria anchorage.",
      "At Mongla, vessels can work round the clock even on holidays.",
      "Vessel can continue work by paying double payment on holidays.",
      "Bulk Cargo Discharging is done by ship’s Crane and Grabs by STS operation.",
    ],
    ctaTitle: "Need Mongla support?",
    ctaText: "River Tyne can coordinate the arrival, berth planning, port-side services, and follow-on cargo movement for Mongla calls.",
    ctaLabel: "Contact us",
    ctaHref: "/contact",
    readMoreLinks: [
      { label: "Chattogram Port", href: "/port-info/chattogram" },
      { label: "Payra Port", href: "/port-info/payra" },
      { label: "Matarbari Port", href: "/port-info/matarbari" },
    ],
    downloadLinks: [
      { label: "Company Profile", href: "/downloads/company-profile.pdf" },
      { label: "Draft Chart", href: "/downloads/draft-chart.pdf" },
      { label: "Tide Table", href: "/downloads/tide-table.pdf" },
    ],
    contact: {
      phone: "+880-2588-811813",
      email: "info@rivertyneltd.com",
      contactHref: "/contact",
      contactLabel: "Send Message",
    },
  },
  payra: {
    slug: "payra",
    title: "Payra Port",
    subtitle: "An emerging deep-sea access point for industrial cargo and project moves through the Rabnabad Channel.",
    heroImageName: "Payra Port.jpg",
    overviewTitle: "Deep-sea access for project cargo",
    overview: "Payra is a strategic deep-water port profile relevant for cargo movements that need anchorage handling, pilotage, and flexible channel access. It is a strong fit for project cargo and larger industrial moves with established STS operation windows.",
    mapTitle: "Payra Port",
    mapDescription: "The document references the fairway buoy, inner anchorage (Lat 21°56.0΄N Long 090°17.8΄E), and Rabnabad Channel access.",
    mapQuery: "Payra Port, Bangladesh",
    facts: [
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
    ],
    technicalSections: [
      {
        title: "Anchorage & Access",
        items: [
          { label: "Inner Anchorage", value: "Lat 21°56.0΄N Long 090°17.8΄E", description: "Wide anchorage established at PPA." },
          { label: "Rabnabad Channel", value: "6-6.5 M Draft", description: "Main entry/departure route." },
          { label: "Water Density", value: "998-1001 kg/m3", description: "Standard operational range." },
        ],
      },
    ],
    notesTitle: "Operational context",
    notes: [
      "STS operations at Fairway Buoy are permissible from Mid-September to the end of March.",
      "Bulk Cargo Discharging done by ship's Crane and Grabs by STS operation at anchorage.",
      "Vessels can make direct berthing upon arrival by achieving permissible draft.",
      "Port operates round the clock even on holidays (double payment applicable).",
      "No congestion reported for calling vessels subject to permissible draft.",
    ],
    ctaTitle: "Need Payra support?",
    ctaText: "River Tyne can coordinate the arrival, berth planning, port-side services, and follow-on cargo movement for Payra calls.",
    ctaLabel: "Contact us",
    ctaHref: "/contact",
    readMoreLinks: [
      { label: "Chattogram Port", href: "/port-info/chattogram" },
      { label: "Mongla Port", href: "/port-info/mongla" },
      { label: "Matarbari Port", href: "/port-info/matarbari" },
    ],
    downloadLinks: [
      { label: "Company Profile", href: "/downloads/company-profile.pdf" },
      { label: "Draft Chart", href: "/downloads/draft-chart.pdf" },
      { label: "Tide Table", href: "/downloads/tide-table.pdf" },
    ],
    contact: {
      phone: "+880-2588-811813",
      email: "info@rivertyneltd.com",
      contactHref: "/contact",
      contactLabel: "Send Message",
    },
  },
};
