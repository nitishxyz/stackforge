import { object, string, nullable } from "valibot";
import { createSubjects } from "@openauthjs/openauth/subject";

export const subjects = createSubjects({
  user: object({
    id: string(),
    username: string(),
    email: string(),
  }),
});
