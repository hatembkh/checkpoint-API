import { Link } from "react-router-dom"

const NavUsers = ({auth, setAuth}) => {
    return(
    <nav className="nav-container">
        <ul className="nav-list">
            <Link to={'/'} className="nav-link"><li>Home</li></Link>

            {
                auth ?
                <>
                <Link to={'/Users'} className="nav-link"><li>Users</li></Link>
                <button className="logout-btn" onClick={()=>setAuth(false)}>Logout</button>
                </>
                :
                <button className="login-btn" onClick={()=>setAuth(true)}>Login</button>
            }
        </ul>
    </nav>
    )
}

export default NavUsers