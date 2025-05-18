import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Users =()=>{
    const [user, setUser] = useState([])
    const [loading, setLoading]= useState()
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUser(res.data))
        .then(()=>setLoading(false))
        .catch((error)=>console.log(error))
    },[])
    
    return(
        <div>
            <h2>List Users</h2>

            {
                loading? <h3>Mafamech</h3> : user.map((el,i,t)=> <Link to={`/Profil/${el.id}`}><h3>{el.name}</h3></Link>)
            }
        </div>
    )
}

export default Users