import { z } from "zod"

export const registerFormSchema = z.object({
    name: z
        .string()
        .nonempty("Nome é obrigatorio"),
    email: z
        .string()
        .nonempty("E-mail é obrigatorio")
        .email("forneça um email válido"),
    password: z
        .string()
        .nonempty("Senha é obrigatoria")
        .min(8, "É necessário pelo menos 8 caracteres")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
        .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial"),
    confirmPassword: z
        .string()
        .nonempty("É necessário confirmar a sua senha"),
    course_module: z
        .string()
        .nonempty("Escolha seu módulo"),
    bio: z
        .string()
        .nonempty("Sua biografia não estar em branco"),
    contact: z
        .string()
        .nonempty("Coloque uma forma de contato")
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
})