"use client";

import { ReviewForm } from "@/components/review-form";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Share Your Feedback</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Help us improve StackForge by sharing your experience with our
            template.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <ReviewForm />
        </div>
      </div>
    </section>
  );
}
