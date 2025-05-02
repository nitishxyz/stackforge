"use client";

import { motion } from "framer-motion";
import {
  Server,
  Shield,
  Smartphone,
  Globe,
  Cloud,
  Cpu,
  Layers,
  PackageOpen,
  Workflow,
  Share2,
  GitBranch,
  Braces,
  CreditCard,
  LayoutGrid,
} from "lucide-react";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpo,
  SiReact,
  SiAmazon,
  SiBun,
  SiDrizzle,
  SiZod,
  SiAwslambda,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandOpenai } from "react-icons/tb";
import {
  FaServer,
  FaDatabase,
  FaKey,
  FaLock,
  FaCode,
  FaAws,
  FaCloudUploadAlt,
  FaCloudversify,
  FaCloudDownloadAlt,
} from "react-icons/fa";

// Hero Section
function HeroSection() {
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

// Features Section
function FeaturesSection() {
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

// Architecture Section
function ArchitectureSection() {
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

// Technical Specifications Section
function TechnicalSection() {
  return (
    <section
      id="technical"
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
            Technical Details
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern monorepo structure with a clean separation of concerns, all
            powered by Bun.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Bun-Powered Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-xl border p-8 bg-background/70 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <SiBun size={32} className="text-foreground" />
              <h3 className="text-3xl font-semibold">
                Bun-Powered Development
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-6">
                  StackForge leverages Bun as the JavaScript runtime for the
                  entire stack, delivering improved performance and a
                  streamlined developer experience.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      text: "Faster package installations with bun install",
                      icon: <FaCode size={16} />,
                    },
                    {
                      text: "Bun as the runtime for all services",
                      icon: <SiBun size={16} />,
                    },
                    {
                      text: "Improved performance over Node.js",
                      icon: <Cpu className="w-4 h-4" />,
                    },
                    {
                      text: "Simplified development with SST",
                      icon: <Layers className="w-4 h-4" />,
                    },
                    {
                      text: "Smaller memory footprint",
                      icon: <Shield className="w-4 h-4" />,
                    },
                    {
                      text: "Faster startup times for API endpoints",
                      icon: <Server className="w-4 h-4" />,
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
              <div className="rounded-lg bg-foreground/5 p-6 font-mono text-sm overflow-auto">
                <div className="flex items-center gap-2 mb-4">
                  <SiBun size={20} />
                  <span className="font-semibold">SST + Bun Workflow</span>
                </div>
                <pre className="text-xs md:text-sm">
                  <code>
                    {`# Start the development environment
$ bunx sst dev

# Local development
- Next.js, API routes, and more running simultaneously
- SST connects all parts of your stack  
- Live reloading across all services

# Deploy to production
$ bunx sst deploy --stage prod

# Database commands
$ bun db migrate           # Run database migrations  
$ bun dev:db migrate       # Run migrations in dev

# Tunnel for local testing
$ bun dev:tunnel           # Create secure tunnel`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Monorepo Structure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-xl border p-8 bg-background/70 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-8 h-8 text-foreground" />
              <h3 className="text-3xl font-semibold">Monorepo Architecture</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-6">
                  StackForge uses a carefully organized monorepo structure that
                  enables code sharing and consistent development practices
                  across all parts of your application.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      text: "Centralized dependency management",
                      icon: <PackageOpen className="w-5 h-5" />,
                    },
                    {
                      text: "Cross-package type safety",
                      icon: <Shield className="w-5 h-5" />,
                    },
                    {
                      text: "Simplified CI/CD workflows",
                      icon: <Workflow className="w-5 h-5" />,
                    },
                    {
                      text: "Atomic commits across related changes",
                      icon: <GitBranch className="w-5 h-5" />,
                    },
                    {
                      text: "Coordinated versioning between components",
                      icon: <LayoutGrid className="w-5 h-5" />,
                    },
                    {
                      text: "Code reuse and shared utilities",
                      icon: <Share2 className="w-5 h-5" />,
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
              <div className="rounded-lg bg-foreground/5 p-6 font-mono text-sm overflow-auto">
                <pre className="text-xs md:text-sm">
                  <code>
                    {`stackforge/
├── apps/                # Application packages
│   ├── platform/        # Next.js web application
│   ├── mobile/          # Expo mobile application 
│   └── api/             # Bun-powered API routes
├── core/                # Shared business logic
│   ├── auth/            # Authentication utilities
│   ├── db/              # Database schema & queries
│   └── utils/           # Shared utilities
├── functions/           # Serverless functions
├── infra/               # SST infrastructure code
└── package.json         # Workspace configuration`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Technical Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-xl border p-8 bg-background/70 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-foreground" />
              <h3 className="text-3xl font-semibold">Technical Stack</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-6 h-6 text-blue-500" />
                  <div className="text-xl font-medium">Frontend</div>
                </div>
                <ul className="space-y-4">
                  {[
                    {
                      text: "Next.js 15 with App Router (Bun-powered)",
                      icon: <SiNextdotjs size={16} />,
                    },
                    {
                      text: "TypeScript for type safety",
                      icon: <SiTypescript size={16} />,
                    },
                    {
                      text: "TailwindCSS for styling",
                      icon: <SiTailwindcss size={16} />,
                    },
                    {
                      text: "Server-side rendering",
                      icon: <FaServer size={16} />,
                    },
                    {
                      text: "Client and server components",
                      icon: <TbBrandFramerMotion size={16} />,
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mt-0.5">
                        {item.icon}
                      </div>
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Server className="w-6 h-6 text-violet-500" />
                  <div className="text-xl font-medium">Backend</div>
                </div>
                <ul className="space-y-4">
                  {[
                    {
                      text: "Bun for API runtime and development",
                      icon: <SiBun size={16} />,
                    },
                    {
                      text: "OpenAuth for authentication (Lambda)",
                      icon: <TbBrandOpenai size={16} />,
                    },
                    {
                      text: "Drizzle ORM with migrations and type safety",
                      icon: <SiDrizzle size={16} />,
                    },
                    {
                      text: "API and bot deployed as ECS services",
                      icon: <SiAmazon size={16} />,
                    },
                    {
                      text: "Zod/Valibot for validations",
                      icon: <SiZod size={16} />,
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-violet-500/10 text-violet-500 flex items-center justify-center mt-0.5">
                        {item.icon}
                      </div>
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="w-6 h-6 text-emerald-500" />
                  <div className="text-xl font-medium">Mobile</div>
                </div>
                <ul className="space-y-4">
                  {[
                    { text: "Expo framework", icon: <SiExpo size={16} /> },
                    { text: "React Native", icon: <SiReact size={16} /> },
                    {
                      text: "SST secrets integration",
                      icon: <FaKey size={16} />,
                    },
                    {
                      text: "TypeScript for type safety",
                      icon: <SiTypescript size={16} />,
                    },
                    {
                      text: "Shared authentication flow",
                      icon: <FaLock size={16} />,
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mt-0.5">
                        {item.icon}
                      </div>
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-xl border p-8 bg-background/70 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Cloud className="w-8 h-8 text-foreground" />
              <h3 className="text-3xl font-semibold">
                Advanced Infrastructure
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  StackForge leverages SST to deploy and manage complex
                  infrastructure with minimal effort.
                </p>
                <div className="rounded-md bg-foreground/5 p-4 font-mono text-xs overflow-x-auto">
                  <pre>
                    <code>
                      {`// Infrastructure as TypeScript code
export default $config({
  app(input) {
    return {
      name: "stackforge",
      removal: input?.stage === "prod" ? "retain" : "remove",
      protect: ["prod"].includes(input?.stage),
      home: "aws",
      providers: { /*...*/ }
    };
  },
  async run() {
    // Define infrastructure components
    const { vpc } = await import("./infra/vpc");
    const { cluster } = await import("./infra/cluster");
    const { database } = await import("./infra/database");
    // ...more components
  }
});`}
                    </code>
                  </pre>
                </div>
              </div>
              <div>
                <ul className="space-y-4">
                  {[
                    {
                      text: "Infrastructure as code using TypeScript",
                      icon: <FaCode size={16} />,
                    },
                    {
                      text: "Multi-environment support (dev, staging, prod)",
                      icon: <Braces className="w-5 h-5" />,
                    },
                    {
                      text: "Automatic secret management",
                      icon: <FaKey size={16} />,
                    },
                    {
                      text: "Database migration tooling",
                      icon: <FaDatabase size={16} />,
                    },
                    {
                      text: "Lambda functions for auth and webhooks",
                      icon: <Globe className="w-5 h-5" />,
                    },
                    {
                      text: "ECS services for API and Telegram bot",
                      icon: <Server className="w-5 h-5" />,
                    },
                    {
                      text: "Payment processing via Polar",
                      icon: <CreditCard className="w-5 h-5" />,
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Demo Section
function DemoSection() {
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
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Quick Setup with Bun
              </h3>
              <div className="rounded-md bg-foreground/5 p-4 font-mono text-sm overflow-x-auto">
                <pre>
                  <code>
                    npx create-sst@latest --template nitishxyz/stackforge
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

// Footer
function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">StackForge</h2>
            <p className="text-muted-foreground max-w-md">
              A complete SST template for building and deploying full-stack
              applications to AWS.
            </p>
          </div>
          <div className="flex justify-start md:justify-end items-center gap-6">
            <a
              href="https://github.com/nitishxyz/stackforge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://sst.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              SST
            </a>
            <a
              href="https://aws.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              AWS
            </a>
          </div>
        </div>
        <div className="border-t border-foreground/5 mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} StackForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="relative bg-background">
      <div className="relative z-10">
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="architecture">
          <ArchitectureSection />
        </div>
        <div id="technical">
          <TechnicalSection />
        </div>
        <div id="demo">
          <DemoSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}
