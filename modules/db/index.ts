import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { Resource } from "sst";
import * as schema from "./schema/index";

const pool = new Pool({
  host: Resource.ForgeDatabase.host,
  port: Resource.ForgeDatabase.port,
  user: Resource.ForgeDatabase.username,
  password: Resource.ForgeDatabase.password,
  database: Resource.ForgeDatabase.database,
});

export const db = drizzle(pool, { schema });
