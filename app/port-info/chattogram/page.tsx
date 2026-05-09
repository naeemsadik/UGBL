"use client";

import heroImg from "@/assets/Chattogram Port.jpg";
import { PortDetailPage } from "@/components/port-detail-page";
import { useTranslation } from "@/lib/language-context";

export default function ChattogramPortPage() {
  const { t } = useTranslation();

  const readMoreLinks = [
    { label: t("nav.monglaPort"), href: "/port-info/mongla" },
    { label: t("nav.payraPort"), href: "/port-info/payra" },
    { label: t("nav.matarbariPort"), href: "/port-info/matarbari" },
  ];

  const downloadLinks = [
    { label: t("port.common.companyProfile"), href: "/downloads/company-profile.pdf" },
    { label: t("port.common.draftChart"), href: "/downloads/draft-chart.pdf" },
    { label: t("port.common.tideTable"), href: "/downloads/tide-table.pdf" },
  ];

  const contact = {
    phone: "+880-2588-811813",
    email: "info@rivertyneltd.com",
    contactHref: "/contact",
    contactLabel: t("port.common.sendMessage"),
  };

  return (
    <PortDetailPage
      title={t("port.chattogram.mapTitle")}
      subtitle={t("port.chattogram.subtitle")}
      heroImage={heroImg}
      overviewTitle={t("port.chattogram.overviewTitle")}
      overview={t("port.chattogram.overview")}
      mapTitle={t("port.chattogram.mapTitle")}
      mapDescription={t("port.chattogram.mapDescription")}
      mapQuery="Chattogram Port, Bangladesh"
      facts={[
        {
          label: t("port.chattogram.fact1Label"),
          value: t("port.chattogram.fact1Value"),
          description: t("port.chattogram.fact1Desc"),
        },
        {
          label: t("port.chattogram.fact2Label"),
          value: t("port.chattogram.fact2Value"),
          description: t("port.chattogram.fact2Desc"),
        },
        {
          label: t("port.chattogram.fact3Label"),
          value: t("port.chattogram.fact3Value"),
          description: t("port.chattogram.fact3Desc"),
        },
        {
          label: t("port.chattogram.fact4Label"),
          value: t("port.chattogram.fact4Value"),
          description: t("port.chattogram.fact4Desc"),
        },
      ]}
      technicalSections={[
        {
          title: t("port.chattogram.tech1Title"),
          items: [
            { label: t("port.chattogram.tech1Item1Label"), value: "9.55 M", description: t("port.chattogram.tech1Item1Desc") },
            { label: t("port.chattogram.tech1Item2Label"), value: "190.00 M", description: t("port.chattogram.tech1Item2Desc") },
            { label: t("port.chattogram.tech1Item3Label"), value: "175.00 M", description: t("port.chattogram.tech1Item3Desc") },
            { label: t("port.chattogram.tech1Item4Label"), value: "8.55 M", description: t("port.chattogram.tech1Item4Desc") },
            { label: t("port.chattogram.tech1Item5Label"), value: "9.50 M", description: t("port.chattogram.tech1Item5Desc") },
          ],
        },
        {
          title: t("port.chattogram.tech2Title"),
          items: [
            { label: t("port.chattogram.tech2Item1Label"), value: "13-14 M", description: t("port.chattogram.tech2Item1Desc") },
            { label: t("port.chattogram.tech2Item2Label"), value: "11-11.5 M", description: t("port.chattogram.tech2Item2Desc") },
            { label: t("port.chattogram.tech2Item3Label"), value: "> 11.5 M Draft", description: t("port.chattogram.tech2Item3Desc") },
          ],
        },
      ]}
      berthRestrictions={{
        title: t("port.chattogram.restrictionsTitle"),
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
      notesTitle={t("port.chattogram.notesTitle")}
      notes={[
        t("port.chattogram.note1"),
        t("port.chattogram.note2"),
        t("port.chattogram.note3"),
        t("port.chattogram.note4"),
        t("port.chattogram.note5"),
      ]}
      ctaTitle={t("port.chattogram.ctaTitle")}
      ctaText={t("port.chattogram.ctaText")}
      ctaLabel={t("port.chattogram.ctaLabel")}
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
