import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import { ErrorPage } from "../pages/ErrorPage"
import { ProtectedRoutes } from "../components/ProtectedRoutes"
import { TechProvider } from "../providers/TechContext"
import "../styles/index.scss"

export const RoutesMain = () => {

    return (
        <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<TechProvider><Dashboard /></TechProvider>} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}