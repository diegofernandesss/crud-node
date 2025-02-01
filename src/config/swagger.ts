import { FastifyDynamicSwaggerOptions } from "@fastify/swagger";
import { jsonSchemaTransform } from "fastify-type-provider-zod";

export const swaggerConfig: FastifyDynamicSwaggerOptions = {
  openapi: {
    openapi: '3.0.0',
    info: {
      title: "CRUD API",
      version: "1.0.0",
      description: 'API documentation for User operations'
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Development server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          description: 'Bearer Authentication. Use the token in the format `Bearer <token>`',
        }
      }
    },
    security: [
      {
        bearerAuth: [],
      }
    ],
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
  },
  transform: jsonSchemaTransform,
};
