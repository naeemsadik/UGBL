import { InnerHero } from "@/components/inner-hero";

export const metadata = {
  title: "FAQ",
};

const faqs = [
  {
    q: "Which ports do you cover?",
    a: "We actively support port calls at Chattogram, Mongla, and Payra with associated inland logistics.",
  },
  {
    q: "Do you provide 24/7 response?",
    a: "Yes. Our operations desk remains available around the clock for urgent vessel and cargo matters.",
  },
  {
    q: "Can you handle project cargo?",
    a: "Yes, we manage planning, permits, handling, and delivery for oversized and project cargo assignments.",
  },
  {
    q: "Do you offer chartering support?",
    a: "Our chartering team supports voyage and time charter requirements for different vessel classes.",
  },
];

export default function FaqPage() {
  return (
    <div>
      <InnerHero
        title="FAQ"
        subtitle="Common questions about our shipping, chartering, and logistics operations."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="space-y-5">
          {faqs.map((item) => (
            <article key={item.q} className="info-card">
              <h2>{item.q}</h2>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
