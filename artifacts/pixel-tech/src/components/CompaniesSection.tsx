import React from "react";

export default function CompaniesSection() {
  const companies = [
    "Google", "Microsoft", "Amazon", "IBM", "Infosys", "TCS", "Wipro", "Accenture", "Meta", "Apple"
  ];

  return (
    <section id="companies" className="py-20 bg-background overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Where Our Alumni Work</h2>
        <p className="text-muted-foreground mt-2">Top companies hiring AI/ML talent</p>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        {/* Left/Right Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
        
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap py-4">
          {/* Double the list for seamless looping */}
          {[...companies, ...companies].map((company, index) => (
            <div 
              key={index} 
              className="mx-4 flex h-16 min-w-[160px] items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm px-8"
            >
              <span className="text-xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
