import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { TechContext } from "../../providers/TechContext"
import { TechCard } from "./TechCard"
import { MdAdd } from "react-icons/md"
import { EditTechModal } from "../EditTechModal"
import "./styles.scss"

export const TechList = ({ setCreateModal }) => {
    const { editModal } = useContext(TechContext)
    const { techList } = useContext(UserContext)

return (
        <>
            <section id="techSection">
                <div id="listHeader">
                    <h2 className="title1">Tecnologias</h2>
                    <button className="addButton" onClick={() => setCreateModal(true)}>
                        <MdAdd size={24} color="white" />
                    </button>
                </div>
                <ul>
                    {techList.map((tech) => (
                        <TechCard key={tech.id} tech={tech} />
                    ))}
                </ul>
            </section>
            {editModal ? <EditTechModal /> : null}
        </>
    )
}