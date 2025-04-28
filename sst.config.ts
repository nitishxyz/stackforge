/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "stackforge",
      removal: input?.stage === "prod" ? "retain" : "remove",
      protect: ["prod"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          profile: "slashforge",
          region: "us-east-1",
        },
      },
    };
  },
  async run() {
    await import("./infra/secrets");
    const { vpc } = await import("./infra/vpc");
    const { database } = await import("./infra/database");
    await import("./infra/orm");
    await import("./infra/auth");

    return {
      vpcId: vpc.id,
      databaseId: database.id,
      databaseProxyId: database.proxyId,
      databaseName: database.database,
      databaseUsername: database.username,
      databaseHost: database.host,
      databasePassword: database.password,
      databasePort: database.port,
    };
  },
});
