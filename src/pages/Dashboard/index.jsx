import { Header } from "../../components/Header"
import { HelloSection } from "../../components/HelloSection"
import "../../styles/dashMobile.scss"


export const Dashboard = () => {

    return (
        <div className="dashContainer">
            <Header />
            <HelloSection />
            <div>
                <h1 className="title1">Que pena! Estamos em desenvolvimento :/</h1>
                <p className="headline">Nossa aplicação ainda está em desenvolvimento, em breve teremos novidades</p>
            </div>
        </div>
    )
}