import { FastifyTypedInstance } from "@/types/fastify-instance";

import { getUser } from "../controllers/get-user";
import { getUserId } from "../controllers/get-id-user";
import { registerUser } from "../controllers/register-user";
import { deleteUserId } from "../controllers/delete-user";
import { updateUserId } from "../controllers/update-user";

import { RegisterUserBodySchema } from "@/schemas/register-user-schema";
import { UserSchemaResponse } from "@/schemas/user-schema-response";
import { UserResponseSchema } from "@/schemas/user-response-schema";
import { UserSchemaParams } from "@/schemas/user-schema-params";
import { UserSchema } from "@/schemas/user-schema";

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
		}, deleteUserId),

	app.put('/:id',
		{
			schema: {
				tags: ["users"],
				description: "Update User by ID",
				body: RegisterUserBodySchema,
				params: UserSchemaParams,
				response: {
					200: UserSchemaResponse,
				}
			},
		}, updateUserId)
}