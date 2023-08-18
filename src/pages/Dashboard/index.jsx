import { Header } from "../../components/Header"
import { HelloSection } from "../../components/HelloSection"
import "../../styles/dashMobile.scss"


export const Dashboard = ({ user, userLogout }) => {
    return (
        <div className="dashContainer">
            <Header userLogout={userLogout} />
            <HelloSection user={user}/>
            <div>
                <h1 className="title1">Que pena! Estamos em desenvolvimento :/</h1>
                <p className="headline">Nossa aplicação ainda está em desenvolvimento, em breve teremos novidades</p>
            </div>
        </div>
    )
}