import { database } from "./database";

export const drizzle = new sst.x.DevCommand("Studio", {
  link: [database],
  dev: {
    command: "npx drizzle-kit studio",
  },
});
