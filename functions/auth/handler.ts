import { handle } from "hono/aws-lambda";
import { issuer } from "@openauthjs/openauth";
import { MemoryStorage } from "@openauthjs/openauth/storage/memory";
import { subjects } from "@stackforge/core/auth/subjects";
import { GithubProvider } from "@openauthjs/openauth/provider/github";
import { Resource } from "sst";
import { db } from "@stackforge/core/db";
import { users } from "@stackforge/core/db/schema";
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
  // Fetch basic user info
  const userResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!userResponse.ok) {
    throw new Error("Failed to fetch GitHub user");
  }

  const userData = await userResponse.json();
  let email = userData.email;

  // If email is null, fetch emails separately
  if (!email) {
    const emailsResponse = await fetch("https://api.github.com/user/emails", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (emailsResponse.ok) {
      const emails = await emailsResponse.json();
      // Find primary email or take the first verified one
      const primaryEmail = emails.find((e: any) => e.primary && e.verified);
      const verifiedEmail = emails.find((e: any) => e.verified);

      email =
        primaryEmail?.email || verifiedEmail?.email || "no-email@example.com";
    }
  }

  return {
    id: userData.id.toString(),
    username: userData.login,
    email,
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
