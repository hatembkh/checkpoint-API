import axios from "axios"
import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"

const Profil=()=>{
    const {id}= useParams()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=> setUser(res.data))
        .then(()=>setLoading(false))
        .catch((error)=> console.log(error))
    },[])
    return(
        <div>
            {
                loading?
                <h1>Mazel</h1>
                :
                <div>
                <h2>Name: {user.name}</h2>
                <h3>User Name: {user.username}</h3>
                <h3>E-mail: {user.email}</h3>
                <h3>Adresse: 
                    <h5>{user.address.street},{user.address.suite}, {user.address.city},{user.address.zipcode},   lat: {user.address.geo.lat}, lng: {user.address.geo.lng} </h5></h3>
                <h3>Phone: {user.phone}</h3>
                <h3>Website: {user.website}</h3>
                <h3>Company: 
                    <h5>Name: {user.company.name}</h5>
                    
                    <h5>Catch Phrase: {user.company.catchPhrase}</h5>
                    
                    <h5>BS: {user.company.bs}</h5>
                    </h3>
                </div>
            }
            
        </div>
    )
}

export default Profil