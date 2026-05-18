"use client";

import { InnerHero } from "@/components/inner-hero";
import heroImg from "@/assets/hero4.jpg";
import { useTranslation } from "@/lib/language-context";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50 min-h-screen">
      <InnerHero
        title={t("about.atGlance.heroTitle")}
        subtitle={t("about.atGlance.heroSubtitle")}
        image={heroImg}
        breadcrumbs={[
          { label: t("about.atGlance.breadcrumbAbout"), href: "/about" },
          { label: t("about.atGlance.breadcrumbGlance") },
        ]}
      />

      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-[120px] lg:w-80 shrink-0">
            <nav className="flex flex-col border-l-2 border-slate-200">
              <a
                href="#who-we-are"
                className="group flex flex-col py-4 px-6 border-l-4 border-transparent -ml-[3px] hover:bg-white hover:border-[#3B71B5] transition-all"
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#3B71B5]">
                  {t("about.atGlance.navIntro")}
                </span>
                <span className="text-[0.95rem] font-bold text-slate-600 group-hover:text-[#1D2E54]">
                  {t("about.atGlance.navWho")}
                </span>
              </a>
              <a
                href="#vision-mission"
                className="group flex flex-col py-4 px-6 border-l-4 border-transparent -ml-[3px] hover:bg-white hover:border-[#3B71B5] transition-all"
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#3B71B5]">
                  {t("about.atGlance.navValues")}
                </span>
                <span className="text-[0.95rem] font-bold text-slate-600 group-hover:text-[#1D2E54]">
                  {t("about.atGlance.navVisionMission")}
                </span>
              </a>
              <a
                href="#customer-focus"
                className="group flex flex-col py-4 px-6 border-l-4 border-transparent -ml-[3px] hover:bg-white hover:border-[#3B71B5] transition-all"
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#3B71B5]">
                  {t("about.atGlance.navStrategy")}
                </span>
                <span className="text-[0.95rem] font-bold text-slate-600 group-hover:text-[#1D2E54]">
                  {t("about.atGlance.navCustomer")}
                </span>
              </a>
              <a
                href="#objectives"
                className="group flex flex-col py-4 px-6 border-l-4 border-transparent -ml-[3px] hover:bg-white hover:border-[#3B71B5] transition-all"
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#3B71B5]">
                  {t("about.atGlance.navPerformance")}
                </span>
                <span className="text-[0.95rem] font-bold text-slate-600 group-hover:text-[#1D2E54]">
                  {t("about.atGlance.navObjectives")}
                </span>
              </a>
              <a
                href="#fleet"
                className="group flex flex-col py-4 px-6 border-l-4 border-transparent -ml-[3px] hover:bg-white hover:border-[#3B71B5] transition-all"
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#3B71B5]">
                  {t("about.atGlance.navAssets")}
                </span>
                <span className="text-[0.95rem] font-bold text-slate-600 group-hover:text-[#1D2E54]">
                  {t("about.atGlance.navFleet")}
                </span>
              </a>
            </nav>

            <div className="mt-12 p-8 bg-[#1D2E54] rounded-2xl text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
              <h4 className="text-xl font-bold mb-3 relative z-10">{t("about.atGlance.needAssistance")}</h4>
              <p className="text-sm text-slate-300 mb-6 relative z-10">{t("about.atGlance.globalNetworkDesc")}</p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1D2E54] px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#3B71B5] hover:text-white transition-all relative z-10">
                {t("about.atGlance.contactUs")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-24">
            {/* Who We Are */}
            <section id="who-we-are" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-[#3B71B5]"></div>
                <h2 className="text-4xl font-extrabold text-[#1D2E54] tracking-tight">{t("about.atGlance.whoWeAreTitle")}</h2>
              </div>
              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                <p className="text-xl font-medium text-slate-700">
                  {t("about.atGlance.whoWeAreP1")}
                </p>
                <p>
                  {t("about.atGlance.whoWeAreP2")}
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  t("about.atGlance.val1"),
                  t("about.atGlance.val2"),
                  t("about.atGlance.val3"),
                  t("about.atGlance.val4"),
                  t("about.atGlance.val5"),
                  t("about.atGlance.val6"),
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-2 border-b border-slate-100">
                    <div className="h-2 w-2 rounded-full bg-[#3B71B5] shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Vision & Mission */}
            <section id="vision-mission" className="scroll-mt-32 relative">
              <div className="absolute inset-0 bg-[#F8FAFC] -mx-8 rounded-3xl -z-10 border border-slate-100"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg text-[#3B71B5]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1D2E54]">{t("about.atGlance.ourVision")}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {t("about.atGlance.visionDesc")}
                  </p>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg text-[#3B71B5]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1D2E54]">{t("about.atGlance.ourMission")}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {t("about.atGlance.missionDesc")}
                  </p>
                </div>
              </div>
            </section>

            {/* Customer Focus */}
            <section id="customer-focus" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-12 bg-[#3B71B5]"></div>
                <h2 className="text-4xl font-extrabold text-[#1D2E54] tracking-tight">{t("about.atGlance.custFocusTitle")}</h2>
              </div>
              <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-blue-50 opacity-10">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017C13.4647 8 13.017 8.44772 13.017 9V15C13.017 16.0523 12.1693 17 11.017 17H10.017C8.91243 17 8.017 17.8954 8.017 19V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V15C4.017 16.0523 3.16928 17 2.017 17H1.017C-0.08757 17 -1 17.8954 -1 19V21H5.017Z" /></svg>
                </div>
                <blockquote className="text-2xl font-serif italic text-slate-700 mb-8 relative z-10">
                  {t("about.atGlance.custFocusQuote")}
                </blockquote>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed relative z-10">
                  {t("about.atGlance.custFocusDesc")}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                  {[
                    t("about.atGlance.pillarReliability"),
                    t("about.atGlance.pillarPartnership"),
                    t("about.atGlance.pillarKnowledge"),
                    t("about.atGlance.pillarResponsive"),
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="h-1 w-8 bg-[#3B71B5]"></div>
                      <span className="font-bold text-[#1D2E54] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Key Objectives */}
            <section id="objectives" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1 w-12 bg-[#3B71B5]"></div>
                <h2 className="text-4xl font-extrabold text-[#1D2E54] tracking-tight">{t("about.atGlance.objectivesTitle")}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: t("about.atGlance.obj1Title"), icon: "🛡️", desc: t("about.atGlance.obj1Desc") },
                  { title: t("about.atGlance.obj2Title"), icon: "💧", desc: t("about.atGlance.obj2Desc") },
                  { title: t("about.atGlance.obj3Title"), icon: "🌱", desc: t("about.atGlance.obj3Desc") },
                  { title: t("about.atGlance.obj4Title"), icon: "👷", desc: t("about.atGlance.obj4Desc") },
                  { title: t("about.atGlance.obj5Title"), icon: "🌍", desc: t("about.atGlance.obj5Desc") },
                  { title: t("about.atGlance.obj6Title"), icon: "🔒", desc: t("about.atGlance.obj6Desc") },
                  { title: t("about.atGlance.obj7Title"), icon: "🏢", desc: t("about.atGlance.obj7Desc") },
                ].map((obj, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{obj.icon}</div>
                    <div className="font-bold text-[#1D2E54] text-lg mb-1">{obj.title}</div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{obj.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Fleet */}
            <section id="fleet" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-12 bg-[#3B71B5]"></div>
                <h2 className="text-4xl font-extrabold text-[#1D2E54] tracking-tight">{t("about.atGlance.fleetTitle")}</h2>
              </div>
              <p className="text-lg text-slate-600 mb-12 max-w-3xl leading-relaxed">
                {t("about.atGlance.fleetDesc")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { label: t("about.atGlance.statVesselsLabel"), value: t("about.atGlance.statVesselsVal"), sub: t("about.atGlance.statVesselsSub") },
                  { label: t("about.atGlance.statPortsLabel"), value: t("about.atGlance.statPortsVal"), sub: t("about.atGlance.statPortsSub") },
                  { label: t("about.atGlance.statStaffLabel"), value: t("about.atGlance.statStaffVal"), sub: t("about.atGlance.statStaffSub") },
                ].map((stat, i) => (
                  <div key={i} className="group p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-[#3B71B5] transition-all overflow-hidden relative">
                    <div className="absolute bottom-0 right-0 -mb-6 -mr-6 w-24 h-24 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-all"></div>
                    <div className="relative z-10">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">{stat.label}</div>
                      <div className="text-5xl font-black text-[#1D2E54] mb-3">{stat.value}</div>
                      <div className="text-sm font-medium text-[#3B71B5]">{stat.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
