"use client";

import { motion } from "framer-motion";

export function DemoSection() {
  return (
    <section
      id="demo"
      className="relative min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
            Ready To Launch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your Bun-powered project running in minutes, not days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 min-w-0"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Quick Setup with Git
              </h3>
              <div className="rounded-md bg-foreground/5 p-4 font-mono text-sm overflow-x-auto">
                <pre>
                  <code>
                    git clone https://github.com/nitishxyz/stackforge.git
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Deploy To AWS with Bun
              </h3>
              <div className="rounded-md bg-foreground/5 p-4 font-mono text-sm overflow-x-auto">
                <pre>
                  <code>bun run deploy</code>
                </pre>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/nitishxyz/stackforge",
                    "_blank"
                  )
                }
                className="rounded-full border border-solid border-transparent bg-foreground text-background px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-foreground/20"
              >
                Start Building →
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl border overflow-hidden aspect-[4/3]"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
              <div className="text-center p-8">
                <div className="text-6xl mb-6">💻</div>
                <div className="text-2xl font-semibold mb-2">
                  Demo Coming Soon
                </div>
                <p className="text-muted-foreground">
                  Watch this space for an interactive demo
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
