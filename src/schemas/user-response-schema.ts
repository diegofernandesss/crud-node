import { z } from "zod";
import { UserSchema } from "./user-schema";

export const UserResponseSchema = z.array(UserSchema);