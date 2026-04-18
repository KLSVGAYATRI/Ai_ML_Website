import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AIMLSection from "@/components/AIMLSection";
import StatsSection from "@/components/StatsSection";
import ProgramSection from "@/components/ProgramSection";
import CompaniesSection from "@/components/CompaniesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ApplyForm from "@/components/ApplyForm";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Navbar onApply={() => setShowForm(true)} />
      <main className="flex-grow">
        <Hero onApply={() => setShowForm(true)} />
        <About />
        <AIMLSection />
        <StatsSection />
        <ProgramSection onApply={() => setShowForm(true)} />
        <CompaniesSection />
        <CTASection onApply={() => setShowForm(true)} />
      </main>
      <Footer />
      {showForm && <ApplyForm onClose={() => setShowForm(false)} />}
    </div>
  );
}
