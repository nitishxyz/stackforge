import { vpc } from "./vpc";
import { auth } from "./auth";
import { domains } from "./domains";
import { database } from "./database";
import { polarAccessToken } from "./secrets";

export const platform = new sst.aws.Nextjs("ForgePlatform", {
  vpc: vpc,
  path: "./apps/platform",
  link: [auth, database, polarAccessToken],
  domain: {
    name: domains.platform,
    redirects: [`www.${domains.platform}`],
  },
  environment: {
    NEXT_PUBLIC_STAGE: $app.stage,
  },
  buildCommand:
    "bun install --frozen-lockfile && bunx --yes @opennextjs/aws@3.5.3 build",
  dev: {
    command: "bun run dev",
  },
});
