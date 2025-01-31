import { jsonSchemaTransform } from "fastify-type-provider-zod";

export const swaggerConfig = {
	openapi: {
		info: {
			title: "CRUD API",
			version: "1.0.0",
			description: 'API documentation for User operations'
		},
		host: 'localhost',
		schemes: ['http'],
		consumes: ['application/json'],
		produces: ['application/json']
	},
	transform: jsonSchemaTransform,
};