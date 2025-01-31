import type {
	FastifyBaseLogger,
	FastifyInstance,
	FastifyRequest,
	RawReplyDefaultExpression,
	RawRequestDefaultExpression,
	RawServerDefault,
} from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";

export type FastifyTypedInstance = FastifyInstance<
	RawServerDefault,
	RawRequestDefaultExpression,
	RawReplyDefaultExpression,
	FastifyBaseLogger,
	ZodTypeProvider
>;

interface BodyType {
	name: string
	email: string
}

interface ParamsTypeUserId {
	id: string
}

export type FastifyTypedRequest = FastifyRequest<{Body: BodyType}>;
export type FastifyTypedRequestUserId = FastifyRequest<{ Params: ParamsTypeUserId }>;