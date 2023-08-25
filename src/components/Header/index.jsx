import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import Logo from "../../assets/Logo.svg"
import "./style.scss"

export const Header = () => {

    const { userLogout } = useContext(UserContext)

    return (
        <header className="dash">
            <img src={Logo} alt="Logo" />
            <button className="backButton" onClick={userLogout}>Sair</button>
        </header>
    )
}