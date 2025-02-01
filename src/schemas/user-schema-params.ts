import { z } from "zod";

export const UserSchemaParams = z.object({
  id: z.string().uuid(),
});
