import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AIMLSection from "@/components/AIMLSection";
import StatsSection from "@/components/StatsSection";
import ProgramSection from "@/components/ProgramSection";
import CompaniesSection from "@/components/CompaniesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <AIMLSection />
        <StatsSection />
        <ProgramSection />
        <CompaniesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
