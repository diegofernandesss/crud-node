import { registerUser } from "../controllers/register-user";
import { getUser } from "../controllers/get-user";
import { UserResponseSchema, UserSchema, UserSchemaParams } from "@/schemas/list-users-schema";
import { RegisterUserBodySchema, UserSchemaResponse } from "@/schemas/register-body-users-schema";
import { FastifyTypedInstance } from "@/types/fastify-instance";
import { getUserId } from "../controllers/get-id-user";
import { deleteUserId } from "../controllers/delete-user";

export async function appRoutesUsers(app: FastifyTypedInstance) {
    app.post('',
		{
			schema: {
				tags: ["users"],
				description: "Create User",
				body: RegisterUserBodySchema,
				response: {
					201: UserSchemaResponse,
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
				params: UserSchemaParams,
				response: {
					200: UserSchema,
				}
			},
		}, getUserId),

	app.delete('/:id',
		{
			schema: {
				tags: ["users"],
				description: "Delete User by ID",
				params: UserSchemaParams,
				response: {
					200: UserSchemaResponse,
				}
			},
		}, deleteUserId)
}