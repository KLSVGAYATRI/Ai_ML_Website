import React from "react";

const companies = [
  { name: "Mouri Tech", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { name: "Amzure Technologies", color: "bg-cyan-50 border-cyan-200 text-cyan-800" },
  { name: "Absolin", color: "bg-indigo-50 border-indigo-200 text-indigo-800" },
  { name: "Symbiosis", color: "bg-purple-50 border-purple-200 text-purple-800" },
  { name: "Excel Global Solutions", color: "bg-green-50 border-green-200 text-green-800" },
  { name: "Spruko Technologies", color: "bg-orange-50 border-orange-200 text-orange-800" },
];

export default function CompaniesSection() {
  return (
    <section id="companies" className="py-20 bg-white overflow-hidden border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Placement</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Where Our Alumni Work</h2>
        <p className="text-slate-500 mt-3 text-base max-w-xl mx-auto">
          Our interns go on to build careers at leading tech companies across India and beyond.
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap py-4">
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className={`mx-2 flex h-16 min-w-max items-center justify-center rounded-xl border px-8 shadow-sm ${company.color}`}
            >
              <span className="text-base font-bold tracking-tight">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid cards */}
      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {companies.map((company, i) => (
          <div
            key={i}
            className={`rounded-xl border px-4 py-5 text-center shadow-sm ${company.color} hover:shadow-md transition-shadow`}
          >
            <div className="text-2xl font-extrabold mb-1">{company.name.charAt(0)}</div>
            <div className="text-xs font-semibold leading-snug">{company.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
