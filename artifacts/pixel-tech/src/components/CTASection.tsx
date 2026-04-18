import React from "react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMEgzNHY0aC00djJoNHY0aDJWNmgtNHYtNGg0em0wIDE0djRoLTV2Mmg1djRoMnYtNGg1di0yaC01di00aC0yem0wIDIwaC01djJoNXY0aDJ2LTRoNXYtMmgtNXYtNHotMTUgMTBoLTR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJ6bTAtMThIMTd2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJ6bTAtMTBIMTdWMGgtMnY0aC00djJoNHY0aDJWNmg0VjR6bTAtMTBoNHYyaC00djRoLTJ2LTRoLTRWMmg0VjBoMnY0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to Build Your Future in AI?
        </h2>
        <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
          Join the next cohort of Pixel Technologies and start working on real-world machine learning projects today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold px-8 py-6 text-lg border-0 shadow-lg">
            Apply Now
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white font-bold px-8 py-6 text-lg bg-transparent">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
