import { InnerHero } from "@/components/inner-hero";

const policies = [
  {
    title: "Quality Policy",
    summary:
      "We deliver services through a controlled quality framework focused on consistency, compliance, and customer satisfaction.",
  },
  {
    title: "Health, Safety & Environmental Policy",
    summary:
      "We protect human life, the marine environment, vessels, and property through preventive controls and disciplined execution.",
  },
  {
    title: "Energy Efficiency Management Policy",
    summary:
      "We manage operational energy use responsibly and seek practical improvements that reduce waste and emissions.",
  },
  {
    title: "Security Policy",
    summary:
      "We maintain preventive security measures designed to protect ships, personnel, cargo, and property from unlawful acts.",
  },
  {
    title: "Drug & Alcohol Policy",
    summary:
      "We operate a strict drug and alcohol-free workplace, including dry vessel operations and enforcement measures where needed.",
  },
  {
    title: "Risk Mitigation Policy",
    summary:
      "We identify, assess, and mitigate risks proactively to preserve continuity, reputation, and sustainable growth.",
  },
  {
    title: "Human Resource Policy",
    summary:
      "We invest in qualified personnel, training, familiarization, and welfare to support long-term competency and retention.",
  },
  {
    title: "Purchasing Policy",
    summary:
      "We procure responsibly through approved suppliers, transparent practices, and quality-and-cost conscious decision making.",
  },
  {
    title: "Social Media Policy",
    summary:
      "We expect responsible online conduct that protects company reputation, logos, and confidential information.",
  },
  {
    title: "Information & Cyber Security Policy",
    summary:
      "We protect company and client information with controlled access, incident reporting, secure storage, and continuous improvement.",
  },
];

const ethicsPoints = [
  "We conduct business openly, honestly, and professionally with employees, clients, suppliers, and stakeholders.",
  "We strictly prohibit bribery, corruption, or personal gain derived from company position.",
  "We protect all information obtained through business operations from unauthorized disclosure.",
  "We expect employees to act with competence, responsibility, and respect.",
  "Harassment and bullying are not tolerated.",
];

const hseqPoints = [
  "Prevent accidents, injuries, and loss of life.",
  "Protect the marine environment and property.",
  "Ensure customer satisfaction.",
  "Maintain compliance with international regulations.",
  "Promote continuous improvement.",
];

export default function PolicyCompliancePage() {
  return (
    <div>
      <InnerHero
        title="Policy and Compliance"
        subtitle="River Tyne Ltd operates under an Integrated Management System designed to support responsible, ethical, safe, and environmentally sustainable performance."
      />

      <section className="mx-auto w-full max-w-[1200px] space-y-8 px-6 py-14">
        <article className="info-card">
          <h2>Our Commitment</h2>
          <p>
            River Tyne Ltd is fully committed to operating in a responsible,
            ethical, and environmentally sustainable manner. As a Shipping,
            Husbandry, and Logistics company, we maintain a Zero Tolerance and
            Zero Pollution philosophy to protect the environment, safeguard
            personnel, and ensure operational excellence.
          </p>
          <p className="mt-4">
            We continuously identify, assess, and mitigate risks while
            maintaining strict compliance with international maritime
            regulations, industry standards, and company management systems.
          </p>
        </article>

        <article className="info-card">
          <h2>Corporate Policies</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
            <li>Quality Policy</li>
            <li>Health, Safety & Environmental Policy</li>
            <li>Energy Efficiency Management Policy</li>
            <li>Security Policy</li>
            <li>Drug & Alcohol Policy</li>
            <li>Risk Mitigation Policy</li>
            <li>Human Resource Policy</li>
            <li>Purchasing Policy</li>
            <li>Social Media Policy</li>
            <li>Information & Cyber Security Policy</li>
            <li>Code of Ethics</li>
          </ul>
        </article>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="info-card">
            <h2>Code of Ethics</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              {ethicsPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-card">
            <h2>HSEQ</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              {hseqPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="info-card">
          <h2>Policy Areas</h2>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="rounded-2xl border border-[#dfe8f2] bg-[#f8fbff] p-5"
              >
                <h3 className="text-lg font-semibold text-[#1d2e54]">
                  {policy.title}
                </h3>
                <p className="mt-2 text-[1rem] leading-[1.7] text-[#4a586d]">
                  {policy.summary}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="info-card">
          <h2>Continuous Improvement</h2>
          <p>
            River Tyne Ltd reviews its policies annually to ensure
            effectiveness, compliance, and alignment with industry best
            practices. Policies are communicated throughout the organization and
            made available to relevant stakeholders.
          </p>
        </article>
      </section>
    </div>
  );
}
