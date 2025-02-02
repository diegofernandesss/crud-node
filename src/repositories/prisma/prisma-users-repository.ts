import { prisma } from '@/lib/prisma';
import type { Prisma } from "@prisma/client";
import { UsersRepository } from '../users-repository';

export class PrismaUsersRepository implements UsersRepository{
    async getUserById(id: string) {
        const user = await prisma.user.findUnique({ where: { id } })
        return user
    }

    async update(id: string, data: Prisma.UserUpdateInput){
        const user = await prisma.user.update({ where: { id }, data })
        return user
    }

    async delete(id: string) {
        const user = await prisma.user.delete({ where: { id } })
        return user
    }

    async findAll() {
        const user = await prisma.user.findMany()
        return user
    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({ where: { email } })
        return user
    }
    
    async create(data: Prisma.UserCreateInput) {
       const user = await prisma.user.create({ data })
       return user
    }
}