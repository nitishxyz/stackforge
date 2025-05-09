import { domains } from "./domains";
import { database } from "./database";
import { githubClientId, githubClientSecret } from "./secrets";
import { vpc } from "./vpc";

export const auth = new sst.aws.Auth("ForgeAuth", {
  domain: domains.auth,
  authorizer: {
    handler: "packages/functions/auth/handler.handler",
    link: [githubClientId, githubClientSecret, database],
    timeout: "3 minutes",
    vpc: vpc,
  },
});
