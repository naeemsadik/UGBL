import { PortDetailPage } from "@/components/port-detail-page";
import { portImages } from "@/lib/port-images";
import { ports } from "@/lib/data/ports";
import { notFound } from "next/navigation";

export default async function ChattogramPortPage() {
  // In a real scenario with a configured absolute URL:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ports/chattogram`);
  // const data = await res.json();
  
  // Fetching data from our consolidated data source (acting as our API source)
  const data = ports["chattogram"];

  if (!data) {
    notFound();
  }

  return (
    <PortDetailPage
      slug={data.slug}
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
      mergeCoreSections
      flatCoreSections={data.flatCoreSections}
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
