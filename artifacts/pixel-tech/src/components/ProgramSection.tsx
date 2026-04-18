import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Code2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProgramSection() {
  const topics = [
    "Python Programming & Data Structures",
    "Data Analysis with Pandas & NumPy",
    "Machine Learning Algorithms",
    "Deep Learning & Neural Networks",
    "Computer Vision & NLP Basics",
    "Real-world Capstone Project"
  ];

  return (
    <section id="program" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Internship Program Details</h2>
            <p className="text-muted-foreground text-lg mb-8">
              A comprehensive 3-month program designed to take you from basics to building production-ready AI models.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Card className="border-none shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <Clock className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Duration</h4>
                    <p className="text-muted-foreground">3 Months Intensive</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <Award className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Certificate</h4>
                    <p className="text-muted-foreground">Industry Recognized</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Code2 className="w-6 h-6 text-primary" />
                Tools Covered
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Python", "TensorFlow", "Scikit-Learn", "PyTorch", "Pandas", "Jupyter"].map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-medium border shadow-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-xl border border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10" />
            
            <h3 className="text-2xl font-bold mb-6">What You Will Learn</h3>
            <ul className="space-y-4">
              {topics.map((topic, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-lg text-slate-700 dark:text-slate-300">{topic}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
