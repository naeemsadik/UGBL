import { InnerHero } from "@/components/inner-hero";

export const metadata = {
  title: "Fleet",
};

const fleetItems = [
  {
    name: "Bulk Carriers",
    details:
      "Support for dry bulk cargo operations including coal, clinker, and stone movement.",
  },
  {
    name: "Container Vessels",
    details:
      "Complete vessel husbandry and port call coordination for container shipping lines.",
  },
  {
    name: "Project Cargo Vessels",
    details:
      "Specialized handling for heavy and oversized cargo with custom logistics planning.",
  },
  {
    name: "Tankers",
    details:
      "Operational support for fuel and LPG tanker calls at all major local ports.",
  },
];

export default function FleetPage() {
  return (
    <div>
      <InnerHero
        title="Our Fleet"
        subtitle="Operational support for multiple vessel classes across Chattogram, Mongla, and Payra."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {fleetItems.map((item) => (
            <article key={item.name} className="info-card">
              <h2>{item.name}</h2>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
