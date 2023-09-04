import { TechContext } from "../../providers/TechContext"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createTechSchema } from "./createTechSchema"
import "./styles.scss"

export const CreateTechModal = ({ setCreateModal }) => {
    const { techCreate } = useContext(TechContext)

    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(createTechSchema)
    })

    const submit = (formData) => {
        techCreate(formData, setLoading)
        reset()
    }

    return (
        <div className="modalController" role="dialog">
            <div className="modalContainer">
                <div className="modalHeader">
                    <h3 className="title2">Cadastrar Tecnologia</h3>
                    <button className="title2" onClick={() => setCreateModal(false)}>X</button>
                </div>
                <form className="modalBody" onSubmit={handleSubmit(submit)}>
                    <div className="field">
                        <label className="headline" htmlFor="titleInput">Nome</label>
                        <input type="text" id="titleInput" placeholder="Digite a tecnologia..." disabled={loading} {...register("title")} error={errors.title} />
                    </div>
                    <div className="field">
                        <label className="headline" htmlFor="statusSelect">Selecionar status</label>
                        <select id="statusSelect" disabled={loading} {...register("status")} error={errors.status} >
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                    <button id="createButton" className="button pink" type="submit" disabled={loading}>{loading ? "Cadastrando" : "Cadastrar Tecnologia"}</button>
                </form>
            </div>
        </div>
    )
}