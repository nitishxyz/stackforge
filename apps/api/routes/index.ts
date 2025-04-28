import { auth } from "../utils/auth";

// Define the type for the user properties
interface UserProperties {
  id: string;
  username: string;
  email: string;
  primaryKey?: string;
  secondaryKey?: string;
}

export async function handleApiRequest(req: Request) {
  const url = new URL(req.url);

  if (req.method === "POST") {
    const user = await auth.verifyUser(req);

    if (user.err) {
      return new Response(JSON.stringify({ error: user.err.message }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
    const userId = (user.subject.properties as UserProperties)?.id;

    if (url.pathname === "/api/health") {
      return new Response(JSON.stringify({ status: "ok" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  // Health check route
  if (url.pathname === "/health" && req.method === "GET") {
    return new Response(JSON.stringify({ status: "ok" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Handle 404 for unknown routes
  return new Response(JSON.stringify({ error: "Not found" }), {
    status: 404,
    headers: { "Content-Type": "application/json" },
  });
}
