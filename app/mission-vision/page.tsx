import { InnerHero } from "@/components/inner-hero";

export default function MissionVisionPage() {
  return (
    <div>
      <InnerHero
        title="Mission and Vision"
        subtitle="River Tyne Ltd focuses on responsible ship management, long-term partnerships, and performance-led service delivery across every aspect of its operations."
      />
      <section className="mx-auto w-full max-w-[1200px] space-y-8 px-6 py-14">
        <article id="mission-vision" className="info-card">
          <h2>Our Vision</h2>
          <p>
            River Tyne Ltd aspires to be a leading provider of high-quality ship
            management services, supporting clients in achieving and exceeding
            their business objectives while building strong, long-term
            partnerships based on trust, professionalism, and performance.
          </p>
          <p>
            We aim to establish ourselves as a best-in-class benchmark
            organization within the global shipping industry, setting a
            reference point for operational results, ethical standards, safety
            performance, and service excellence.
          </p>
        </article>

        <article className="info-card">
          <h2>Our Mission</h2>
          <p>
            At River Tyne Ltd, we are committed to delivering high-quality,
            customized ship management services in full compliance with
            applicable legal requirements, customer expectations, and the
            standards of ISO 9001:2015.
          </p>
          <p>
            We continuously enhance our management systems through effective
            monitoring, performance analysis, training, and ongoing improvement
            initiatives.
          </p>
        </article>

        <article className="info-card">
          <h2>Our Key Objectives</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
            <li>Zero incidents</li>
            <li>Zero oil spills</li>
            <li>Reduction of emissions</li>
            <li>Zero work-related health incidents</li>
            <li>No marine or atmospheric pollution</li>
            <li>Zero security breaches</li>
            <li>Zero damage to property</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
