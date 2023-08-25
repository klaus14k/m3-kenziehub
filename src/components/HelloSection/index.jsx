import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import "./style.scss"

export const HelloSection = () => {

    const { user } = useContext(UserContext)

    return (
        <section>
            <h1 className="title1">Olá, {user?.name}</h1>
            <p className="headline">{user?.course_module}</p>
        </section>
    )
}