import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Code2, Award, Layers } from "lucide-react";

const topics = [
  "Python Programming & Data Structures",
  "Natural Language Processing (NLP)",
  "Computer Vision",
  "Large Language Models (LLM)",
  "Retrieval-Augmented Generation (RAG)",
  "Model Context Protocol (MCP)",
  "Fine-Tuning Pretrained Models",
  "Agentic AI & Autonomous Agents",
  "Deep Learning & Neural Networks",
  "Machine Learning Algorithms",
  "Data Analysis with Pandas & NumPy",
  "Real-world Capstone Project",
];

const tools = [
  "Python",
  "Google Colab",
  "TensorFlow",
  "PyTorch",
  "Scikit-Learn",
  "Pandas",
  "Jupyter Notebook",
  "Hugging Face",
  "LangChain",
  "OpenAI API",
  "NumPy",
  "Matplotlib",
];

const durations = [
  { label: "2 Months", desc: "Core AI/ML Fundamentals", color: "border-blue-200 bg-blue-50", accent: "text-blue-600" },
  { label: "3 Months", desc: "Full Stack AI Program", color: "border-blue-400 bg-blue-600", accent: "text-white", popular: true },
  { label: "6 Months", desc: "Advanced AI Specialist", color: "border-purple-200 bg-purple-50", accent: "text-purple-700" },
];

interface Props { onApply: () => void; }

export default function ProgramSection({ onApply }: Props) {
  return (
    <section id="program" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Internship Program Details</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Choose your learning track. All programs include AICTE Certification and placement support.
          </p>
        </motion.div>

        {/* Duration options */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {durations.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border-2 p-6 ${d.color} ${d.popular ? "shadow-xl" : "shadow-sm"}`}
            >
              {d.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 shadow-sm">
                  Most Popular
                </span>
              )}
              <div className={`text-2xl font-extrabold mb-1 ${d.popular ? "text-white" : d.accent}`}>{d.label}</div>
              <div className={`text-sm ${d.popular ? "text-blue-100" : "text-slate-500"}`}>{d.desc}</div>
              <button
                onClick={onApply}
                className={`mt-4 w-full py-2 rounded-xl text-sm font-semibold transition-all ${
                  d.popular
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Info row */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            { icon: <Clock className="w-5 h-5 text-blue-600" />, bg: "bg-blue-100", title: "Flexible Timing", desc: "Weekday & weekend batches" },
            { icon: <Award className="w-5 h-5 text-green-600" />, bg: "bg-green-100", title: "AICTE Certification", desc: "Government recognized certificate" },
            { icon: <Layers className="w-5 h-5 text-purple-600" />, bg: "bg-purple-100", title: "Online + Mentorship", desc: "Live sessions with industry experts" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-start gap-4"
            >
              <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                <div className="text-slate-500 text-xs mt-0.5">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Topics + Tools */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Topics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-50 rounded-bl-full" />
            <h3 className="text-xl font-bold text-slate-900 mb-6">What You Will Learn</h3>
            <ul className="space-y-3">
              {topics.map((topic, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{topic}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-purple-50 rounded-bl-full" />
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-600" />
              Tools & Platforms
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Hands-on experience with industry-standard tools used at top AI companies.
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.04 * i }}
                  className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                No paid software required — all tools are free or cloud-based. Just a browser and curiosity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
