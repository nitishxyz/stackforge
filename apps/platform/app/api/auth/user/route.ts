import { NextResponse } from "next/server";
import { auth } from "../../../actions";

export async function GET() {
  const subject = await auth();
  if (!subject) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    id: subject.properties.id,
    username: subject.properties.username,
    email: subject.properties.email,
  });
}
