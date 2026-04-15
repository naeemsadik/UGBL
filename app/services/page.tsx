import { InnerHero } from "@/components/inner-hero";

export const metadata = {
  title: "Services",
};

const services = [
  {
    name: "Website Strategy",
    details:
      "Audience research, information architecture, and conversion-focused planning before design starts.",
  },
  {
    name: "UI/UX Design",
    details:
      "Modern, responsive interfaces built around your brand voice and business positioning.",
  },
  {
    name: "Next.js Development",
    details:
      "Production-ready implementation with reusable components, clean code, and CMS support.",
  },
  {
    name: "SEO + Analytics Setup",
    details:
      "Technical SEO, schema, metadata, and analytics instrumentation for clear reporting.",
  },
  {
    name: "Performance Optimization",
    details:
      "Core Web Vitals improvements, image optimization, and page-speed-focused refinements.",
  },
  {
    name: "Ongoing Support",
    details:
      "Post-launch maintenance, A/B testing support, and iterative improvements each month.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <InnerHero
        title="Services"
        subtitle="Comprehensive shipping and logistics support for vessel owners, operators, and cargo clients."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.name} className="info-card">
              <h2>{service.name}</h2>
              <p>{service.details}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
