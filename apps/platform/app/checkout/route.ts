import { Checkout } from "@polar-sh/nextjs";
import { Resource } from "sst";

export const GET = Checkout({
  accessToken: Resource.PolarAccessToken.value,
  successUrl: "https://localhost:3000/checkout/success",
  server: Resource.App.stage === "prod" ? "production" : "sandbox",
});
