import { CustomerPortal } from "@polar-sh/nextjs";
import { Resource } from "sst";
import { auth } from "../actions";

export const GET = CustomerPortal({
  accessToken: Resource.PolarAccessToken.value,
  getCustomerId: async () => {
    const user = await auth();
    if (!user) {
      return "";
    }
    return user.properties.email;
  }, // Fuction to resolve a Polar Customer ID
  server: Resource.App.stage === "prod" ? "production" : "sandbox",
});
