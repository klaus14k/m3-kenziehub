import Logo from "../../assets/Logo.svg"
import "./style.scss"

export const Header = ({ userLogout }) => {
    return (
        <header className="dash">
            <img src={Logo} alt="Logo" />
            <button className="backButton" onClick={userLogout}>Sair</button>
        </header>
    )
}