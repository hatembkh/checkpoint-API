import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Profil = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUser(res.data))
            .then(() => setLoading(false))
            .catch((error) => console.log(error))
    }, [id])
    return (
        <div className="profile-container">
            {
                loading ?
                    <h1 className="loading-text">Loading...</h1>
                    :
                    <div>
                        <h2 className="profile-title">Name: <span className="profile-detail">{user.name}</span></h2>
                        <div className="profile-section">
                            <h3 className="profile-subtitle">User Name:</h3>
                            <p className="profile-detail">{user.username}</p>
                        </div>
                        <div className="profile-section">
                            <h3 className="profile-subtitle">E-mail:</h3>
                            <p className="profile-detail">{user.email}</p>
                        </div>
                        <div className="profile-section">
                            <h3 className="profile-subtitle">Address:</h3>
                            <p className="profile-detail">
                                {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                                <br />
                                Geo: lat: {user.address.geo.lat}, lng: {user.address.geo.lng}
                            </p>
                        </div>
                        <div className="profile-section">
                            <h3 className="profile-subtitle">Phone:</h3>
                            <p className="profile-detail">{user.phone}</p>
                        </div>
                        <div className="profile-section">
                            <h3 className="profile-subtitle">Website:</h3>
                            <p className="profile-detail">{user.website}</p>
                        </div>
                        <div className="profile-section">
                            <h3 className="profile-subtitle">Company:</h3>
                            <p className="profile-detail">
                                <strong>Name:</strong> {user.company.name}<br />
                                <strong>Catch Phrase:</strong> {user.company.catchPhrase}<br />
                                <strong>BS:</strong> {user.company.bs}
                            </p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Profil