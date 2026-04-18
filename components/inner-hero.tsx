type InnerHeroProps = {
  title: string;
  subtitle: string;
};

export function InnerHero({ title, subtitle }: InnerHeroProps) {
  return (
    <section className="inner-hero">
      <div className="inner-overlay">
        {/* pt-36 md:pt-40 accounts for the fixed header height */}
        <div className="mx-auto w-full max-w-[1200px] px-6 pt-36 pb-20 md:pt-40 md:pb-24">
          <h1 className="text-5xl font-extrabold uppercase tracking-tight text-white md:text-7xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-slate-200">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
