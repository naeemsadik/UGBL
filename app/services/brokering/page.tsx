import { ServiceDetailPage } from "@/components/service-detail-page";
import { downloadLinks } from "@/lib/data/downloads";

const heroImageUrl =
  "https://public.axsmarine.com/wp-content/uploads/2026/05/freight-estimation-shipping.webp";

const readMoreLinks = [
  { label: "Port & OPA/CPA Agency", href: "/services/port-agency" },
  { label: "Husbandry Services", href: "/services/husbandry-agency" },
  { label: "Logistics Services", href: "/services/logistics-agency" },
];

const contact = {
  phone: "+880-2588-11819",
  email: "info@rivertyneltd.com",
  contactHref: "/contact",
  contactLabel: "Send Message",
};

export default function BrokeringPage() {
  return (
    <ServiceDetailPage
      title="Brokering"
      subtitle="Expert vessel and cargo brokering connecting shipowners with charterers for optimal shipping solutions."
      heroImage={heroImageUrl}
      heroImageSize="cover"
      heroImagePosition="center 30%"
      contentAlignment="right"
      overviewTitle="Comprehensive shipping brokering solutions"
      overview={[
        "River Tyne Ltd offers professional ship brokering and chartering services, acting as an intermediary between shipowners and charterers to facilitate the most advantageous shipping arrangements. Our experienced brokering team brings deep market knowledge and extensive industry connections to deliver optimal outcomes for all parties.",
        "We handle a wide range of brokering activities including dry cargo chartering, tanker fixtures, contract of affreightment (COA) negotiations, and forward freight agreements. Our team stays current with market trends, freight rates, and vessel availability to provide our clients with competitive edge in their shipping operations.",
      ]}
      serviceItems={[
        "Dry cargo chartering for coal, clinker, gypsum, aggregates, and other bulk commodities.",
        "Tanker brokering for petroleum products, vegetable oils, and chemical cargoes.",
        "Contract of Affreightment (COA) negotiation and documentation support.",
        "Forward Freight Agreement (FFA) advisory services for risk management.",
        "Vessel fixture coordination and placement services.",
        "Market rate analysis and freight forecasting for voyage planning.",
        "Cargo matching services connecting shippers with suitable vessel owners.",
        "Time charter and bareboat charter arrangement support.",
        "Baltic Exchange market intelligence and benchmarking.",
        "Post-fixture administrative and documentation support.",
        "Laytime calculation and dispute resolution assistance.",
      ]}
      additionalSections={[
        {
          title: "Market Expertise",
          content:
            "Our brokering team maintains active presence in both the dry bulk and tanker markets, with established relationships with major charterers, ship owners, and commodity traders. We provide transparent, professional brokering services that prioritize our clients' interests in every transaction.",
        },
        {
          title: "Coverage",
          content:
            "We facilitate brokering activities across all major Bangladeshi ports, with particular focus on Chattogram, Mongla, Payra, and Matarbari. Our local market knowledge combined with international connections enables us to source competitive freight rates and suitable vessels for our clients' cargo movements.",
        },
      ]}
      ctaTitle="Need brokering support?"
      ctaText="River Tyne can assist with vessel and cargo brokering, connecting you with the right partners for efficient shipping arrangements at competitive rates."
      ctaLabel="Contact us"
      ctaHref="/contact"
      readMoreLinks={readMoreLinks}
      downloadLinks={downloadLinks}
      contact={contact}
    />
  );
}
