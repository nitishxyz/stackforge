"use client";

import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ArchitectureSection } from "@/components/architecture-section";
import { TechnicalSection } from "@/components/technical-section";
import { DemoSection } from "@/components/demo-section";
import { PaymentsSection } from "@/components/payment-section";
import { ReviewsSection } from "@/components/reviews-section";
import { Footer } from "@/components/footer";

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
        <div id="support">
          <PaymentsSection />
        </div>
        <div className="container mx-auto">
          <ReviewsSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}
