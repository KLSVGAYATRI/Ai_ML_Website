import React from "react";
import { motion } from "framer-motion";

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-slate-950 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-950 z-0"></div>

      {/* Ambient glow */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-blue-300 text-sm font-medium">Now Accepting Applications</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Start Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Career in AI & ML
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-md leading-relaxed">
            Industry-ready internship with real projects. Transform from a graduate to an in-demand AI professional.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={() => scrollTo("#program")}
              className="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Apply Now
            </button>
            <button
              onClick={() => scrollTo("#ai-ml")}
              className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Program
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-xs text-slate-400 mt-0.5">Students Trained</div>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3 Months</div>
              <div className="text-xs text-slate-400 mt-0.5">Program Duration</div>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-xs text-slate-400 mt-0.5">Hiring Partners</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative w-full max-w-sm aspect-square">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: "25s" }}>
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 rounded-full bg-blue-400/80 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                  style={{
                    top: `${50 - 47 * Math.cos((deg * Math.PI) / 180)}%`,
                    left: `${50 + 47 * Math.sin((deg * Math.PI) / 180)}%`,
                    transform: "translate(-50%,-50%)",
                  }}
                />
              ))}
            </div>

            {/* Mid ring */}
            <div className="absolute inset-[15%] rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
              {[0, 90, 180, 270].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                  style={{
                    top: `${50 - 44 * Math.cos((deg * Math.PI) / 180)}%`,
                    left: `${50 + 44 * Math.sin((deg * Math.PI) / 180)}%`,
                    transform: "translate(-50%,-50%)",
                  }}
                />
              ))}
            </div>

            {/* Center core */}
            <div className="absolute inset-[38%] rounded-full bg-blue-600/30 border border-blue-400/60 shadow-[0_0_40px_rgba(37,99,235,0.6)] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-blue-500/60 border border-blue-300/60 shadow-[0_0_20px_rgba(59,130,246,1)]"></div>
            </div>

            {/* Connecting lines (decorative) */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
              <line x1="50" y1="50" x2="50" y2="3" stroke="#60a5fa" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="91" y2="75" stroke="#60a5fa" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="9" y2="75" stroke="#60a5fa" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="50" y2="97" stroke="#60a5fa" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="91" y2="25" stroke="#60a5fa" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="9" y2="25" stroke="#60a5fa" strokeWidth="0.5" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => scrollTo("#about")}
      >
        <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent animate-bounce"></div>
      </motion.div>
    </section>
  );
}
