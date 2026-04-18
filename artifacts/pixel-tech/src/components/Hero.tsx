import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-slate-950 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-950 z-0"></div>
      
      {/* Abstract Tech Visual Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Start Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Career in AI & ML</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-lg">
            Industry-ready internship with real projects. Transform from a graduate to an in-demand AI professional.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button size="lg" className="text-md px-8 py-6 font-semibold bg-primary hover:bg-primary/90 text-white border-0">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="text-md px-8 py-6 font-semibold border-white/20 text-white hover:bg-white/10 bg-transparent">
              Explore Program
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* CSS Neural Network Illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative animate-spin-slow" style={{ animationDuration: '20s' }}>
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-16 h-16 bg-blue-500/20 border border-blue-400/50 rounded-xl backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    style={{
                      top: `${50 + 35 * Math.sin(i * Math.PI / 3)}%`,
                      left: `${50 + 35 * Math.cos(i * Math.PI / 3)}%`,
                      transform: 'translate(-50%, -50%) rotate(45deg)'
                    }}
                  />
                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/40 border-2 border-primary/60 rounded-xl backdrop-blur-md shadow-[0_0_30px_rgba(37,99,235,0.8)] rotate-45 flex items-center justify-center">
                   <div className="w-12 h-12 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
