import Link from "next/link";
import { HeroCarousel } from "@/components/hero-carousel";

export default function Home() {
  return (
    <div className="text-[#243041]">
      <HeroCarousel />

      <section className="bg-[#0d4e89] py-8 text-white">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-6 md:grid-cols-3">
          {[
            {
              label: "Call Center",
              sub: "Give us a call",
              value: "+880 258811819",
            },
            {
              label: "Working Hours",
              sub: "Sunday - Thursday 24/7",
              value: "AOH : Please contact via email",
            },
            {
              label: "Our Location",
              sub: "Taher Tower (9th Floor)",
              value: "Gulshan Circle-2, Dhaka",
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-3">
              <div className="mt-1 h-8 w-8 rounded-full border border-cyan-200/40" aria-hidden />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-100">
                  {item.label}
                </p>
                <p className="text-xs text-cyan-100/80">{item.sub}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="mx-auto max-w-3xl space-y-6 text-[19px] leading-[1.7] text-[#3d4756]">
          <p className="font-semibold text-[#1f2d41]">
            Universe Logistics Ltd. is one of the leading shipping agents,
            logistics service providers, chartering and trading companies.
          </p>
          <p>
            Universe Logistics Ltd is 17 years of experience in handling multiple
            breakbulk commodities including coal, clinker, stone, and boulder
            from overseas origin to local delivery sites in the country through
            Chattogram / Mongla / Payra port as per consignee&apos;s requirement.
          </p>
          <p>
            We have the capacity to provide complete logistics solutions.
            Nothing impossible for Universe, whatever the size or quantity of
            the cargo or whatever the mode of transportation does not matter to
            Universe Logistics team/company.
          </p>
          <p>
            Universe Logistics Ltd. is an ISO 9001: 2015 certified leading
            shipping agent, logistics service provider, chartering, and trading
            company.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-10 border-t border-slate-300 pt-10 md:grid-cols-2">
          <div>
            <h3 className="text-4xl font-bold uppercase text-[#0e3e68]">Connections:</h3>
            <p className="mt-4 text-lg leading-8 text-[#3d4756]">
              Principals can tap into Universe&apos;s excellent local connections and
              relations with both public and private sectors in the shipping
              industry.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold uppercase text-[#0e3e68]">24/7 Response:</h3>
            <p className="mt-4 text-lg leading-8 text-[#3d4756]">
              In addition to fast turnaround for all port calls, clients can also
              expect response to all inquiries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e4e8f3] py-16">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-6 md:grid-cols-[1.1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0f4c7d]">
              Our Services
            </p>
            <h2 className="mt-3 text-5xl font-extrabold uppercase leading-[1.02] text-[#0e2745]">
              What we can do
              <br />
              for you
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Shipping Services",
                body: "One of the leading shipping agencies in Bangladesh handling all vessel types and cargo operations.",
              },
              {
                title: "Chartering Services",
                body: "Experienced chartering desk in dry cargo and project charter for all major ports.",
              },
              {
                title: "Logistics Services",
                body: "Integrated logistics support including in-shore and off-shore equipment handling.",
              },
              {
                title: "Husbandry Services",
                body: "24/7 vessel husbandry support covering all vessels calling under our agency.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-slate-200 bg-white p-7 shadow-[0_12px_20px_rgba(14,39,69,0.08)]"
              >
                <h3 className="text-3xl font-bold text-[#13395f]">{item.title}</h3>
                <p className="mt-4 text-lg leading-8 text-[#4a5565]">{item.body}</p>
                <Link
                  href="/services"
                  className="mt-6 inline-block text-sm font-semibold uppercase tracking-wider text-[#0e4f8a]"
                >
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#001e47] py-16">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-8 px-6 md:grid-cols-[220px_1fr]">
          <div className="grid h-[190px] place-items-center rounded-xl bg-white text-6xl font-bold text-[#11467c]">
            GAC
          </div>
          <p className="max-w-4xl text-4xl italic leading-[1.45] text-white">
            GAC-Universe is a partnership between GAC and Universe Logistics Ltd,
            an established agency house headquartered in Dhaka, with branch
            offices at the key ports of Chattogram and Mongla.
          </p>
        </div>
      </section>

      <section className="bg-[#e4e8f3] px-6 py-14">
        <div className="mx-auto w-full max-w-[1200px]">
          <h2 className="text-center text-5xl font-bold uppercase tracking-[0.14em] text-[#0e3d6b]">
            Certifications
          </h2>
          <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-6">
            {[
              "BIMCO",
              "ISO 9001",
              "ITIC",
              "CCI",
              "FBCCI",
              "BAFFA",
              "DCCB",
              "BSC",
              "BSAA",
              "MCI",
              "BPTOA",
              "MictLife",
            ].map((item) => (
              <div
                key={item}
                className="flex h-14 items-center justify-center rounded-sm bg-white text-xs font-semibold text-slate-400"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 h-[320px] rounded-sm bg-[#cfd6e4] bg-[linear-gradient(120deg,#d8deea_0%,#cdd5e4_100%)]" />
        </div>
      </section>
    </div>
  );
}
