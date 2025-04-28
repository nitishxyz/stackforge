export const vpc =
  $app.stage === "prod" || $app.stage === "dev"
    ? new sst.aws.Vpc("FrogeVpc", { bastion: true, nat: "ec2" })
    : sst.aws.Vpc.get("ForgeVpc", "vpc-079736e8a3ab24993");
