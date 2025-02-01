import { z } from "zod";

export const UserSchemaResponse = z.object({
  message: z.string(),
});
