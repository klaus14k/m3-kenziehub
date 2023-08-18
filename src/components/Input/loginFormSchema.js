import { z } from "zod"

export const loginFormSchema = z.object({
    email: z.string().nonempty("Coloque seu email").email("Coloque um email válido"),
    password: z.string().nonempty("Senha é obrigatoria")
})