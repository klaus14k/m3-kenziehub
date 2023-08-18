import "./style.scss"

export const HelloSection = ({ user }) => {
    return (
        <section>
            <h1 className="title1">Olá, {user?.name}</h1>
            <p className="headline">{user?.course_module}</p>
        </section>
    )
}