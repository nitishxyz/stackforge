import { Resource } from "sst";
import { createClient } from "@openauthjs/openauth/client";
import { subjects } from "@/auth/subjects";
import type { SubjectSchema } from "@openauthjs/openauth/subject";
import type { VerifyResult, VerifyError } from "@openauthjs/openauth/client";
import { InvalidAccessTokenError } from "@openauthjs/openauth/error";

export const client = createClient({
  clientID: "forge-suite-backend",
  issuer: Resource.ForgeAuth.url,
});

const verifyUser = async (
  req: Request
): Promise<VerifyResult<SubjectSchema> | VerifyError> => {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  if (!token) {
    return {
      err: new InvalidAccessTokenError(),
    };
  }
  const user = await client.verify(subjects, token);
  return user;
};

export const auth = {
  verifyUser,
};
