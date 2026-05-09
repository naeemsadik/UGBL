"use client";

import heroImg from "@/assets/Mongla Port.webp";
import { PortDetailPage } from "@/components/port-detail-page";
import { useTranslation } from "@/lib/language-context";

export default function MonglaPortPage() {
  const { t } = useTranslation();

  const readMoreLinks = [
    { label: t("nav.chattogramPort"), href: "/port-info/chattogram" },
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
      title={t("port.mongla.mapTitle")}
      subtitle={t("port.mongla.subtitle")}
      heroImage={heroImg}
      overviewTitle={t("port.mongla.overviewTitle")}
      overview={t("port.mongla.overview")}
      mapTitle={t("port.mongla.mapTitle")}
      mapDescription={t("port.mongla.mapDescription")}
      mapQuery="Mongla Port, Bangladesh"
      facts={[
        {
          label: t("port.mongla.fact1Label"),
          value: "13-14.5 M",
          description: t("port.mongla.fact1Desc"),
        },
        {
          label: t("port.mongla.fact2Label"),
          value: "200 M",
          description: t("port.mongla.fact2Desc"),
        },
        {
          label: t("port.mongla.fact3Label"),
          value: "24/7",
          description: t("port.mongla.fact3Desc"),
        },
        {
          label: t("port.mongla.fact4Label"),
          value: "998-1003 kg/m3",
          description: t("port.mongla.fact4Desc"),
        },
      ]}
      technicalSections={[
        {
          title: t("port.mongla.tech1Title"),
          items: [
            { label: t("port.mongla.tech1Item1Label"), value: t("port.mongla.tech1Item1Value"), description: t("port.mongla.tech1Item1Desc") },
            { label: t("port.mongla.tech1Item2Label"), value: t("port.mongla.tech1Item2Value"), description: t("port.mongla.tech1Item2Desc") },
            { label: t("port.mongla.tech1Item3Label"), value: t("port.mongla.tech1Item3Value"), description: t("port.mongla.tech1Item3Desc") },
          ],
        },
      ]}
      notesTitle={t("port.mongla.notesTitle")}
      notes={[
        t("port.mongla.note1"),
        t("port.mongla.note2"),
        t("port.mongla.note3"),
        t("port.mongla.note4"),
        t("port.mongla.note5"),
      ]}
      ctaTitle={t("port.mongla.ctaTitle")}
      ctaText={t("port.mongla.ctaText")}
      ctaLabel={t("port.chattogram.ctaLabel")}
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
