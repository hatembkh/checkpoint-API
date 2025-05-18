import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [listOfUSer, setListOfUser] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setListOfUser(res.data))
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="users-container">
            <h2 className="users-title">List Users</h2>

            {loading ? (
                <h3 className="loading-text">Loading...</h3>
            ) : (
                listOfUSer.map((el, i, t) => (
                    <Link to={`/Profil/${el.id}`} className="user-link" key={el.id}>
                        <h3>{el.name}</h3>
                    </Link>
                ))
            )}
        </div>
    );
};

export default Users;
