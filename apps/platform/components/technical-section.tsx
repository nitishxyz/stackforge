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
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandOpenai } from "react-icons/tb";
import { FaServer, FaDatabase, FaKey, FaLock, FaCode } from "react-icons/fa";

export function TechnicalSection() {
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
                        <div className="scale-75">{item.icon}</div>
                      </div>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-foreground/5 p-6 font-mono text-sm overflow-auto min-w-0">
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
                        <div className="scale-75">{item.icon}</div>
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
                        <div className="scale-75">{item.icon}</div>
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
                        <div className="scale-75">{item.icon}</div>
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
                        <div className="scale-75">{item.icon}</div>
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
              <div className="space-y-4 min-w-0">
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
                        <div className="scale-75">{item.icon}</div>
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
