import { Prisma, User } from "@prisma/client";

export interface UsersRepository {
    findByEmail(email: string): Promise<User | null>
    create(data: Prisma.UserCreateInput): Promise<User>
    findAll(): Promise<User[]>
    getUserById(id: string): Promise<User | null>
    update(id: string, data: Prisma.UserUpdateInput): Promise<User>
    delete(id: string): Promise<User>
}