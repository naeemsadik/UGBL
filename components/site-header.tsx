import Link from "next/link";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Our Service", href: "/services" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Investors", href: "/portfolio" },
  { label: "Sustainability", href: "/about" },
  { label: "Careers", href: "/contact" },
  { label: "Media", href: "/port-info" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/20 bg-[linear-gradient(180deg,rgba(1,22,48,0.74),rgba(1,22,48,0.26)_65%,rgba(1,22,48,0))] text-white">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-4 text-[0.82rem]">
        <Link
          href="/"
          className="text-4xl font-bold tracking-tight leading-none"
        >
          <span className="text-[#16a4ff]">U</span>niverse
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/contact"
            className="uppercase tracking-wide text-white/90 transition hover:text-white"
          >
            Contacts
          </Link>
          <label htmlFor="language-select" className="sr-only">
            Select language
          </label>
          <select
            id="language-select"
            defaultValue="EN"
            className="rounded-sm border border-white/35 bg-white/10 px-2.5 py-1 uppercase tracking-wide text-white outline-none backdrop-blur-sm"
            aria-label="Language"
          >
            <option value="EN" className="text-[#0f2d52]">
              EN
            </option>
            <option value="ES" className="text-[#0f2d52]">
              Spanish
            </option>
            <option value="ZH" className="text-[#0f2d52]">
              Chinese
            </option>
            <option value="BN" className="text-[#0f2d52]">
              Bangla
            </option>
          </select>
          <Link
            href="/contact"
            className="font-semibold uppercase tracking-[0.12em] text-white/85 transition hover:text-white"
          >
            Inquire
          </Link>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-center px-6 pb-5">
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[1.02rem] font-semibold uppercase tracking-wide text-white/95 transition hover:text-[#8fd3ff]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm border border-white/30 px-4 py-1.5 text-[0.95rem] font-semibold uppercase tracking-wide transition hover:bg-white/10"
          >
            Contact Us
          </Link>
        </nav>
      </div>
      <div className="h-px bg-white/15" />
    </header>
  );
}
