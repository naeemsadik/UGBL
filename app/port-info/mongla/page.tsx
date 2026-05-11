import { PortDetailPage } from "@/components/port-detail-page";
import { portImages } from "@/lib/port-images";
import { ports } from "@/lib/data/ports";
import { notFound } from "next/navigation";

export default async function MonglaPortPage() {
  const data = ports["mongla"];

  if (!data) {
    notFound();
  }

  return (
    <PortDetailPage
      title={data.title}
      subtitle={data.subtitle}
      heroImage={portImages[data.heroImageName]}
      overviewTitle={data.overviewTitle}
      overview={data.overview}
      facts={data.facts}
      mapTitle={data.mapTitle}
      mapDescription={data.mapDescription}
      mapQuery={data.mapQuery}
      technicalSections={data.technicalSections}
      berthRestrictions={data.berthRestrictions}
      lngTerminals={data.lngTerminals}
      notesTitle={data.notesTitle}
      notes={data.notes}
      ctaTitle={data.ctaTitle}
      ctaText={data.ctaText}
      ctaLabel={data.ctaLabel}
      ctaHref={data.ctaHref}
      readMoreLinks={data.readMoreLinks}
      downloadLinks={data.downloadLinks}
      contact={data.contact}
    />
  );
}
