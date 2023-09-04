import { createContext, useState } from "react"
import { api } from "../data/api"
import { toast } from "react-toastify"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const [editModal, setEditModal] = useState(false)

    const [techList, setTechList] = useState([])

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
            toast.error(`Algo deu errado`)
        }
        finally {
            setLoading(false)
        }
    }

    const techEdit = async (formData, setLoading) => {
        try {
            setLoading(true)
            const token = localStorage.getItem("@TOKEN")
            const { data } = await api.patch(`users/techs/:${editModal.id}`, formData, {
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
            await api.delete(`users/tech/:${deletingId}`, {
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
        <TechContext.Provider value={{ techList, techCreate, setEditModal, editModal, techEdit, techDelete }} >
            {children}
        </TechContext.Provider>
    )
}