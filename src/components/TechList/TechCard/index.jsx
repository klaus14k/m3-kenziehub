import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"
import { MdDelete, MdEdit } from "react-icons/md"
import "./styles.scss"

export const TechCard = ({ tech }) => {
    const { setEditModal, techDelete } = useContext(TechContext)

    return (
        <li className="techListItem">
            <h3 className="cardTitle">{tech.title}</h3>
            <div>
                <span className="headline">{tech.status}</span>
                <div id="buttonsDiv">
                    <button className="buttonsStyle" onClick={() => setEditModal(tech)} ><MdEdit size={21} color="white" /></button>
                    <button className="buttonsStyle" onClick={() => techDelete(tech.id)}><MdDelete size={21} color="white" /></button>
                </div>
            </div>
        </li>
    )
}