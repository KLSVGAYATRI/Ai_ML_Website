import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "AI/ML", href: "#ai-ml" },
    { name: "Why AI/ML", href: "#stats" },
    { name: "Program", href: "#program" },
    { name: "Companies", href: "#companies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-background/90" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <span className={`font-bold text-xl tracking-tight ${scrolled ? "text-foreground" : "text-foreground md:text-white"}`}>
            Pixel Technologies
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button variant={scrolled ? "default" : "secondary"} className="ml-4 font-semibold">
            Apply Now
          </Button>
        </nav>
      </div>
    </header>
  );
}
