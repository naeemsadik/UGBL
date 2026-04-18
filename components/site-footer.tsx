"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/language-context";

import hero1 from "@/assets/hero1.jpeg";
import hero2 from "@/assets/hero2.jpeg";
import hero3 from "@/assets/hero3.jpeg";
import hero4 from "@/assets/hero4.jpeg";

const MAP_EMBED_URL =
  "https://www.google.com/maps/place/Taher+Tower,+10+DIT+II+Cir,+Dhaka+1212,+Bangladesh/@23.794939,90.413738,18z/data=!4m6!3m5!1s0x3755c7a772dc07ed:0xdc353e764238d1e5!8m2!3d23.7948847!4d90.4136575!16s%2Fg%2F12hw6r7vx?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D";

const GALLERY_IMAGES = [hero1, hero2, hero3, hero4, hero2, hero3];

export function SiteFooter() {
  const { t } = useTranslation();

  const OFFICE_LOCATIONS = [
    {
      title: t("footer.dhakOffice"),
      lines: [
        "Taher Tower (9th Floor)",
        "Plot-10, Gulshan C/A, Circle-2",
        "Dhaka 1212, Bangladesh",
        "Phone: +880258811819, +8802222286574",
        "Email ID: uni-global.bd@ugblgroup.com",
      ],
    },
    {
      title: t("footer.ctgOffice"),
      lines: [
        "Yunusco City Center (8th Floor)",
        "807, C.D.A Avenue GEC Circle",
        "Chattogram 4100, Bangladesh",
        "Phone: +880-31-2866327",
        "Email ID: uni-global.ctg@ugblgroup.com",
      ],
    },
    {
      title: t("footer.khulnaOffice"),
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
    { title: t("footer.awardMPA"), date: "July 12, 2021", image: hero1 },
    { title: t("footer.newShipping"), date: "May 17, 2021", image: hero2 },
    { title: t("footer.newWarehouse"), date: "May 16, 2021", image: hero3 },
  ];

  const QUICK_LINKS = [
    { label: t("footer.contact"), href: "/contact" },
    { label: t("footer.faqs"), href: "/faq" },
    { label: t("footer.home"), href: "/" },
    { label: t("footer.visionMission"), href: "/about" },
    { label: t("footer.managementTeam"), href: "/team" },
    { label: t("footer.ourPolicy"), href: "/about" },
    { label: t("footer.ourServices"), href: "/services" },
    { label: t("footer.ourFleet"), href: "/fleet" },
    { label: t("footer.ourTeam"), href: "/team" },
    { label: t("footer.ourPortfolio"), href: "/portfolio" },
  ];

  return (
    <footer className="bg-[#0e4a6e] text-white">
      <section className="relative">
        <div className="h-[360px] w-full overflow-hidden border-t border-white/10 border-b border-white/10 bg-[#0d4264]">
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

      <section className="bg-[#0c3f5d] pb-16">
        <div className="mx-auto grid w-full max-w-[1100px] gap-12 rounded-t-[24px] bg-[#0b3752] px-6 py-14 md:grid-cols-[1.15fr_1.1fr_0.9fr]">
          <div>
            <h3 className="text-[1.95rem] font-semibold uppercase tracking-wide text-[#4ec2f7]">
              {t("footer.recentPosts")}
            </h3>
            <div className="mt-3 h-[2px] w-14 bg-[#1a8ec8]" aria-hidden />
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
            <h3 className="text-[1.95rem] font-semibold uppercase tracking-wide text-[#4ec2f7]">
              {t("footer.photoGallery")}
            </h3>
            <div className="mt-3 h-[2px] w-14 bg-[#1a8ec8]" aria-hidden />
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
            <h3 className="text-[1.95rem] font-semibold uppercase tracking-wide text-[#4ec2f7]">
              {t("footer.quickLinks")}
            </h3>
            <div className="mt-3 h-[2px] w-14 bg-[#1a8ec8]" aria-hidden />
            <ul className="mt-5 space-y-2.5 text-[1.18rem] text-white">
              {QUICK_LINKS.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[#4ec2f7]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10 bg-[#082d45] px-6 py-5 text-center text-xs uppercase tracking-[0.12em] text-[#c9daec]">
        © {new Date().getFullYear()} Universe Logistics Ltd.
      </div>
    </footer>
  );
}
