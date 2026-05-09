"use client";

import heroImg from "@/assets/Matarbari Port.jpg";
import { PortDetailPage } from "@/components/port-detail-page";
import { useTranslation } from "@/lib/language-context";

export default function MatarbariPortPage() {
  const { t } = useTranslation();

  const readMoreLinks = [
    { label: t("nav.chattogramPort"), href: "/port-info/chattogram" },
    { label: t("nav.monglaPort"), href: "/port-info/mongla" },
    { label: t("nav.payraPort"), href: "/port-info/payra" },
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
      title={t("port.matarbari.mapTitle")}
      subtitle={t("port.matarbari.subtitle")}
      heroImage={heroImg}
      overviewTitle={t("port.matarbari.overviewTitle")}
      overview={t("port.matarbari.overview")}
      mapTitle={t("port.matarbari.mapTitle")}
      mapDescription={t("port.matarbari.mapDescription")}
      mapQuery="Matarbari Coal Jetty, Bangladesh"
      facts={[
        {
          label: t("port.matarbari.fact1Label"),
          value: "230 M",
          description: t("port.matarbari.fact1Desc"),
        },
        {
          label: t("port.matarbari.fact2Label"),
          value: "11.5 M",
          description: t("port.matarbari.fact2Desc"),
        },
        {
          label: t("port.matarbari.fact3Label"),
          value: "12.0 M",
          description: t("port.matarbari.fact3Desc"),
        },
        {
          label: t("port.matarbari.fact4Label"),
          value: t("port.matarbari.fact4Value"),
          description: t("port.matarbari.fact4Desc"),
        },
      ]}
      technicalSections={[
        {
          title: t("port.matarbari.tech1Title"),
          items: [
            { label: t("port.matarbari.tech1Item1Label"), value: t("port.matarbari.tech1Item1Value"), description: t("port.matarbari.tech1Item1Desc") },
            { label: t("port.matarbari.tech1Item2Label"), value: t("port.matarbari.tech1Item2Value"), description: t("port.matarbari.tech1Item2Desc") },
            { label: t("port.matarbari.tech1Item3Label"), value: t("port.matarbari.tech1Item3Value"), description: t("port.matarbari.tech1Item3Desc") },
            { label: t("port.matarbari.tech1Item4Label"), value: t("port.matarbari.tech1Item4Value"), description: t("port.matarbari.tech1Item4Desc") },
          ],
        },
      ]}
      notesTitle={t("port.matarbari.notesTitle")}
      notes={[
        t("port.matarbari.note1"),
        t("port.matarbari.note2"),
        t("port.matarbari.note3"),
        t("port.matarbari.note4"),
        t("port.matarbari.note5"),
      ]}
      ctaTitle={t("port.matarbari.ctaTitle")}
      ctaText={t("port.matarbari.ctaText")}
      ctaLabel={t("port.chattogram.ctaLabel")}
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
