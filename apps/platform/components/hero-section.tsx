"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl sm:text-7xl font-bold mb-8 max-w-4xl leading-[1.2] sm:leading-[1.2] bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          Bun-Powered Full Stack
          <span className="block mt-2">With SST</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-muted-foreground mb-16 max-w-2xl leading-relaxed"
        >
          A complete SST template with authentication, Next.js, PostgreSQL with
          Drizzle ORM, Expo mobile, API routes, and more. All powered by SST and
          Bun, deployed to AWS with ease.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-6 items-center flex-col sm:flex-row"
        >
          <button
            onClick={() =>
              window.open("https://github.com/nitishxyz/stackforge", "_blank")
            }
            className="w-[240px] text-center rounded-full border-2 border-solid border-transparent bg-foreground text-background px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-foreground/20"
          >
            Get Started
          </button>
          <button
            className="w-[240px] rounded-full border-2 border-solid border-foreground/10 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-foreground/5 hover:border-transparent"
            onClick={() => scrollToSection("features")}
          >
            Explore Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}
