import { serve } from "bun";
import { handleApiRequest } from "./routes";

// Create a Bun server
const server = serve({
  port: 3030,
  fetch: handleApiRequest,
  idleTimeout: 30, // 30 seconds timeout
});

console.log(`Server running at http://localhost:${server.port}`);
