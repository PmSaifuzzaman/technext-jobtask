import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const UserDetails = () => {
    const [user, setUser] = useState([]);

    const { id } = useParams();
    console.log(id)

    const users = useLoaderData();
    console.log(users)

    useEffect(() => {
        const findUser = users?.find(user => user.id === parseInt(id));

        setUser(findUser)
        console.log(findUser)

    }, [id, users])


    return (
        <div>
            <p className="text-center my-5">User ID : {user.id}</p>
            <div key={user.id} className="card  bg-base-100 shadow-xl rounded-xl p-4 lg:w-4/6 lg:mx-auto">
                <img src={user.image} alt="avater" />
                <div className="flex justify-between  py-2">
                    <p><span className="font-bold">First Name:</span> {user.firstName}</p>
                    <p><span className="font-bold">Last Name:</span> {user.lastName}</p>
                </div>
                <h2><span className="font-bold">Email</span>: {user.email}</h2>
                <h2><span className="font-bold">Address:</span> {user.address?.address}, {user.address?.city}</h2>
                <h2 className="pb-2"><span className="font-bold">Company Name:</span> {user.company?.name}</h2>
            </div>
        </div>
    );
};

export default UserDetails;