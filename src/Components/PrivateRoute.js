import { Navigate } from "react-router-dom"


const PrivateRoute=({children, auth})=>{
    return(
        <>
        {
            auth ? children : <Navigate to={'/'}/>
        }
        </>
    )
}

export default PrivateRoute