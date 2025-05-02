"use client";

import { motion } from "framer-motion";
import {
  SiBun,
  SiNextdotjs,
  SiDrizzle,
  SiTypescript,
  SiAwslambda,
} from "react-icons/si";
import {
  FaAws,
  FaServer,
  FaDatabase,
  FaCloudversify,
  FaCloudUploadAlt,
  FaCloudDownloadAlt,
} from "react-icons/fa";

export function ArchitectureSection() {
  return (
    <section
      id="architecture"
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
            Smart Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deploy to AWS with confidence using SST&apos;s infrastructure as
            code and Bun&apos;s JavaScript runtime.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-xl border p-8 bg-background/70 backdrop-blur-sm shadow-xl relative overflow-hidden"
          >
            {/* Background tech icons */}
            <div className="absolute inset-0 flex items-center justify-center z-0 opacity-5">
              <div className="absolute top-10 left-10">
                <SiBun size={100} />
              </div>
              <div className="absolute bottom-10 left-20">
                <SiNextdotjs size={80} />
              </div>
              <div className="absolute top-20 right-20">
                <SiDrizzle size={90} />
              </div>
              <div className="absolute bottom-20 right-10">
                <SiTypescript size={70} />
              </div>
              <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2">
                <SiAwslambda size={60} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-3xl font-semibold mb-6">
                  AWS-Powered Infrastructure
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      text: "Deploy your entire stack with a single command",
                      icon: <FaAws size={20} />,
                    },
                    {
                      text: "ECS services for API and bot applications",
                      icon: <FaServer size={20} />,
                    },
                    {
                      text: "RDS PostgreSQL for reliable data storage",
                      icon: <FaDatabase size={20} />,
                    },
                    {
                      text: "CloudFront CDN for lightning-fast content delivery",
                      icon: <FaCloudversify size={20} />,
                    },
                    {
                      text: "Lambda functions for auth and webhooks",
                      icon: <SiAwslambda size={20} />,
                    },
                    {
                      text: "S3 storage for all your static assets",
                      icon: <FaCloudUploadAlt size={20} />,
                    },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-foreground text-background flex items-center justify-center mt-0.5">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg bg-foreground/5 overflow-hidden p-4">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-foreground/5 bg-[size:30px_30px]" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* AWS Cloud Icon */}
                    <div className="absolute">
                      <motion.div
                        animate={{
                          opacity: [0.7, 1, 0.7],
                          scale: [0.95, 1, 0.95],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex flex-col items-center"
                      >
                        <FaAws size={80} className="text-foreground mb-4" />
                        <div className="text-2xl font-semibold">SST + AWS</div>
                        <p className="text-muted-foreground">
                          Infrastructure as code
                        </p>
                      </motion.div>
                    </div>

                    {/* Orbiting services */}
                    {[
                      { icon: <FaServer size={30} />, angle: 0, distance: 140 },
                      {
                        icon: <FaDatabase size={30} />,
                        angle: 60,
                        distance: 140,
                      },
                      {
                        icon: <SiAwslambda size={30} />,
                        angle: 120,
                        distance: 140,
                      },
                      {
                        icon: <FaCloudUploadAlt size={30} />,
                        angle: 180,
                        distance: 140,
                      },
                      {
                        icon: <FaCloudversify size={30} />,
                        angle: 240,
                        distance: 140,
                      },
                      {
                        icon: <FaCloudDownloadAlt size={30} />,
                        angle: 300,
                        distance: 140,
                      },
                    ].map((service, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          x:
                            Math.cos((service.angle * Math.PI) / 180) *
                            service.distance,
                          y:
                            Math.sin((service.angle * Math.PI) / 180) *
                            service.distance,
                        }}
                        transition={{
                          delay: i * 0.2 + 0.5,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-background shadow-lg"
                      >
                        {service.icon}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
