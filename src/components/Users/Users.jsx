import { useState } from "react";
import { useEffect } from "react";


const Users = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch("./users.json")
            .then((res) => res.json())
            .then((data) => setAllUsers(data));
    }, []);



    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-5">Users: {allUsers.length} </h1>
            <div className="card-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Map all courses dinamically */}
                {allUsers.map((user) => (
                    <div key={user.id} className="card  bg-base-100 shadow-xl rounded-xl p-4">
                        <img src={user.image} alt="avater" />
                        <div className="flex justify-between py-2">
                            <p><span className="font-bold">First Name:</span> {user.firstName}</p>
                            <p><span className="font-bold">Last Name:</span> {user.lastName}</p>
                        </div>
                        <h2><span className="font-bold">Email</span>: {user.email}</h2>
                        <h2><span className="font-bold">Address:</span> {user.address.address}, {user.address.city}</h2>
                        <h2 className="pb-2"><span className="font-bold">Company Name:</span> {user.company.name}</h2>
                        <button
                            
                            className="btn btn-primary text-white bg-blue-500 w-full p-2 rounded-lg"
                        >
                            Details
                        </button>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;