import { vpc } from "./vpc";

export const cluster = new sst.aws.Cluster("ForgeBackendCluster", { vpc });
