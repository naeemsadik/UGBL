"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/language-context";

/* ── Icon components ──────────────────────────────── */
function IconAnnouncement() {
  return (
    <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none">
      <rect x="4" y="12" width="56" height="40" rx="6" fill="#2E9E6F" opacity="0.12" />
      <rect x="12" y="20" width="20" height="14" rx="3" fill="#2E9E6F" />
      <rect x="12" y="38" width="40" height="3" rx="1.5" fill="#2E9E6F" opacity="0.3" />
      <rect x="12" y="44" width="30" height="3" rx="1.5" fill="#2E9E6F" opacity="0.2" />
      <circle cx="46" cy="26" r="8" fill="#2088C0" opacity="0.2" />
      <path d="M43 26l2 2 5-5" stroke="#2088C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconNews() {
  return (
    <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none">
      <rect x="6" y="8" width="52" height="48" rx="6" fill="#2088C0" opacity="0.12" />
      <rect x="14" y="16" width="36" height="16" rx="3" fill="#2088C0" opacity="0.25" />
      <rect x="14" y="36" width="24" height="3" rx="1.5" fill="#1B2D5A" opacity="0.3" />
      <rect x="14" y="42" width="36" height="3" rx="1.5" fill="#1B2D5A" opacity="0.2" />
      <rect x="14" y="48" width="18" height="3" rx="1.5" fill="#1B2D5A" opacity="0.15" />
    </svg>
  );
}

function IconPort() {
  return (
    <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="26" fill="#2E9E6F" opacity="0.1" />
      <path d="M20 44 L32 16 L44 44" stroke="#2E9E6F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M24 38 L40 38" stroke="#2E9E6F" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="20" r="3" fill="#2088C0" />
      <path d="M16 48 L48 48" stroke="#1B2D5A" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

function IconGlobal() {
  return (
    <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="24" stroke="#2088C0" strokeWidth="2" opacity="0.3" />
      <ellipse cx="32" cy="32" rx="12" ry="24" stroke="#2088C0" strokeWidth="1.5" opacity="0.3" />
      <path d="M10 24h44M10 40h44" stroke="#2088C0" strokeWidth="1.5" opacity="0.2" />
      <circle cx="32" cy="32" r="5" fill="#2E9E6F" opacity="0.8" />
      <circle cx="46" cy="20" r="3" fill="#2088C0" opacity="0.6" />
      <circle cx="18" cy="42" r="3" fill="#2088C0" opacity="0.6" />
    </svg>
  );
}

/* ── Info Cards Row ───────────────────────────────── */
export function InfoCards() {
  const { t } = useTranslation();

  const cards = [
    {
      label: t("home.card1Label"),
      title: t("home.card1Title"),
      icon: <IconAnnouncement />,
      href: "/about",
      color: "#2E9E6F",
    },
    {
      label: t("home.card2Label"),
      title: t("home.card2Title"),
      icon: <IconNews />,
      href: "/services",
      color: "#2088C0",
    },
    {
      label: t("home.card3Label"),
      title: t("home.card3Title"),
      icon: <IconPort />,
      href: "/port-info",
      color: "#2E9E6F",
    },
    {
      label: t("home.card4Label"),
      title: t("home.card4Title"),
      icon: <IconGlobal />,
      href: "/contact",
      color: "#2088C0",
    },
  ];

  return (
    <section className="relative z-20 px-4 py-12 md:px-6 bg-[#EFF5F8]">
      <div className="mx-auto grid w-full max-w-[1320px] gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="group rounded-lg border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] hover:-translate-y-1"
          >
            {/* Accent label */}
            <p
              className="text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: card.color }}
            >
              {card.label}
            </p>

            {/* Icon */}
            <div className="mt-4">{card.icon}</div>

            {/* Title */}
            <h3 className="mt-4 text-[0.95rem] font-semibold leading-snug text-[#1B2D5A]">
              {card.title}
            </h3>

            {/* CTA */}
            <p
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold transition-colors group-hover:gap-2"
              style={{ color: card.color }}
            >
              {t("home.viewMore")}
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
