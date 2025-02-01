import { z } from "zod";

export const RegisterUserBodySchema = z.object({
    name: z.string().nonempty('Campo Nome Obrigatório'),
    email: z.string().email('Campo E-mail Inválido')
})


export const UserSchemaResponse = z.object({
    message: z.string(),
  });