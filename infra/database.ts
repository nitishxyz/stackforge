import { DEPLOYED_STAGES } from "../core/utils/stage";
import { vpc } from "./vpc";

export const database = new sst.aws.Postgres("ForgeDatabase", {
  vpc,
  proxy: true,
  dev: DEPLOYED_STAGES.includes($app.stage)
    ? undefined
    : {
        host: "localhost",
        port: 5437,
        username: "postgres",
        password: "postgres",
        database: "postgres",
      },
});
