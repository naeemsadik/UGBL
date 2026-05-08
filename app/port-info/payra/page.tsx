"use client";

import heroImg from "@/assets/Payra Port.jpg";
import { PortDetailPage } from "@/components/port-detail-page";
import { useTranslation } from "@/lib/language-context";

export default function PayraPortPage() {
  const { t } = useTranslation();

  const readMoreLinks = [
    { label: t("nav.chattogramPort"), href: "/port-info/chattogram" },
    { label: t("nav.monglaPort"), href: "/port-info/mongla" },
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
      title={t("port.payra.mapTitle")}
      subtitle={t("port.payra.subtitle")}
      heroImage={heroImg}
      overviewTitle={t("port.payra.overviewTitle")}
      overview={t("port.payra.overview")}
      mapTitle={t("port.payra.mapTitle")}
      mapDescription={t("port.payra.mapDescription")}
      mapQuery="Payra Port, Bangladesh"
      facts={[
        {
          label: t("port.payra.fact1Label"),
          value: "13-14 M",
          description: t("port.payra.fact1Desc"),
        },
        {
          label: t("port.payra.fact2Label"),
          value: "200 M",
          description: t("port.payra.fact2Desc"),
        },
        {
          label: t("port.payra.fact3Label"),
          value: "6-6.5 M",
          description: t("port.payra.fact3Desc"),
        },
        {
          label: t("port.payra.fact4Label"),
          value: t("port.payra.fact4Value"),
          description: t("port.payra.fact4Desc"),
        },
      ]}
      technicalSections={[
        {
          title: t("port.payra.tech1Title"),
          items: [
            { label: t("port.payra.tech1Item1Label"), value: t("port.payra.tech1Item1Value"), description: t("port.payra.tech1Item1Desc") },
            { label: t("port.payra.tech1Item2Label"), value: t("port.payra.tech1Item2Value"), description: t("port.payra.tech1Item2Desc") },
            { label: t("port.payra.tech1Item3Label"), value: "998-1001 kg/m3", description: t("port.payra.tech1Item3Desc") },
          ],
        },
      ]}
      notesTitle={t("port.payra.notesTitle")}
      notes={[
        t("port.payra.note1"),
        t("port.payra.note2"),
        t("port.payra.note3"),
        t("port.payra.note4"),
        t("port.payra.note5"),
      ]}
      ctaTitle={t("port.payra.ctaTitle")}
      ctaText={t("port.payra.ctaText")}
      ctaLabel={t("port.chattogram.ctaLabel")}
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
