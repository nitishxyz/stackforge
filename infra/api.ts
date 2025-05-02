import { auth } from "./auth";
import { database } from "./database";
import { domains } from "./domains";
import { cluster } from "./cluster";

export const apiService = new sst.aws.Service("ForgeBackendService", {
  cluster,
  link: [database, auth],
  image: {
    dockerfile: "./apps/api/Dockerfile",
  },
  loadBalancer: {
    ports: [
      { listen: "443/https", forward: "3030/http" },
      { listen: "80/http", redirect: "443/https" },
    ],
    domain: domains.apiService,
  },
  dev: {
    directory: "apps/api",
    command: "bun run --watch index.ts",
  },
});

export const apiRouter = new sst.aws.Router("ForgeApiRouter", {
  routes: {
    "/*": {
      url: `https://${domains.apiService}`,
    },
  },
  domain: domains.api,
});
