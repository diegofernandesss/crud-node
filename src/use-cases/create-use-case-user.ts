import { UsersRepository } from "@/repositories/users-repository"
import { UserAlreadyExistsError } from "./erros/user-already-exists-error"

interface RegisterUseCaseRequest {
    name: string,
    email: string
}

export class RegisterUseCase {
    constructor(private usersRepository: UsersRepository) {
        this.usersRepository = usersRepository
    }
   
    async execute({ name, email }: RegisterUseCaseRequest) {

        const userWithSameEmail = await this.usersRepository.findByEmail(email)

        if(userWithSameEmail) {
            throw new UserAlreadyExistsError()
        }

        await this.usersRepository.create({ name, email })
    }
}