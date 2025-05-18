import { Link } from "react-router-dom"

const NavUsers = ({auth, setAuth}) => {
    return(
    <>
        <ul>
            <Link to={'/'}><li>Home</li></Link>

            {
                auth ?
                <>
                <Link to={'/Users'}><li>Users</li></Link>
                <li onClick={()=>setAuth(false)}>Logout</li>
                </>
                :
                <li onClick={()=>setAuth(true)}>Login</li>
            }

            
        </ul>
    </>
    )
}

export default NavUsers