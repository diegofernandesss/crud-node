import { UsersRepository } from "@/repositories/users-repository"
import { UserIdExistsError } from "./erros/user-id-exists-error"
import { UserAlreadyExistsError } from "./erros/user-already-exists-error"

interface UpdateIdUseCaseRequest {
    id: string
    name: string
    email: string
}

export class UpdateIdUseCase {
    constructor(private usersRepository: UsersRepository) {
        this.usersRepository = usersRepository
    }

    async execute({ id, name, email }: UpdateIdUseCaseRequest) {
        const userId = await this.usersRepository.getUserById(id)
        const userWithSameEmail = await this.usersRepository.findByEmail(email)

        if (!userId) {
            throw new UserIdExistsError()
        }

        if(userWithSameEmail) {
            throw new UserAlreadyExistsError()
        }

        await this.usersRepository.update(id, { name, email })
    }
}
