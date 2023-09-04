import { TechContext } from "../../providers/TechContext"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { EditTechSchema } from "./EditTechSchema"
import "../CreateTechModal/styles.scss"

export const EditTechModal = () => {
    const { techEdit, setEditModal, editModal } = useContext(TechContext)

    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(EditTechSchema),
        values: {
            title: editModal.title,
            status: editModal.status,
        }
    })

    const submit = (formData) => {
        techEdit(formData, setLoading)
    }

    return (
        <div className="modalController" role="dialog">
            <div className="modalContainer">
                <div className="modalHeader">
                    <h3 className="title2">Alterar Tecnologia</h3>
                    <button className="title2" onClick={() => setEditModal(false)}>X</button>
                </div>
                <form className="modalBody" onSubmit={handleSubmit(submit)}>
                    <div className="field">
                        <label className="headline" htmlFor="titleInput">Nome</label>
                        <input type="text" id="titleInput" disabled={loading} {...register("title")} error={errors.title} />
                    </div>
                    <div className="field">
                        <label className="headline" htmlFor="statusSelect">Atualizar status</label>
                        <select id="statusSelect" disabled={loading} {...register("status")} error={errors.status} >
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                    <button id="createButton" className="button pink" type="submit" disabled={loading}>{loading ? "Salvando" : "Salvar Alterações"}</button>
                </form>
            </div>
        </div>
    )
}