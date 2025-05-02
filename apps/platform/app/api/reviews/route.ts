import { NextResponse } from "next/server";
import { auth } from "@/app/actions";
import { db } from "@stackforge/core/db";
import { reviews } from "@stackforge/core/db/schema";

export async function POST(req: Request) {
  try {
    // Verify user is authenticated
    const subject = await auth();
    if (!subject) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse request body
    const { rating, comment } = await req.json();

    // Validate input
    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    // Save review to database
    const newReview = await db
      .insert(reviews)
      .values({
        userId: subject.properties.id,
        rating,
        comment: comment || "",
        createdAt: new Date(),
      })
      .returning();

    return NextResponse.json(
      { message: "Review submitted successfully", review: newReview[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting review:", error);
    return NextResponse.json(
      { error: "Failed to submit review" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get all reviews
    const allReviews = await db.query.reviews.findMany({
      orderBy: (reviews, { desc }) => [desc(reviews.createdAt)],
      limit: 10,
    });

    return NextResponse.json(allReviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
