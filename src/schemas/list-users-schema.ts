import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  created_at: z.string(),
});

export const UserResponseSchema = z.array(UserSchema);

export const UserSchemaParams = z.object({
  id: z.string().uuid(),
});