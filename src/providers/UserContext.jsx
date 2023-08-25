import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../data/api"

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@TOKEN")
            const userId = localStorage.getItem("@USERID")

            if (token && userId){
                try {
                    const { data } = await api.get(`/profile`, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })
                    setUser(data)
                } catch (error) {
                    console.log(error)
                    localStorage.removeItem("@TOKEN")
                    localStorage.removeItem("@USERID")
                }
            }
        }
        loadUser()
    }, [])

    const navigate = useNavigate()

    const userLogout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setUser(null)
        navigate("/")
    }

    const userLogin = async (formData, setLoading) => {
        try {
            setLoading(true)
            const {data} = await api.post("/sessions", formData)
            localStorage.setItem("@TOKEN", data.token)
            localStorage.setItem("@USERID", data.user.id)
            setUser(data.user)
            navigate("/dashboard")
        } catch (error) {
            toast.error("Email ou senha podem estar incorretos")
            throw new Error(error)
        }
        finally {
            setLoading(false)
        }
    }

    const userRegister = async (formData, setLoading) => {
        try {
            setLoading(true)
            const {data} = await api.post("/users", formData)
            toast.success("Sua conta foi criada com sucesso! Você será redirecionado para a tela de login em alguns instantes.")
            setTimeout(() => navigate("/"), 5000)
        } catch (error) {
            toast.error("Ops, algo deu errado! Este email já pode ter sido cadastrado") 
            throw new Error(error) 
        }
        finally {
            setLoading(false)
        }
    }


    return (
        <UserContext.Provider value={{ user, setUser, userLogout, userLogin, userRegister }}>
            {children}
        </UserContext.Provider>
    )
}