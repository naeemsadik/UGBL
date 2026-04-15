import { InnerHero } from "@/components/inner-hero";

export const metadata = {
  title: "Port Info",
};

const ports = [
  {
    name: "Chattogram Port",
    info: "Primary seaport with extensive cargo handling, container operations, and vessel services.",
  },
  {
    name: "Mongla Port",
    info: "Strategic secondary gateway supporting bulk and breakbulk marine operations.",
  },
  {
    name: "Payra Port",
    info: "Emerging deep-sea access point for growing industrial and project cargo traffic.",
  },
];

export default function PortInfoPage() {
  return (
    <div>
      <InnerHero
        title="Port Info"
        subtitle="Operational insight and support coverage across Bangladesh's key maritime gateways."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {ports.map((port) => (
            <article key={port.name} className="info-card">
              <h2>{port.name}</h2>
              <p>{port.info}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
