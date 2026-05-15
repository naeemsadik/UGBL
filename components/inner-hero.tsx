import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import type { CSSProperties } from "react";

type InnerHeroProps = {
  title: string;
  subtitle: string;
  image?: StaticImageData | string;
  backgroundImage?: StaticImageData | string;
  breadcrumbs?: { label: string; href?: string }[];
};

export function InnerHero({
  title,
  subtitle,
  image,
  backgroundImage,
  breadcrumbs,
}: InnerHeroProps) {
  const backgroundUrl =
    typeof backgroundImage === "string"
      ? backgroundImage
      : backgroundImage?.src;
  const heroStyle: CSSProperties | undefined = backgroundUrl
    ? {
        backgroundImage: `url("${backgroundUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0d1b2a",
      }
    : undefined;

  return (
    <section
      className="inner-hero w-full m-0 p-0 relative overflow-hidden bg-[#1D2E54] min-h-[50vh] md:min-h-[70vh] flex flex-col justify-end"
      style={heroStyle}
    >
      {!backgroundUrl && image && (
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
      <div className="inner-overlay absolute inset-0 z-0"></div>
      <div className="relative z-10 w-full mb-0 mt-auto">
        {/* pt-36 md:pt-40 accounts for the fixed header height */}
        <div className="mx-auto w-full max-w-[1400px] px-6 pt-36 pb-20 md:pt-44 md:pb-28">
          {breadcrumbs && (
            <nav className="mb-6 flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-[0.25em] text-white/50 stagger-fade stagger-fade-d1">
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
          <h1 className="text-5xl font-black uppercase tracking-tight text-white md:text-8xl drop-shadow-md stagger-fade stagger-fade-d2">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-slate-200 md:text-xl stagger-fade stagger-fade-d3">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
