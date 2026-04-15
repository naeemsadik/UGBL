import { InnerHero } from "@/components/inner-hero";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <div>
      <InnerHero
        title="About Us"
        subtitle="Universe Logistics Ltd. is a trusted shipping, logistics, and chartering agency established in 2004."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="info-card">
            <h2>Who We Are</h2>
            <p>
              We are one of the leading shipping agents in Bangladesh with
              services spanning vessel agency, chartering, husbandry support,
              and cargo logistics.
            </p>
          </article>
          <article className="info-card">
            <h2>Our Vision</h2>
            <p>
              To be the most dependable and responsive maritime service provider
              in the region, known for precision and speed.
            </p>
          </article>
          <article className="info-card">
            <h2>Our Mission</h2>
            <p>
              Deliver complete solutions for principals and clients through
              experienced teams, strong local networks, and around-the-clock
              communication.
            </p>
          </article>
          <article className="info-card">
            <h2>Certifications</h2>
            <p>
              ISO 9001:2015 certified with active memberships across major local
              and global maritime associations.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
