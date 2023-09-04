import { z } from "zod"

export const createTechSchema = z.object({
    title: z.string().nonempty("Digite a tecnologia"),
    status: z.string().nonempty("Selecione seu status")
})