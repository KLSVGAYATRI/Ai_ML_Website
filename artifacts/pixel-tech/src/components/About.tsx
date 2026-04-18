import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Trophy, Users, BookOpen, Briefcase } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Our Mission",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
      border: "border-blue-100",
      text: "To bridge the gap between academic learning and industry requirements by providing hands-on AI/ML experience that gets students job-ready.",
    },
    {
      title: "Our Vision",
      icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50",
      border: "border-amber-100",
      text: "Creating a future where every ambitious graduate has the tools and real-world skills to lead in the AI revolution across industries.",
    },
    {
      title: "Why Choose Us",
      icon: <Trophy className="w-6 h-6 text-green-600" />,
      bg: "bg-green-50",
      border: "border-green-100",
      text: "Industry-expert mentors, live project portfolios, AICTE-recognized certification, and dedicated placement assistance to launch your career.",
    },
  ];

  const highlights = [
    { icon: <Users className="w-5 h-5 text-blue-600" />, label: "500+ Interns Trained" },
    { icon: <BookOpen className="w-5 h-5 text-blue-600" />, label: "AICTE Certified Program" },
    { icon: <Briefcase className="w-5 h-5 text-blue-600" />, label: "50+ Hiring Partners" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Company intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5 text-slate-900">
                About Pixelwind Technologies
              </h2>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-green-700 text-xs font-semibold">ISO 9001:2015 Certified</span>
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Pixelwind Technologies (PW) was established in 2021 and is an ISO 9001:2015 certified company with a vision to be the recognized leader in providing reliable business solutions worldwide for superior business results in Information Technology and ITES.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Our services include Training, Development and Staffing (Technical & Non-Technical) to empanelled organizations to give the best productivity based on their needs. We have an exclusive team to deliver services from our respective branches. We are specialists in providing world class skill training, Job Fairs, Placement after successful training, and Post Placement Support.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Apart from IT training and skill development programs for corporates, we also have trainers for sales, time management, interpersonal skills, customer service, and organizational communication — ensuring both candidates and companies achieve the expected results.
              </p>
              <div className="flex flex-wrap gap-4">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2">
                    {h.icon}
                    <span className="text-sm font-medium text-slate-700">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white shadow-xl shadow-blue-200">
                <div className="text-5xl font-extrabold mb-1">2021</div>
                <div className="text-blue-100 text-sm mb-6">Founded in India</div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "500+", label: "Interns Trained" },
                    { val: "50+", label: "Hiring Partners" },
                    { val: "95%", label: "Placement Rate" },
                    { val: "8+", label: "Cities Covered" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold">{s.val}</div>
                      <div className="text-blue-100 text-xs mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-xl -z-10"></div>
            </div>
          </div>
        </motion.div>

        {/* Mission / Vision / Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`rounded-2xl border p-6 ${card.bg} ${card.border}`}
            >
              <div className={`w-10 h-10 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center mb-4 shadow-sm`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
