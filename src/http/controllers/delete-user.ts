import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { FastifyTypedRequestUserId } from "@/types/fastify-instance";
import { DeleteIdUseCase } from "@/use-cases/delete-use-case-user";
import { UserIdExistsError } from "@/use-cases/erros/user-id-exists-error";
import { FastifyReply } from "fastify";

export async function deleteUserId(request: FastifyTypedRequestUserId, reply: FastifyReply) {
    const { id } = request.params

    try {
        const prismaUsersRepository = new PrismaUsersRepository();
        const deleteUseCases = new DeleteIdUseCase(prismaUsersRepository);
        await deleteUseCases.execute({ id });
    } catch (err) {
        if (err instanceof UserIdExistsError) {
            return reply.status(409).send({ message: err.message });
        }
        return reply.status(500).send();
    }
    return reply.status(200).send({ message: 'Usuário deletado com sucesso'})
}