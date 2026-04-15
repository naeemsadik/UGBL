import Link from "next/link";

const links = [
  { label: "Contact", href: "/contact" },
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "FAQs", href: "/faq" },
  { label: "Vision", href: "/about" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Web Mail", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#010924] text-white">
      <section className="border-b border-[#11386a] bg-[#052452]">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-8 px-6 py-11 md:grid-cols-4">
          {[
            { value: "420", suffix: "k", label: "Annual Tonnage" },
            { value: "85", suffix: "+", label: "Global Ports" },
            { value: "12", suffix: "", label: "Strategic Hubs" },
            { value: "0.02", suffix: "%", label: "Error Margin" },
          ].map((metric) => (
            <div key={metric.label}>
              <p className="text-5xl font-bold tracking-tight text-[#69dbef]">
                {metric.value}
                <span className="text-3xl">{metric.suffix}</span>
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-300">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="text-3xl font-bold text-white">UNIVERSE</p>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Leading the charge in global maritime logistics since 2004. Mastery
            of the abyssal horizon.
          </p>
          <p className="mt-5 text-xs text-slate-500">social icons</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Recent Posts
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>Award received from MPA.</li>
            <li>New Shipping News</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Photo Gallery
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-14 rounded-sm bg-[#22365a] opacity-80"
                aria-hidden
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-300">
            Quick Links
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-xs text-slate-400">
            {links.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#0f2a4f] px-6 py-5 text-center text-[11px] uppercase tracking-wider text-slate-500">
        © {new Date().getFullYear()} Universe Logistics Ltd. Mastery of the
        abyssal horizon.
      </div>
    </footer>
  );
}
