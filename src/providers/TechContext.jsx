import { createContext, useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { api } from "../data/api"
import { toast } from "react-toastify"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const [editModal, setEditModal] = useState(false)

    const { techList, setTechList } = useContext(UserContext)

    const techCreate = async (formData, setLoading) => {
        try {
            setLoading(true)
            const newTech = { ...formData }
            const token = localStorage.getItem("@TOKEN")

            const { data } = await api.post("/users/techs", newTech, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            setTechList([...techList, data])
            toast.success("Tecnologia criada com sucesso!")
        } catch (error) {
            toast.error("Esse nome já está sendo utilizado")
        }
        finally {
            setLoading(false)
        }
    }

    const techEdit = async (formData, setLoading) => {
        try {
            setLoading(true)
            const token = localStorage.getItem("@TOKEN")
            const { data } = await api.put(`users/techs/${editModal.id}`, formData, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const newTechList = techList.map(tech => {
                if (tech.id === editModal.id) {
                    return data
                }
                return tech
            })
            setTechList(newTechList)
            setEditModal(false)
            toast.success("Tecnologia editada com sucesso!")
        } catch (error) {
            toast.error(`Algo deu errado`)
        }
        finally {
            setLoading(false)
        }
    }

    const techDelete = async (deletingId) => {
        try {
            const token = localStorage.getItem("@TOKEN")
            await api.delete(`users/techs/${deletingId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const newTechList = techList.filter(tech => tech.id !== deletingId)
            setTechList(newTechList)
            toast.success("Tecnologia apagada com sucesso!")
        } catch (error) {
            toast.error(`Algo deu errado`)
        }
    }

    return (
        <TechContext.Provider value={{ techCreate, techEdit, techDelete, editModal, setEditModal }} >
            {children}
        </TechContext.Provider>
    )
}