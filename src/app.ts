import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { corsConfig } from "./config/cors";
import { swaggerConfig } from "./config/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { appRoutesUsers } from "./http/routes/router-users";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler); 
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, corsConfig);
app.register(fastifySwagger, swaggerConfig);

app.register(fastifySwaggerUi, { routePrefix: "/docs" });
app.register(appRoutesUsers, { prefix: "/users" })

export { app }