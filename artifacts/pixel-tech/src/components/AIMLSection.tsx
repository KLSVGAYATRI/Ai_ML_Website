import React from "react";
import { motion } from "framer-motion";
import { Cpu, Network, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AIMLSection() {
  const features = [
    {
      title: "Artificial Intelligence",
      icon: <Cpu className="w-8 h-8 text-blue-700" />,
      desc: "Master the fundamentals of intelligent systems and problem-solving algorithms.",
      gradient: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
    },
    {
      title: "Machine Learning",
      icon: <Network className="w-8 h-8 text-blue-700" />,
      desc: "Build predictive models and train systems using industry-standard datasets.",
      gradient: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20"
    },
    {
      title: "Deep Learning",
      icon: <Database className="w-8 h-8 text-blue-700" />,
      desc: "Implement neural networks for computer vision and natural language processing.",
      gradient: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20"
    }
  ];

  return (
    <section id="ai-ml" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Master The Core Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Our curriculum focuses on the three pillars of modern intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full border-none shadow-md bg-gradient-to-br ${feature.gradient}`}>
                <CardHeader>
                  <div className="bg-white/60 dark:bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-100">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
