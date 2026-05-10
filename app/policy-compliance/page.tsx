import policyHero from "@/assets/Policy and Complainace .webp";
import { InnerHero } from "@/components/inner-hero";

const policies = [
  {
    title: "Risk Mitigation",
    intro:
      "River Tyne proactively identifies, assesses, and manages operational and environmental risks to:",
    bullets: [
      "Protect stakeholders and business objectives",
      "Preserve company reputation",
      "Ensure sustainable growth",
      "Maintain operational continuity",
    ],
    footer:
      "Risk management processes are regularly reviewed through internal audits and management reviews.",
  },
  {
    title: "Human Resource Policy",
    intro: "River Tyne recognizes people as its most valuable asset.",
    sections: [
      {
        label: "Shore Personnel:",
        bullets: [
          "Qualified employees with defined responsibilities",
          "Continuous training and professional development",
          "Performance evaluation systems",
        ],
      },
      {
        label: "Seafarers:",
        bullets: [
          "Qualified and competent crew",
          "Structured familiarization and training programs",
          "Protection of seafarers' welfare and working conditions",
        ],
      },
    ],
  },
  {
    title: "Purchasing Policy",
    intro: "River Tyne ensures responsible procurement practices by:",
    bullets: [
      "Working with approved suppliers",
      "Maintaining quality and cost efficiency",
      "Minimizing environmental impact",
      "Ensuring transparency and fairness",
    ],
  },
  {
    title: "Drug & Alcohol Policy",
    intro: "River Tyne Ltd maintains a strict Drug & Alcohol-Free Workplace.",
    bullets: [
      "Possession or use of drugs or alcohol onboard company vessels is prohibited",
      "All vessels operate as Dry Vessels",
      "Random and unannounced testing may be conducted",
      "Violations may result in disciplinary action or dismissal",
    ],
  },
  {
    title: "Security Policy",
    intro:
      "We maintain a secure operational environment through preventive security measures designed to protect ships, personnel, cargo, and property from unlawful acts.",
    footer: "Security practices comply with SOLAS Chapter XI-2 and the ISPS Code.",
  },
  {
    title: "Social Media Policy",
    intro:
      "River Tyne encourages responsible use of social media while protecting company reputation.",
    footer:
      "Employees must avoid unauthorized use of company logos, confidential information, or misleading content. Violations may lead to disciplinary or legal action.",
  },
  {
    title: "Information & Cyber Security",
    intro:
      "River Tyne implements an Information Security Management System aligned with ISO/IEC 27001 standards.",
    bulletsLabel: "Commitments include:",
    bullets: [
      "Protection of company and client information",
      "Controlled system access",
      "Incident reporting and risk monitoring",
      "Secure data processing and storage",
      "Continuous cybersecurity improvement",
    ],
  },
];

const ethicsPoints = [
  "Fairness & Transparency: We conduct business openly, honestly, and professionally with employees, clients, suppliers, and stakeholders.",
  "Independence & Anti-Corruption: The Company strictly prohibits bribery, corruption, or personal gain derived from company position.",
  "Confidentiality: All information obtained through business operations is protected against unauthorized disclosure.",
  "Professional Conduct: Employees are expected to act with competence, responsibility, and respect.",
  "Respectful Workplace: Harassment and bullying are not tolerated.",
];

const hseqPoints = [
  "Prevent accidents, injuries, and loss of life",
  "Protect the marine environment and property",
  "Ensure customer satisfaction",
  "Maintain compliance with international regulations",
  "Promote continuous improvement",
];

export default function PolicyCompliancePage() {
  return (
    <div>
      <InnerHero
        title="Compliance and Policy"
        subtitle=""
        backgroundImage={policyHero}
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
          <p className="mt-3 text-[1.04rem] leading-[1.75] text-[#4a586d]">
            Our operations are governed by a comprehensive Integrated Management
            System (IMS), supported by:
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1D2E54]/10 bg-[#F3F7FF] p-5">
              <ul className="list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
                <li>Quality Policy</li>
                <li>Health, Safety & Environmental Policy</li>
                <li>Energy Efficiency Management Policy</li>
                <li>Security Policy</li>
                <li>Drug & Alcohol Policy</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#49A98F]/12 bg-[#F2FBF8] p-5">
              <ul className="list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
                <li>Risk Mitigation Policy</li>
                <li>Human Resource Policy</li>
                <li>Purchasing Policy</li>
                <li>Social Media Policy</li>
                <li>Information & Cyber Security Policy</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="info-card !border-[#1D2E54]/10 !bg-[#F3F7FF]">
            <h2>Code of Ethics</h2>
            <p className="mt-3 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              River Tyne Ltd promotes integrity, professionalism, and
              accountability across all business activities.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              {ethicsPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-card !border-[#49A98F]/12 !bg-[#F2FBF8]">
            <h2>Health, Safety, Environment & Quality (HSEQ)</h2>
            <p className="mt-3 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              Health, Safety, Environmental protection, and Quality management
              form the foundation of our operations.
            </p>
            <p className="mt-3 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              Objectives:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              {hseqPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-[1.04rem] leading-[1.75] text-[#4a586d]">
              River Tyne Ltd is committed to achieving Zero Accidents and Zero
              Pollution.
            </p>
          </article>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {policies.map((policy) => (
            <article
              key={policy.title}
              className="rounded-2xl border border-[#dfe8f2] bg-[#f8fbff] p-5"
            >
              <h3 className="text-lg font-semibold text-[#1d2e54]">
                {policy.title}
              </h3>
              {policy.intro && (
                <p className="mt-2 text-[1rem] leading-[1.7] text-[#4a586d]">
                  {policy.intro}
                </p>
              )}
              {policy.bulletsLabel && (
                <p className="mt-3 text-[1rem] leading-[1.7] text-[#4a586d]">
                  {policy.bulletsLabel}
                </p>
              )}
              {policy.bullets && (
                <ul className="mt-3 list-disc space-y-2 pl-6 text-[1rem] leading-[1.7] text-[#4a586d]">
                  {policy.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {policy.sections?.map((section) => (
                <div key={section.label} className="mt-3">
                  <p className="text-[1rem] leading-[1.7] text-[#4a586d]">
                    {section.label}
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-6 text-[1rem] leading-[1.7] text-[#4a586d]">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {policy.footer && (
                <p className="mt-3 text-[1rem] leading-[1.7] text-[#4a586d]">
                  {policy.footer}
                </p>
              )}
            </article>
          ))}
        </div>

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
