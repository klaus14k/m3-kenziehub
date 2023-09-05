import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {
    const userId = localStorage.getItem("@USERID")
    
    return (userId ? <Outlet /> : <Navigate to="/" /> )
}