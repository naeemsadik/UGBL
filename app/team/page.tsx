import { InnerHero } from "@/components/inner-hero";

export const metadata = {
  title: "Our Team",
};

const team = [
  { role: "Managing Director", name: "Abdul Karim", exp: "20+ years maritime experience" },
  { role: "Head of Operations", name: "Sadia Rahman", exp: "Port call optimization specialist" },
  { role: "Chartering Lead", name: "Rezaul Haque", exp: "Dry cargo and voyage charter expert" },
  { role: "Logistics Manager", name: "Fahim Islam", exp: "Multi-modal delivery coordinator" },
];

export default function TeamPage() {
  return (
    <div>
      <InnerHero
        title="Our Team"
        subtitle="Experienced professionals dedicated to reliable shipping and logistics support."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <article key={member.name} className="info-card">
              <h2>{member.name}</h2>
              <p className="font-semibold text-[#0e4f8a]">{member.role}</p>
              <p>{member.exp}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
