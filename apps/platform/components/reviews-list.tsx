"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { StarFilledIcon } from "@radix-ui/react-icons";

type Review = {
  id: number;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export function ReviewsList() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading reviews...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No reviews yet. Be the first to leave a review!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Recent Reviews</h2>
      {reviews.map((review) => (
        <Card key={review.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">
                User {review.userId.slice(0, 6)}...
              </CardTitle>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarFilledIcon
                    key={index}
                    className={`h-5 w-5 ${
                      index < review.rating
                        ? "text-yellow-500"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              {new Date(review.createdAt).toLocaleDateString()}
            </div>
          </CardHeader>
          <CardContent>
            {review.comment ? (
              <p className="text-sm">{review.comment}</p>
            ) : (
              <p className="text-sm text-muted-foreground italic">
                No comment provided
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
