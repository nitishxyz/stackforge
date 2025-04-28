import { handle } from "hono/aws-lambda";
import { issuer } from "@openauthjs/openauth";
import { MemoryStorage } from "@openauthjs/openauth/storage/memory";
import { subjects } from "./subjects";
import { GithubProvider } from "@openauthjs/openauth/provider/github";
import { Resource } from "sst";
import { db } from "@/db/index";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

async function getUser(id: string) {
  console.log("GETTING USER");
  // Get user from database and return user ID
  const user = await db.query.users.findFirst({
    where: eq(users.id, id),
  });
  if (!user) {
    throw new Error("User not found");
  }
  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
}

async function createUser(id: string, username: string, email: string) {
  await db.insert(users).values({
    id,
    username,
    email,
  });
}

async function getGithubUser(accessToken: string) {
  const response = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub user");
  }

  const data = await response.json();
  return {
    id: data.id.toString(),
    username: data.login,
    email: data.email,
  };
}

const app = issuer({
  subjects,
  storage: MemoryStorage(),
  allow: async () => true,
  providers: {
    github: GithubProvider({
      clientID: Resource.GithubClientId.value,
      clientSecret: Resource.GithubClientSecret.value,
      scopes: ["user:email"],
    }),
  },
  success: async (ctx, value) => {
    if (value.provider === "github") {
      const githubUser = await getGithubUser(value.tokenset.access);

      try {
        const user = await getUser(githubUser.id);

        console.log("EXISTINGUSER FOUND");
        return ctx.subject("user", {
          id: user.id,
          username: user.username,
          email: user.email,
        });
      } catch (error) {
        await createUser(githubUser.id, githubUser.username, githubUser.email);
        console.log("NEW USER CREATED");
        return ctx.subject("user", {
          id: githubUser.id,
          username: githubUser.username,
          email: githubUser.email,
        });
      }
    }
    throw new Error("Invalid provider");
  },
});

export const handler = handle(app);
