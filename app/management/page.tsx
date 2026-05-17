import Image from "next/image";

import { InnerHero } from "@/components/inner-hero";
import missionHero from "@/assets/Mission and Vision.jpg";
import leaderImage from "@/assets/Leader.jpg";

export const metadata = {
  title: "Visionary Leader | River Tyne Ltd",
  description:
    "Meet the leadership of River Tyne Ltd — experienced shipping professionals with decades of maritime industry expertise.",
};

const fleetData = [
  {
    sn: "01",
    name: "MT. TUG TAHMINA",
    capacity: "30 Ton (Bollard Pull)",
    type: "Tug Boat",
    flag: "Bangladesh",
    imo: "9131735",
    status: "Operational",
  },
  {
    sn: "02",
    name: "MT. SARJANA - 3",
    capacity: "1700 D.W.T",
    type: "Oil Tanker",
    flag: "Bangladesh",
    imo: "8772673",
    status: "Sold",
  },
  {
    sn: "03",
    name: "MV. SARJANA - 1",
    capacity: "1700 D.W.T",
    type: "Cargo",
    flag: "Bangladesh",
    imo: "N/A",
    status: "Sold",
  },
  {
    sn: "04",
    name: "MV. SARJANA - 2",
    capacity: "1500 D.W.T",
    type: "Cargo",
    flag: "Bangladesh",
    imo: "N/A",
    status: "Sold",
  },
];

export default function ManagementPage() {
  return (
    <div className="bg-slate-50">
      <InnerHero
        title="Visionary Leader"
        subtitle="Meet the Visionary Leader driving River Tyne Ltd's commitment to excellence in maritime services."
        backgroundImage={missionHero}
        backgroundPosition="center 60%"
      />

      <section className="mx-auto w-full max-w-[1200px] px-6 py-16 md:py-20">
        {/* Profile Card */}
        <div className="rounded-[28px] border border-white/60 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">
          {/* Top accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#1D2E54] via-[#3B71B5] to-[#49A98F]" />

          <div className="p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16 items-start">
              {/* Leader image */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1D2E54]/10 to-[#3B71B5]/10 border border-[#1D2E54]/10">
                  <Image
                    src={leaderImage}
                    alt="Mahmodul Islam Parvez"
                    fill
                    sizes="(max-width: 1024px) 70vw, 280px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Name & Title card */}
                <div className="w-full max-w-[280px] rounded-xl bg-[#1D2E54] px-5 py-4 text-center">
                  <p className="text-base font-black text-white leading-snug">
                    Mahmodul Islam Parvez
                  </p>
                  <p className="mt-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/60">
                    Chairman &amp; Managing Director
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div>
                <span className="inline-flex items-center rounded-full bg-[#1D2E54]/10 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#1D2E54]">
                  Profile
                </span>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-[#1D2E54] md:text-4xl">
                  Chairman &amp; Managing Director
                </h2>

                <div className="mt-6 space-y-4 text-[1rem] leading-[1.85] text-slate-600">
                  <p>
                    <strong>Mahmodul Islam Parvez </strong> is the Chairman and
                    Managing Director of the Company. He has an impressive gamut
                    of experience in the fields of shipping and logistics since
                    2004. His more than two decades of experience spans almost
                    all aspects including Liner Agency, NVOCC operations, Tramp
                    Agency &amp; all types of Dry Bulk, Tanker vessel operation,
                    LCL consolidation, International Freight Forwarding, etc.
                  </p>
                  <p>
                    On completion of his University degree in Marketing from the
                    <strong> University of Luton, UK </strong>, he joined the
                    family business — one of the leading shipping companies in
                    the country, awarded the{" "}
                    <span className="font-semibold text-[#1D2E54]">
                      Best Shipping Company in 2018
                    </span>{" "}
                    by Mongla Port Authority. Currently he is Managing Director
                    of the mother company{" "}
                    <strong>Uni-Global Business Ltd.</strong>,{" "}
                    <strong>River Tyne Ltd.</strong>,{" "}
                    <strong>
                      Uni Global Shipping and Logistics Services Limited
                    </strong>
                    , and <strong>Universe Shipping Lines Ltd.</strong>
                  </p>
                  <p>
                    Over the last two decades, he developed capabilities to work
                    in a challenging environment as well as with a cross section
                    of people both home and abroad.
                  </p>
                  <p>
                    In the sphere of ship owning, he has been involved right
                    from sourcing of vessels to arranging of finance,
                    Chartering, Evaluation of technical management and ship
                    demolishing, etc.
                  </p>
                  <p>
                    During the course of his rich career, he has done various
                    roles and at various points of time; additionally, handled
                    activities such as breakbulk shipments, project cargo, heavy
                    lift shipments, warehousing, exhibition shipments, air
                    freight and total logistics.
                  </p>
                </div>

                {/* Key roles / tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Liner Agency",
                    "NVOCC Operations",
                    "Tramp Agency",
                    "Dry Bulk",
                    "Tanker Operations",
                    "LCL Consolidation",
                    "International Freight Forwarding",
                    "Project Cargo",
                    "Heavy Lift",
                    "Ship Owning",
                    "Chartering",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#1D2E54]/15 bg-[#F3F7FF] px-3 py-1 text-[0.72rem] font-semibold text-[#1D2E54]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Ownership Table */}
        <div className="mt-10 rounded-[28px] border border-white/60 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
          <span className="inline-flex items-center rounded-full bg-[#49A98F]/12 px-4 py-1 text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#49A98F]">
            Fleet Ownership
          </span>
          <h2 className="mt-5 text-2xl font-black tracking-tight text-[#1D2E54] md:text-3xl">
            Vessel Portfolio
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Vessels owned and managed under the group&apos;s ship-owning
            portfolio.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1D2E54] text-white">
                  {[
                    "SN",
                    "Name",
                    "Capacity",
                    "Type",
                    "Flag",
                    "IMO No.",
                    "Status",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3.5 text-left text-[0.68rem] font-black uppercase tracking-[0.18em] whitespace-nowrap first:rounded-tl-2xl last:rounded-tr-2xl"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fleetData.map((row, i) => (
                  <tr
                    key={row.sn}
                    className={`border-t border-slate-100 transition-colors hover:bg-slate-50 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    <td className="px-4 py-3.5 font-bold text-[#1D2E54]">
                      {row.sn}
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-slate-800 whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="px-4 py-3.5 text-slate-600 whitespace-nowrap">
                      {row.capacity}
                    </td>
                    <td className="px-4 py-3.5 text-slate-600">{row.type}</td>
                    <td className="px-4 py-3.5 text-slate-600">{row.flag}</td>
                    <td className="px-4 py-3.5 font-mono text-xs text-slate-500">
                      {row.imo}
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide ${
                          row.status === "Operational"
                            ? "bg-[#49A98F]/15 text-[#2d7a65]"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
