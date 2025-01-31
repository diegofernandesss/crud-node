import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { FastifyTypedRequest } from "@/types/fastify-instance";
import { UserAlreadyExistsError } from "@/use-cases/erros/user-already-exists-error";
import { RegisterUseCase } from "@/use-cases/create-use-case-user";
import { FastifyReply } from "fastify";

export async function registerUser(request: FastifyTypedRequest, reply: FastifyReply) {
    const { name, email } = request.body

    try {
        const prismaUsersRepository = new PrismaUsersRepository()
        const registerUseCase = new RegisterUseCase(prismaUsersRepository)

        await registerUseCase.execute({
            name,
            email
        })
    } catch (err) {
        if(err instanceof UserAlreadyExistsError) {
            return reply.status(409).send({ message: err.message})
        }

        return reply.status(500).send()
    }

    return reply.status(201).send({ message: "Mensagem enviada com sucesso"});
}