import "../../styles/formsMobile.scss"
import { Input } from "../../components/Input/index"
import { loginFormSchema } from "../../components/Input/loginFormSchema"
import Logo from "../../assets/Logo.svg"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"

export const Login = () => {
    const navigate = useNavigate()

    const goToRegister = (e) => {
        e.preventDefault()
        navigate("/register")
    }

    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const { userLogin } = useContext(UserContext)

    const submit = (formData) => {
        userLogin(formData, setLoading)
        reset()
    }

    return (
        <div className="formContainer">
            <ToastContainer autoClose={3000} />
            <header>
                <img src={Logo} alt="KenzieHub Logo" />
            </header>
            <form className="form" onSubmit={handleSubmit(submit)}>
                <h1 className="title1">Login</h1>
                <Input {...register("email")} error={errors.email} id="email__input" label="Email" type="email" placeholder="Digite aqui seu email" disabled={loading} />
                <Input {...register("password")} error={errors.password} id="password__input" label="Senha" type="password" placeholder="Digite aqui sua senha" disabled={loading} />
                <button className="button pink" type="submit" disabled={loading}>{loading ? "Entrando" : "Entrar"}</button>
                <p>Ainda não possui uma conta?</p>
                <button className="button grey" onClick={goToRegister}>Cadastre-se</button>
            </form>
        </div>
    )
}