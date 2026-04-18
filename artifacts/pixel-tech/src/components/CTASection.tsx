import React from "react";

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900 z-0"></div>
      <div className="absolute inset-0 opacity-10 z-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "40px 40px"
      }}></div>

      <div className="max-w-6xl relative z-10 mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to Build Your Future in AI?
        </h2>
        <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
          Join the next cohort of Pixel Technologies and start working on real-world machine learning projects today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("#program")}
            className="px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-base hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Apply Now
          </button>
          <a
            href="mailto:contact@pixeltechnologies.com"
            className="px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
