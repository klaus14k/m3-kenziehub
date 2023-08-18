import { Route, Routes, useNavigate } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import { ErrorPage } from "../pages/ErrorPage"
import { useState } from "react"
import "../styles/index.scss"

export const RoutesMain = () => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const userLogout = () => {
        localStorage.removeItem("@TOKEN")
        setUser(null)
        navigate("/")
    }

    return (
        <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard user={user} userLogout={userLogout} />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}