import { registerUser } from "../controllers/register-user";
import { z } from "zod";
import { getUser } from "../controllers/get-user";
import { UserResponseSchema, UserSchema } from "@/validations/list-users-schema";
import { registerUserBodySchema } from "@/validations/register-body-users-schema";
import { FastifyTypedInstance } from "@/types/fastify-instance";
import { getIdUser } from "../controllers/get-id-user";

export async function appRoutesUsers(app: FastifyTypedInstance) {
    app.post('',
		{
			schema: {
				tags: ["users"],
				description: "Create User",
				body: registerUserBodySchema,
				response: {
					201: z.object({
					  message: z.string()
					})
				  },
			},
		}, registerUser),

	app.get('',
		{
			schema: {
				tags: ["users"],
				description: "List Users",
				response: {
					200: UserResponseSchema,
				}
			},
		}, getUser),

	app.get('/:id',
		{
			schema: {
				tags: ["users"],
				description: "Get User by ID",
				params: z.object({
					id: z.string().uuid(),
				}),
				response: {
					200: z.object({
						user: UserSchema
					})
				}
			},
		}, getIdUser)
}