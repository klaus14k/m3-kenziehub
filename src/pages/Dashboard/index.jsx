import { useState } from "react"
import { Header } from "../../components/Header"
import { HelloSection } from "../../components/HelloSection"
import { TechList } from "../../components/TechList"
import { CreateTechModal } from "../../components/CreateTechModal"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import "../../styles/dashMobile.scss"


export const Dashboard = () => {

    const [createModal, setCreateModal] = useState(false)

    return (
        <div className="dashContainer">
            <ToastContainer autoClose={3000} />
            <Header />
            <HelloSection />
            <TechList setCreateModal={setCreateModal} />
            {createModal ? <CreateTechModal setCreateModal={setCreateModal} /> : null}
        </div>
    )
}