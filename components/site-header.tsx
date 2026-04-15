import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Our Team", href: "/team" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Port Info", href: "/port-info" },
  { label: "FAQ", href: "/faq" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#0d3f7a]"
        >
          UNIVERSE
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b-2 border-transparent text-[11px] font-semibold uppercase tracking-wide text-slate-800 transition hover:border-[#0e6cc7] hover:text-[#0e6cc7]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-md bg-[#0e4f8a] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0c4375]"
        >
          Contact Us
        </Link>
      </div>
      </div>
    </header>
  );
}
