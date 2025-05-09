import { Resource } from "sst";
import { defineConfig } from "drizzle-kit";
import { DEPLOYED_STAGES } from "./packages/core/utils/stage";

export default defineConfig({
  dialect: "postgresql",
  schema: ["./core/db/schema"],
  dbCredentials: {
    host: Resource.ForgeDatabase.host,
    port: Resource.ForgeDatabase.port,
    user: Resource.ForgeDatabase.username,
    password: Resource.ForgeDatabase.password,
    database: Resource.ForgeDatabase.database,
    ssl: DEPLOYED_STAGES.includes(Resource.App.stage) ? "require" : false,
  },
});
