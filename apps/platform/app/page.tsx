"use client";

import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { TechnicalSection } from "@/components/TechnicalSection";
import { DemoSection } from "@/components/DemoSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";

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
        <div className="container mx-auto">
          <ReviewsSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}
