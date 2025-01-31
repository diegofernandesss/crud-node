import { UsersRepository } from "@/repositories/users-repository"
import { UserIdExistsError } from "./erros/user-id-exists-error"

interface GetIdUseCaseRequest {
    id: string
}

export class GetIdUseCase {
    constructor(private usersRepository: UsersRepository) {
        this.usersRepository = usersRepository
    }
   
    async execute({ id }: GetIdUseCaseRequest) {

        const user = await this.usersRepository.getUserById(id)

        if(!user) {
            throw new UserIdExistsError()
        }

        return user
    }
}