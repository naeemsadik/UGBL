"use client";

import { useTranslation } from "@/lib/language-context";
import { InnerHero } from "@/components/inner-hero";

export default function PortInfoPage() {
  const { t } = useTranslation();

  const ports = [
    { name: t("portInfo.chattogram"), info: t("portInfo.chattogramDesc") },
    { name: t("portInfo.mongla"), info: t("portInfo.monglaDesc") },
    { name: t("portInfo.payra"), info: t("portInfo.payraDesc") },
  ];

  return (
    <div>
      <InnerHero title={t("portInfo.title")} subtitle={t("portInfo.subtitle")} />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {ports.map((port) => (
            <article key={port.name} className="info-card">
              <h2>{port.name}</h2>
              <p>{port.info}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
