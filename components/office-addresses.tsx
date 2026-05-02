"use client";

import { useTranslation } from "@/lib/language-context";

/* ── SVG icon helpers ──────────────────────────────── */
function LocationIcon() {
  return (
    <svg
      className="office-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="office-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      className="office-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/* ── Office data ───────────────────────────────────── */
const offices = [
  {
    titleKey: "offices.dhakaTitle" as const,
    lines: [
      { type: "address" as const, key: "offices.dhakaLine1" as const },
      { type: "address" as const, key: "offices.dhakaLine2" as const },
      { type: "address" as const, key: "offices.dhakaLine3" as const },
    ],
    phone: "offices.dhakaPhone" as const,
    email: "offices.dhakaEmail" as const,
  },
  {
    titleKey: "offices.chattogramTitle" as const,
    lines: [
      { type: "address" as const, key: "offices.chattogramLine1" as const },
      { type: "address" as const, key: "offices.chattogramLine2" as const },
      { type: "address" as const, key: "offices.chattogramLine3" as const },
    ],
    phone: "offices.chattogramPhone" as const,
    email: "offices.chattogramEmail" as const,
  },
  {
    titleKey: "offices.khulnaTitle" as const,
    lines: [
      { type: "address" as const, key: "offices.khulnaLine1" as const },
      { type: "address" as const, key: "offices.khulnaLine2" as const },
      { type: "address" as const, key: "offices.khulnaLine3" as const },
    ],
    phone: "offices.khulnaPhone" as const,
    email: "offices.khulnaEmail" as const,
  },
];

export function OfficeAddresses() {
  const { t } = useTranslation();

  return (
    <section className="office-addresses" id="office-addresses">
      {/* Background overlay */}
      <div className="office-addresses-inner">
        <h2 className="office-section-title">{t("offices.sectionTitle")}</h2>
        <p className="office-section-subtitle">{t("offices.sectionSubtitle")}</p>

        <div className="office-grid">
          {offices.map((office) => (
            <div className="office-card" key={office.titleKey}>
              {/* Card accent bar */}
              <div className="office-card-accent" />

              <h3 className="office-card-title">{t(office.titleKey)}</h3>

              {/* Address lines */}
              <div className="office-card-row">
                <LocationIcon />
                <div>
                  {office.lines.map((line) => (
                    <p key={line.key} className="office-card-text">
                      {t(line.key)}
                    </p>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div className="office-card-row">
                <PhoneIcon />
                <p className="office-card-highlight">{t(office.phone)}</p>
              </div>

              {/* Email */}
              <div className="office-card-row">
                <EmailIcon />
                <p className="office-card-highlight">{t(office.email)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
