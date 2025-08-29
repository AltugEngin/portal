import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import type React from "react"

const PrivateRoute=({children}:{children:React.ReactNode})=>{
    const {user}=useAuth()
    if(user===undefined){
        return <div>Loading...</div>
    }
    return <div>{user ? <>{children}</> : <Navigate to="/"></Navigate>}</div>
}

export default PrivateRoute;