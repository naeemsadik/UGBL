import { InnerHero } from "@/components/inner-hero";

export const metadata = {
  title: "Portfolio",
};

const projects = [
  {
    title: "Coal Vessel Discharge Program",
    desc: "End-to-end agency and logistics support for high-volume clinker and coal imports.",
  },
  {
    title: "Multi-Port Charter Execution",
    desc: "Coordinated chartering and berth planning across major ports with strict turnaround goals.",
  },
  {
    title: "Industrial Project Cargo Handling",
    desc: "Managed heavy and oversized equipment delivery from vessel to inland destination.",
  },
  {
    title: "24/7 Husbandry Support Operation",
    desc: "Continuous support for vessel crew changes, supplies, and clearance operations.",
  },
];

export default function PortfolioPage() {
  return (
    <div>
      <InnerHero
        title="Portfolio"
        subtitle="A snapshot of logistics and maritime assignments delivered by Universe Logistics."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="info-card">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
