import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type InnerHeroProps = {
  title: string;
  subtitle: string;
  image?: StaticImageData | string;
  breadcrumbs?: { label: string; href?: string }[];
};

export function InnerHero({ title, subtitle, image, breadcrumbs }: InnerHeroProps) {
  return (
    <section className="inner-hero relative overflow-hidden bg-[#1D2E54]">
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-25 grayscale-[0.3] brightness-75"
            priority
          />
        </div>
      )}
      <div className="inner-overlay relative z-10">
        {/* pt-36 md:pt-40 accounts for the fixed header height */}
        <div className="mx-auto w-full max-w-[1400px] px-6 pt-36 pb-20 md:pt-44 md:pb-28">
          {breadcrumbs && (
            <nav className="mb-6 flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-[0.25em] text-white/50">
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              {breadcrumbs.map((bc, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="opacity-40">/</span>
                  {bc.href ? (
                    <Link
                      href={bc.href}
                      className="hover:text-white transition-colors"
                    >
                      {bc.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{bc.label}</span>
                  )}
                </div>
              ))}
            </nav>
          )}
          <h1 className="text-5xl font-black uppercase tracking-tight text-white md:text-8xl drop-shadow-md">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-slate-200 md:text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
