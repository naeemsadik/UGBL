import Image from "next/image";
import Link from "next/link";

import hero1 from "@/assets/hero1.jpeg";
import hero2 from "@/assets/hero2.jpeg";
import hero3 from "@/assets/hero3.jpeg";
import hero4 from "@/assets/hero4.jpeg";

const MAP_EMBED_URL =
  "https://www.google.com/maps/place/Taher+Tower,+10+DIT+II+Cir,+Dhaka+1212,+Bangladesh/@23.794939,90.413738,18z/data=!4m6!3m5!1s0x3755c7a772dc07ed:0xdc353e764238d1e5!8m2!3d23.7948847!4d90.4136575!16s%2Fg%2F12hw6r7vx?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D";

const OFFICE_LOCATIONS = [
  {
    title: "Dhaka Office (Own Premises)",
    lines: [
      "Taher Tower (9th Floor)",
      "Plot-10, Gulshan C/A, Circle-2",
      "Dhaka 1212, Bangladesh",
      "Phone: +880258811819, +8802222286574",
      "Email ID: uni-global.bd@ugblgroup.com",
    ],
  },
  {
    title: "Chattogram Office (Own Premises)",
    lines: [
      "Yunusco City Center (8th Floor)",
      "807, C.D.A Avenue GEC Circle",
      "Chattogram 4100, Bangladesh",
      "Phone: +880-31-2866327",
      "Email ID: uni-global.ctg@ugblgroup.com",
    ],
  },
  {
    title: "Khulna / Mongla Office (Rental)",
    lines: [
      "Khan Tower",
      "A-50 (2nd Floor), K.D.A. Majid Sharani,",
      "Shibbari, Khulna -9100",
      "Phone: +880-41-722971, 724245",
      "Email ID: uni-global.khl@ugblgroup.com",
    ],
  },
];

const RECENT_POSTS = [
  {
    title: "Award received from MPA",
    date: "July 12, 2021",
    image: hero1,
  },
  {
    title: "New Shipping News",
    date: "May 17, 2021",
    image: hero2,
  },
  {
    title: "New warehouse now operational",
    date: "May 16, 2021",
    image: hero3,
  },
];

const GALLERY_IMAGES = [hero1, hero2, hero3, hero4, hero2, hero3];

const QUICK_LINKS = [
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faq" },
  { label: "Home", href: "/" },
  { label: "Vision and Mission", href: "/about" },
  { label: "Management Team", href: "/team" },
  { label: "Our Policy", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Our Team", href: "/team" },
  { label: "Our Portfolio", href: "/portfolio" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0c4d82] text-white">
      <section className="relative">
        <div className="h-[360px] w-full overflow-hidden border-t border-white/10 border-b border-white/10 bg-[#0b4d85]">
          <iframe
            src={MAP_EMBED_URL}
            title="Universe Logistics map"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </div>

        <div className="mx-auto mt-6 grid w-full max-w-[1100px] gap-4 px-6 pb-14 md:grid-cols-3">
          {OFFICE_LOCATIONS.map((office) => (
            <article
              key={office.title}
              className="rounded-sm border border-white/10 bg-[#1a5d95]/90 p-4 shadow-[0_8px_18px_rgba(2,20,39,0.28)]"
            >
              <h3 className="text-[1.05rem] font-semibold uppercase leading-tight text-white">
                {office.title}
              </h3>
              <div className="mt-3 space-y-1.5 text-[0.98rem] leading-7 text-[#dbe8f5]">
                {office.lines.map((line) => (
                  <p key={`${office.title}-${line}`}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0f4b81] pb-16">
        <div className="mx-auto grid w-full max-w-[1100px] gap-12 rounded-t-[24px] bg-[#0d4374] px-6 py-14 md:grid-cols-[1.15fr_1.1fr_0.9fr]">
          <div>
            <h3 className="text-[1.95rem] font-semibold uppercase tracking-wide text-[#38a8ff]">
              Recent Posts
            </h3>
            <div className="mt-3 h-[2px] w-14 bg-[#9ed3ff]" aria-hidden />
            <div className="mt-5 space-y-6">
              {RECENT_POSTS.map((post) => (
                <article key={post.title} className="flex items-start gap-3.5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px] object-cover"
                  />
                  <div>
                    <p className="text-[1.18rem] leading-7 text-white">
                      {post.title}
                    </p>
                    <p className="mt-0.5 text-sm text-[#d2e0ef]">{post.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[1.95rem] font-semibold uppercase tracking-wide text-[#38a8ff]">
              Photo Gallery
            </h3>
            <div className="mt-3 h-[2px] w-14 bg-[#9ed3ff]" aria-hidden />
            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {GALLERY_IMAGES.map((image, index) => (
                <Image
                  key={`${image.src}-${index}`}
                  src={image}
                  alt="Universe logistics activity"
                  width={116}
                  height={106}
                  className="h-[106px] w-full object-cover"
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[1.95rem] font-semibold uppercase tracking-wide text-[#38a8ff]">
              Quick Links
            </h3>
            <div className="mt-3 h-[2px] w-14 bg-[#9ed3ff]" aria-hidden />
            <ul className="mt-5 space-y-2.5 text-[1.18rem] text-white">
              {QUICK_LINKS.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[#9ed3ff]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10 bg-[#0b406d] px-6 py-5 text-center text-xs uppercase tracking-[0.12em] text-[#c9daec]">
        © {new Date().getFullYear()} Universe Logistics Ltd.
      </div>
    </footer>
  );
}
