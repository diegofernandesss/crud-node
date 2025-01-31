import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { FastifyTypedRequestUserId } from "@/types/fastify-instance";
import { FastifyReply } from "fastify";
import { GetIdUseCase } from "@/use-cases/get-id-use-case-url";
import { UserIdExistsError } from "@/use-cases/erros/user-id-exists-error";

export async function getIdUser(request: FastifyTypedRequestUserId, reply: FastifyReply) {
    const { id } = request.params;

    try {
        const prismaUsersRepository = new PrismaUsersRepository();
        const getUseCaseId = new GetIdUseCase(prismaUsersRepository);

        const user = await getUseCaseId.execute({ id });

        return reply.status(200).send({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                created_at: user.created_at.toISOString(),
            },
        });
    } catch (err) {
        if (err instanceof UserIdExistsError) {
            return reply.status(409).send({ message: err.message });
        }

        return reply.status(500).send();
    }
}
