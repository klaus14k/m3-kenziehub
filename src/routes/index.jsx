import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import { ErrorPage } from "../pages/ErrorPage"
import "../styles/index.scss"
import { ProtectedRoutes } from "../components/ProtectedRoutes"

export const RoutesMain = () => {

    return (
        <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/register" element={<Register />} />
            
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<Dashboard />} />
            </Route>
            
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}