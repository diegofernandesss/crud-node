import { UsersRepository } from "@/repositories/users-repository"

export class getUseCase {
    constructor(private usersRepository: UsersRepository) {
        this.usersRepository = usersRepository
    }
   
    async execute() {
        const user = await this.usersRepository.findAll()
        return user
    }
}