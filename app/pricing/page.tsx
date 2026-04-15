import Link from "next/link";
import { InnerHero } from "@/components/inner-hero";

export const metadata = {
  title: "Pricing",
};

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Ideal for new teams launching a clear and credible web presence.",
    features: ["Up to 5 pages", "Custom responsive design", "Basic SEO setup"],
  },
  {
    name: "Growth",
    price: "$5,500",
    description: "For teams ready to scale leads with stronger messaging and performance.",
    features: [
      "Up to 12 pages",
      "Advanced conversion-focused UX",
      "CMS integration",
      "Analytics dashboard",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "Comprehensive website programs for larger products and complex needs.",
    features: [
      "Multi-language or multi-brand architecture",
      "Custom integrations",
      "Ongoing optimization retainer",
    ],
  },
];

export default function PricingPage() {
  return (
    <div>
      <InnerHero
        title="Pricing"
        subtitle="Flexible engagement models for recurring support and project-based maritime operations."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`info-card flex h-full flex-col ${
                plan.featured ? "ring-2 ring-[#0e4f8a]/30" : ""
              }`}
            >
              <h2>{plan.name}</h2>
              <p className="mt-2 text-4xl font-bold text-[#0e3d6b]">{plan.price}</p>
              <p>{plan.description}</p>
              <ul className="mt-5 space-y-2 text-base text-[#3f4f61]">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <Link href="/contact" className="hero-btn-primary mt-8 w-fit">
                Get Started
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
