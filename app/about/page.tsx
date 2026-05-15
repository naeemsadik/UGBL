import { InnerHero } from "@/components/inner-hero";
import heroImg from "@/assets/hero4.jpg";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <InnerHero
        title="At a Glance"
        subtitle="A snapshot of River Tyne Ltd's commitment to excellence, safety, and sustainable ship management."
        image={heroImg}
        breadcrumbs={[
          { label: "ABOUT US", href: "/about" },
          { label: "AT A GLANCE" },
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
                  Introduction
                </span>
                <span className="text-[0.95rem] font-bold text-slate-600 group-hover:text-[#1D2E54]">
                  Who We Are
                </span>
              </a>
              <a
                href="#vision-mission"
                className="group flex flex-col py-4 px-6 border-l-4 border-transparent -ml-[3px] hover:bg-white hover:border-[#3B71B5] transition-all"
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#3B71B5]">
                  Core Values
                </span>
                <span className="text-[0.95rem] font-bold text-slate-600 group-hover:text-[#1D2E54]">
                  Vision & Mission
                </span>
              </a>
              <a
                href="#customer-focus"
                className="group flex flex-col py-4 px-6 border-l-4 border-transparent -ml-[3px] hover:bg-white hover:border-[#3B71B5] transition-all"
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#3B71B5]">
                  Strategy
                </span>
                <span className="text-[0.95rem] font-bold text-slate-600 group-hover:text-[#1D2E54]">
                  Customer Focus
                </span>
              </a>
              <a
                href="#objectives"
                className="group flex flex-col py-4 px-6 border-l-4 border-transparent -ml-[3px] hover:bg-white hover:border-[#3B71B5] transition-all"
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#3B71B5]">
                  Performance
                </span>
                <span className="text-[0.95rem] font-bold text-slate-600 group-hover:text-[#1D2E54]">
                  Key Objectives
                </span>
              </a>
              <a
                href="#fleet"
                className="group flex flex-col py-4 px-6 border-l-4 border-transparent -ml-[3px] hover:bg-white hover:border-[#3B71B5] transition-all"
              >
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#3B71B5]">
                  Assets
                </span>
                <span className="text-[0.95rem] font-bold text-slate-600 group-hover:text-[#1D2E54]">
                  Our Fleet
                </span>
              </a>
            </nav>

            <div className="mt-12 p-8 bg-[#1D2E54] rounded-2xl text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
              <h4 className="text-xl font-bold mb-3 relative z-10">
                Need Assistance?
              </h4>
              <p className="text-sm text-slate-300 mb-6 relative z-10">
                Our global network is available 24/7 to support your shipping
                needs.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#1D2E54] px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#3B71B5] hover:text-white transition-all relative z-10"
              >
                Contact Us
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-24">
            {/* Who We Are */}
            <section id="who-we-are" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-[#3B71B5]"></div>
                <h2 className="text-4xl font-extrabold text-[#1D2E54] tracking-tight">
                  Who We Are
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                <p className="text-xl font-medium text-slate-700">
                  River Tyne Ltd is a leading provider of high-quality ship
                  management services, committed to supporting clients in
                  achieving their business objectives through strong, long-term
                  partnerships based on trust, professionalism, and performance.
                </p>
                <p>
                  We aim to establish ourselves as a best-in-class benchmark
                  organization within the global shipping industry—a company
                  whose operational results, ethical standards, safety
                  performance, and service excellence set a reference point for
                  others.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "Strong business ethics and professional integrity",
                  "Customer focus and stakeholder satisfaction",
                  "Excellence in safety and quality management",
                  "Financial stability and sustainable growth",
                  "Operational and technical excellence of vessels",
                  "Continuous development and retention of employees",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-2 border-b border-slate-100"
                  >
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
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1D2E54]">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    To be the trusted partner of choice in the maritime industry,
                    recognized globally for operational excellence, safety
                    leadership, and sustainable ship management solutions that
                    deliver lasting value to our clients and stakeholders.
                  </p>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg text-[#3B71B5]">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1D2E54]">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    At River Tyne Ltd, we are committed to delivering
                    high-quality, customized ship management services in full
                    compliance with applicable legal requirements, customer
                    expectations, and the standards of ISO 9001:2015. We
                    continuously enhance our management systems through
                    effective monitoring, performance analysis, training, and
                    ongoing improvement initiatives.
                  </p>
                </div>
              </div>
            </section>

            {/* Customer Focus */}
            <section id="customer-focus" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-12 bg-[#3B71B5]"></div>
                <h2 className="text-4xl font-extrabold text-[#1D2E54] tracking-tight">
                  A Customer-Focused Business
                </h2>
              </div>
              <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-blue-50 opacity-10">
                  <svg
                    className="w-32 h-32"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017C13.4647 8 13.017 8.44772 13.017 9V15C13.017 16.0523 12.1693 17 11.017 17H10.017C8.91243 17 8.017 17.8954 8.017 19V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V15C4.017 16.0523 3.16928 17 2.017 17H1.017C-0.08757 17 -1 17.8954 -1 19V21H5.017Z" />
                  </svg>
                </div>
                <blockquote className="text-2xl font-serif italic text-slate-700 mb-8 relative z-10">
                  &ldquo;With you for the long haul.&rdquo;
                </blockquote>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed relative z-10">
                  Our business model is customer-focused. We offer a
                  personalised, flexible, responsive and reliable service, and
                  look for ways to make it easier for you to do business with
                  us.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                  {[
                    "Reliability",
                    "Long-term partnership",
                    "Global knowledge",
                    "Responsive action",
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="h-1 w-8 bg-[#3B71B5]"></div>
                      <span className="font-bold text-[#1D2E54] text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Key Objectives */}
            <section id="objectives" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1 w-12 bg-[#3B71B5]"></div>
                <h2 className="text-4xl font-extrabold text-[#1D2E54] tracking-tight">
                  Key Objectives
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Zero Incidents",
                    desc: "Highest priority on safety",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Zero Oil Spills",
                    desc: "Environmental protection",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.414 1.414.586 1.414-.586 1.414L10 16.172V17l1 1"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Reduced Emissions",
                    desc: "Sustainable operations",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3h7"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Zero Health Incidents",
                    desc: "Caring for our people",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "No Marine Pollution",
                    desc: "Responsible practices",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M21 12c0 4.348-3.456 7.864-7.93 7.92S5.14 16.348 5 12a7 7 0 1114 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 12h.01M12 12h.01M16 12h.01"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "No Security Breaches",
                    desc: "Asset protection",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Zero Property Damage",
                    desc: "Technical excellence",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    ),
                  },
                ].map((obj, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-[#3B71B5]/10 rounded-2xl flex items-center justify-center text-[#3B71B5] mb-5">
                      {obj.icon}
                    </div>
                    <div className="font-bold text-[#1D2E54] text-lg mb-1">
                      {obj.title}
                    </div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                      {obj.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Fleet */}
            <section id="fleet" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-12 bg-[#3B71B5]"></div>
                <h2 className="text-4xl font-extrabold text-[#1D2E54] tracking-tight">
                  Our Fleet
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-12 max-w-3xl leading-relaxed">
                We manage and operate a diverse fleet of modern vessels,
                including bulk carriers and specialized tankers, ensuring high
                utilization and performance through our in-house technical
                excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    label: "Vessels Managed",
                    value: "45+",
                    sub: "Bulk & Specialized",
                  },
                  {
                    label: "Operational Ports",
                    value: "04",
                    sub: "Key Hubs in BD",
                  },
                  {
                    label: "Technical Staff",
                    value: "60+",
                    sub: "Offshore & Onshore",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-[#3B71B5] transition-all overflow-hidden relative"
                  >
                    <div className="absolute bottom-0 right-0 -mb-6 -mr-6 w-24 h-24 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-all"></div>
                    <div className="relative z-10">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                        {stat.label}
                      </div>
                      <div className="text-5xl font-black text-[#1D2E54] mb-3">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-[#3B71B5]">
                        {stat.sub}
                      </div>
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
