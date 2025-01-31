import { z } from "zod";

export const registerUserBodySchema = z.object({
    name: z.string().nonempty('Campo Nome Obrigatório'),
    email: z.string().email('Campo E-mail Inválido')
})