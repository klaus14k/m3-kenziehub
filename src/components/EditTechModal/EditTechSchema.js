import { z } from "zod"

export const EditTechSchema = z.object({
    title: z.string().nonempty("Digite a tecnologia"),
    status: z.string().nonempty("Atualize seu status")
})