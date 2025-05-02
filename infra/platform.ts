import { vpc } from "./vpc";
import { auth } from "./auth";
import { domains } from "./domains";

export const platform = new sst.aws.Nextjs("ForgePlatform", {
  vpc: vpc,
  path: "./apps/platform",
  link: [auth],
  domain: {
    name: domains.platform,
    redirects: [`www.${domains.platform}`],
  },
  buildCommand:
    "npm install --frozen-lockfile && npx --yes @opennextjs/aws@3.5.3 build",
  dev: {
    command: "npm run dev",
  },
});
