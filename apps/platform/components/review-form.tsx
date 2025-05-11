"use client";

import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { Button } from "./ui/button";
import { login } from "@/app/actions";
import { Github } from "lucide-react";

export function ReviewForm() {
  const { user, isLoading, isAuthenticated } = useAuth();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      login();
      return;
    }

    if (rating === 0) {
      setError("Please select a rating");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
          comment,
          userId: user?.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      setSubmitted(true);
      setComment("");
      setRating(0);
    } catch (err) {
      setError("Failed to submit review. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6 rounded-lg">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Leave a Review</h2>
          <p className="text-muted-foreground">
            Share your thoughts about StackForge
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-6 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800"></div>
          <div className="h-[100px] w-full animate-pulse rounded bg-gray-200 dark:bg-gray-800"></div>
        </div>
        <div className="h-10 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-800"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="space-y-6 rounded-lg">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Leave a Review</h2>
          <p className="text-muted-foreground">
            Share your thoughts about StackForge
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          Please sign in to leave a review.
        </p>
        <form action={login}>
          <Button type="submit" className="gap-2">
            <Github className="h-4 w-4" />
            Login with GitHub
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6 rounded-lg">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Leave a Review</h2>
        <p className="text-muted-foreground">
          Share your thoughts about StackForge
        </p>
      </div>
      <form onSubmit={handleSubmitReview} className="space-y-6">
        {submitted && (
          <div className="rounded-md bg-green-100 dark:bg-green-900/50 p-4 text-sm text-green-700 dark:text-green-400">
            Thank you for your review!
          </div>
        )}
        {error && (
          <div className="rounded-md bg-red-100 dark:bg-red-900/50 p-4 text-sm text-red-700 dark:text-red-400">
            {error}
          </div>
        )}
        <div>
          <label className="block text-sm font-medium mb-2">Rating</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="focus:outline-none"
              >
                {star <= rating ? (
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-300 dark:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium mb-2">
            Comment
          </label>
          <textarea
            id="comment"
            placeholder="Write your review here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[100px] w-full rounded border border-input bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
        >
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </div>
  );
}
