import "../../styles/formsMobile.scss"
import Logo from "../../assets/Logo.svg"
import { Input } from "../../components/Input/index"
import { Select } from "../../components/Select"
import { registerFormSchema } from "../../components/Input/registerFormSchema"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

export const Register = () => {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(registerFormSchema)
    })
    const navigate = useNavigate()

    const goBack = (e) => {
        e.preventDefault()
        navigate("/")
    }

    const { userRegister } = useContext(UserContext)

    const submit = (formData) => {
        userRegister(formData, setLoading)
        reset()
    }

    return (
        <div className="formContainer">
            <ToastContainer autoClose={4000} />
            <div className="header">
                <img src={Logo} alt="KenzieHub Logo" />
                <button className="backButton" onClick={goBack}>Voltar</button>
            </div>
            <form className="form" onSubmit={handleSubmit(submit)}>
                <h1 className="title1">Crie sua conta</h1>
                <p>Rápido e grátis, vamos nessa</p>
                <Input {...register("name")} error={errors.name} id="name__input" label="Nome" type="text" placeholder="Digite aqui seu nome" disabled={loading} />
                <Input {...register("email")} error={errors.email} id="email__input" label="Email" type="email" placeholder="Digite aqui seu email" disabled={loading} />
                <Input {...register("password")} error={errors.password} id="password__input" label="Senha" type="password" placeholder="Digite aqui sua senha" disabled={loading} />
                <Input {...register("confirmPassword")} error={errors.confirmPassword} id="confirmation__input" label="Confirmar senha" type="password" placeholder="Digite novamente sua senha" disabled={loading} />
                <Input {...register("bio")} error={errors.bio} id="bio__input" label="Bio" type="text" placeholder="Fale sobre você" disabled={loading} />
                <Input {...register("contact")} error={errors.contact} id="contact__input" label="Contato" type="number" placeholder="Opção de contato" disabled={loading} />
                <Select id="formSelect" {...register("course_module")} error={errors.course_module} disabled={loading} />
                <button className="button pink" type="submit" disabled={loading}>{loading ? "Cadastrando" : "Cadastre-se"}</button>
            </form>
        </div>
    )
}