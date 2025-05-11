"use client";

import { motion } from "framer-motion";
import { CreditCard, Star, Zap, Shield, Code, ArrowRight } from "lucide-react";
import { getProductById } from "@/lib/polar-products";
interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  polar?: {
    url: string;
    buttonText: string;
  };
}

const PricingTier = ({
  title,
  price,
  description,
  features,
  highlighted = false,
  polar,
}: PricingTierProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl border ${
        highlighted
          ? "border-foreground/20 shadow-lg shadow-foreground/5"
          : "border-foreground/10"
      } overflow-hidden h-full flex flex-col`}
    >
      <div
        className={`p-6 ${
          highlighted ? "bg-foreground/5" : "bg-background"
        } border-b border-foreground/10`}
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && price !== "Free" && (
            <span className="text-muted-foreground">
              {title === "Consultation" ? " one-time" : "/mo"}
            </span>
          )}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="p-6 flex-grow">
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Star className="h-5 w-5 text-foreground/70 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 pt-0 mt-auto">
        {polar ? (
          <a
            href={polar.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex justify-center items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium ${
              highlighted
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-foreground/10 hover:bg-foreground/20"
            } transition-colors`}
          >
            {polar.buttonText}
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : (
          <button
            className={`w-full inline-flex justify-center items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium bg-foreground/10 hover:bg-foreground/20 transition-colors`}
            onClick={() => window.open("mailto:nitishxyz@proton.me", "_blank")}
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export function PaymentsSection() {
  const supportTiers = [
    {
      id: "community",
      title: "Community",
      price: "Free",
      description: "Free to use for any personal or commercial project",
      features: [
        "Access to documentation",
        "GitHub issue support",
        "Community Discord",
        "Use in any type of project",
        "No license restrictions",
      ],
      polar: {
        url: "https://github.com/nitishxyz/stackforge",
        buttonText: "Star on GitHub",
      },
    },
    {
      id: "sponsorship",
      title: "Sponsor",
      price: "$10",
      description: "Fund ongoing development and maintenance",
      features: [
        "All Community features",
        "Priority GitHub issue support",
        "Name in sponsors list",
        "Vote on feature prioritization",
        "Email support",
      ],
      highlighted: true,
      polar: {
        url: `checkout?products=${getProductById("sponsorship")?.polar_id}`,
        buttonText: "Become a Sponsor",
      },
    },
    {
      id: "enterprise",
      title: "Enterprise",
      price: "$99",
      description: "For teams wanting priority support and guidance",
      features: [
        "All Sponsor features",
        "Dedicated support channel",
        "Private support hours (2hr/month)",
        "Priority bugfixes",
        "Advanced implementation guidance",
      ],
      polar: {
        url: `checkout?products=${getProductById("enterprise")?.polar_id}`,
        buttonText: "Subscribe",
      },
    },
  ];

  const serviceTiers = [
    {
      id: "consultation",
      title: "Consultation",
      price: "$200",
      description: "Expert guidance for your SST-powered project",
      features: [
        "2-hour consultation session",
        "Architecture review",
        "Best practices guidance",
        "Security recommendations",
        "Follow-up summary report",
      ],
      polar: {
        url: `checkout?products=${getProductById("consultation")?.polar_id}`,
        buttonText: "Book Session",
      },
    },
    {
      id: "custom",
      title: "Custom Development",
      price: "Custom",
      description: "Professional development services for your project",
      features: [
        "Custom feature development",
        "SST & AWS implementation",
        "Tailored to your requirements",
        "Thorough documentation",
        "Deployment and handover",
      ],
    },
  ];

  return (
    <section id="support" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <CreditCard className="h-8 w-8 mr-3 text-foreground" />
            <h2 className="text-4xl font-bold">Support Options</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            StackForge is free to use for any project. Consider supporting to
            help ongoing development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportTiers.map((tier, i) => (
            <PricingTier key={i} {...tier} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-24"
        >
          <div className="flex items-center justify-center mb-4">
            <Code className="h-8 w-8 mr-3 text-foreground" />
            <h2 className="text-4xl font-bold">Professional Services</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            Need help with your project? I offer professional development
            services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceTiers.map((tier, i) => (
            <PricingTier key={i} {...tier} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Why Support StackForge?
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-foreground" />
              </div>
              <h4 className="font-medium mb-2">Faster Development</h4>
              <p className="text-sm text-muted-foreground">
                Your support enables more features and improvements.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-foreground" />
              </div>
              <h4 className="font-medium mb-2">Sustainable Future</h4>
              <p className="text-sm text-muted-foreground">
                Help keep the project maintained and secure long-term.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-foreground" />
              </div>
              <h4 className="font-medium mb-2">Better Quality</h4>
              <p className="text-sm text-muted-foreground">
                Funding allows for more testing and quality assurance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
