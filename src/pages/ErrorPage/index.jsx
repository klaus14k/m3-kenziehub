import { useNavigate } from "react-router-dom"

export const ErrorPage = () => {
    const navigate = useNavigate()
    const goBack = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <>
            <h1>Erro 404 - Página não encontrada</h1>
            <button onClick={goBack}>Voltar ao início</button>
        </>
    )
}