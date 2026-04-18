import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ end, suffix = "", label }: { end: number, suffix?: string, label: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, isVisible]);

  return (
    <div ref={nodeRef} className="flex flex-col items-center text-center p-6">
      <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg font-medium text-muted-foreground">{label}</div>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section id="stats" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AI/ML?</h2>
          <p className="text-muted-foreground text-lg">
            The data speaks for itself. AI is not just the future—it's the present.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
          <Counter end={80} suffix="%" label="Industries using AI" />
          <Counter end={65} suffix="%" label="Students choosing AI careers" />
          <Counter end={90} suffix="%" label="Future demand for AI skills" />
        </div>
      </div>
    </section>
  );
}
