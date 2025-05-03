"use client";

import { motion } from "framer-motion";
import { TbBrandOpenai } from "react-icons/tb";
import { SiNextdotjs, SiDrizzle, SiExpo, SiBun, SiZod } from "react-icons/si";

export function FeaturesSection() {
  const features = [
    {
      title: "Authentication",
      description:
        "Integrated OpenAuth for secure user authentication across all services",
      gradient: "from-blue-500/20 via-blue-300/20 to-blue-400/20",
      emoji: "🔐",
      icon: <TbBrandOpenai size={40} className="mb-4" />,
    },
    {
      title: "Next.js Platform",
      description:
        "Modern frontend with SSR, file-based routing, and TypeScript",
      gradient: "from-violet-500/20 via-violet-300/20 to-violet-400/20",
      emoji: "⚡",
      icon: <SiNextdotjs size={40} className="mb-4" />,
    },
    {
      title: "Drizzle ORM",
      description: "Type-safe database access with PostgreSQL on AWS RDS",
      gradient: "from-emerald-500/20 via-emerald-300/20 to-emerald-400/20",
      emoji: "🗄️",
      icon: <SiDrizzle size={40} className="mb-4" />,
    },
    {
      title: "Expo Mobile",
      description:
        "Share SST secrets with your mobile app for seamless integration",
      gradient: "from-amber-500/20 via-amber-300/20 to-amber-400/20",
      emoji: "📱",
      icon: <SiExpo size={40} className="mb-4" />,
    },
    {
      title: "API Routes",
      description: "Bun-powered API endpoints deployed as ECS services",
      gradient: "from-rose-500/20 via-rose-300/20 to-rose-400/20",
      emoji: "🔄",
      icon: <SiBun size={40} className="mb-4" />,
    },
    {
      title: "Coming Soon",
      description: "Telegram bot (ECS), webhooks (Lambda), and Polar payments",
      gradient: "from-cyan-500/20 via-cyan-300/20 to-cyan-400/20",
      emoji: "🚀",
      icon: <SiZod size={40} className="mb-4" />,
    },
  ];

  return (
    <section
      id="features"
      className="relative min-h-screen flex items-center py-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:75px_75px] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[500px] h-[500px] bg-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete stack for modern applications, ready to deploy to AWS.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative group h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl blur-xl`}
                />
                <div className="relative h-full rounded-3xl border bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-foreground/5 transition-all duration-500 overflow-hidden p-8">
                  <div className="flex flex-col items-center">
                    {feature.icon}
                    <h3 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
