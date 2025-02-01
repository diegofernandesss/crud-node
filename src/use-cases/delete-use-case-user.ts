import { UsersRepository } from "@/repositories/users-repository"
import { UserIdExistsError } from "./erros/user-id-exists-error"

interface DeleteIdUseCaseRequest {
    id: string
}

export class DeleteIdUseCase {
    constructor(private usersRepository: UsersRepository) {
        this.usersRepository = usersRepository
    }
   
    async execute({ id }: DeleteIdUseCaseRequest) {

        const user = await this.usersRepository.getUserById(id)

        if(!user) {
            throw new UserIdExistsError()
        }

        await this.usersRepository.delete(id)
    }
}