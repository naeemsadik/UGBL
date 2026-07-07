"use client";

import servicesBg from "@/assets/Port Agency .jpeg";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { useTranslation } from "@/lib/language-context";

export default function PortAgencyPage() {
  const { t, tImage } = useTranslation();

  // readMoreLinks, downloadLinks, and contact removed for services

  return (
    <ServiceDetailPage
      title={t("service.portAgency.title")}
      subtitle={t("service.portAgency.subtitle")}
      heroImage={tImage("image.servicePortBg", servicesBg)}
      overviewTitle={t("service.portAgency.overviewTitle")}
      overview={t("service.portAgency.overview")}
      serviceItemsLabel={null}
      serviceItemsTitle={t("service.portAgency.serviceLabel")}
      serviceDescription={t("service.portAgency.serviceDesc")}
      serviceDescriptionTitle="Our Port Agency Services"
      serviceItemsCompact
      serviceItems={[
        t("service.portAgency.item1"),
        t("service.portAgency.item2"),
        t("service.portAgency.item3"),
        t("service.portAgency.item4"),
        t("service.portAgency.item5"),
        t("service.portAgency.item6"),
        t("service.portAgency.item7"),
        t("service.portAgency.item8"),
        t("service.portAgency.item9"),
        t("service.portAgency.item10"),
      ].filter(Boolean)}
      additionalSections={[
        {
          title: t("service.portAgency.secTitle"),
          titleStyle: "heading",
          content: t("service.portAgency.secContent"),
          itemsLabel: null,
          itemsTitle: t("service.portAgency.secItemsTitle"),
          itemsCompact: true,
          items: [
            t("service.portAgency.secItem1"),
            t("service.portAgency.secItem2"),
            t("service.portAgency.secItem3"),
            t("service.portAgency.secItem4"),
            t("service.portAgency.secItem5"),
            t("service.portAgency.secItem6"),
            t("service.portAgency.secItem7"),
            t("service.portAgency.secItem8"),
            t("service.portAgency.secItem9"),
            t("service.portAgency.secItem10"),
          ].filter(Boolean),
        },
        {
          title: t("service.portAgency.commitTitle"),
          titleStyle: "heading",
          content: t("service.portAgency.commitContent"),
        },
      ]}
      ctaTitle={t("service.portAgency.ctaTitle")}
      ctaText={t("service.portAgency.ctaText")}
      ctaLabel={t("service.common.contactUs")}
      ctaHref="/contact"
    />
  );
}
