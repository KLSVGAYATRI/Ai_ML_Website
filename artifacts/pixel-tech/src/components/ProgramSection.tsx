import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Code2, Award, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const topics = [
  "Natural Language Processing (NLP)",
  "Computer Vision",
  "Large Language Models (LLM)",
  "Retrieval-Augmented Generation (RAG)",
  "Model Context Protocol (MCP)",
  "Fine-Tuning Pretrained Models",
  "Agentic AI & Autonomous Systems",
  "Real-world Capstone Project",
];

const tools = [
  "Python",
  "Google Colab",
  "TensorFlow",
  "PyTorch",
  "Scikit-Learn",
  "Pandas",
  "Jupyter",
  "Hugging Face",
  "LangChain",
  "OpenAI API",
];

export default function ProgramSection() {
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
            A comprehensive 3-month program designed to take you from basics to building production-ready AI models.
          </p>
        </motion.div>

        {/* Info cards row */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-none shadow-sm h-full">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Duration</h4>
                  <p className="text-slate-500 text-sm mt-0.5">3 Months Intensive</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-none shadow-sm h-full">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Certificate</h4>
                  <p className="text-slate-500 text-sm mt-0.5">Industry Recognized</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-none shadow-sm h-full">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Mode</h4>
                  <p className="text-slate-500 text-sm mt-0.5">Online + Mentorship</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{topic}</span>
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
                  transition={{ delay: 0.05 * i }}
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
