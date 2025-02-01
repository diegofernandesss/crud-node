import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { FastifyTypedRequest } from "@/types/fastify-instance";
import { UserAlreadyExistsError } from "@/use-cases/erros/user-already-exists-error";
import { UserIdExistsError } from "@/use-cases/erros/user-id-exists-error";
import { UpdateIdUseCase } from "@/use-cases/update-use-case-user";
import { FastifyReply } from "fastify";

export async function updateUserId(request: FastifyTypedRequest, reply: FastifyReply) {
    const { id } = request.params;
    const { name, email } = request.body;

    try {
        const prismaUsersRepository = new PrismaUsersRepository();
        const updateUseCase = new UpdateIdUseCase(prismaUsersRepository);
        await updateUseCase.execute({ id, name, email });
    } catch (err) {
        if (err instanceof UserIdExistsError) {
            return reply.status(409).send({ message: err.message });
        } else if (err instanceof UserAlreadyExistsError) {
            return reply.status(409).send({ message: err.message });
        }
        return reply.status(500).send();
    }

    return reply.status(200).send({ message: 'Usuário atualizada com sucesso' })
}