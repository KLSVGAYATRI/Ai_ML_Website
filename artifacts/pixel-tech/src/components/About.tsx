import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const cards = [
    {
      title: "Mission",
      icon: <Target className="w-10 h-10 text-primary" />,
      text: "To bridge the gap between academic learning and industry requirements by providing hands-on AI/ML experience.",
    },
    {
      title: "Vision",
      icon: <Lightbulb className="w-10 h-10 text-primary" />,
      text: "Creating a future where every ambitious graduate has the tools and real-world skills to lead in the AI revolution.",
    },
    {
      title: "Why Choose Us",
      icon: <Trophy className="w-10 h-10 text-primary" />,
      text: "Industry-expert mentors, live project portfolios, and dedicated placement assistance to launch your career.",
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Pixel Technologies</h2>
          <p className="text-muted-foreground text-lg">
            We are dedicated to transforming raw potential into proven expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg bg-card/50 hover:bg-card transition-colors duration-300">
                <CardHeader className="pb-4">
                  <div className="mb-4 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {card.icon}
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.text}
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
