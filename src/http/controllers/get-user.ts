import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { getUseCase } from "@/use-cases/get-use-case-user";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getUser(request: FastifyRequest, reply: FastifyReply) {
    try {
        const prismaUsersRepository = new PrismaUsersRepository();
        const getUseCases = new getUseCase(prismaUsersRepository);

        const users = await getUseCases.execute();

        return reply.status(200).send(
            users.map(user => ({
                id: user.id,
                name: user.name,
                email: user.email,
                created_at: user.created_at.toISOString()
            }))
        );
    } catch (err) {
        return reply.status(500).send({ message: "Erro ao listar usuários" });
    }
}