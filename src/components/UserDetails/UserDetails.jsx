import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


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
            <div className="flex justify-center">
                <Link to={`/`} className=" mt-2 btn btn-sm text-white bg-blue-500  p-2 rounded-lg">Go Back to Home</Link>
            </div>
            <p className="text-center my-5">User ID : {user.id}</p>
            <div key={user.id} className="card  bg-base-100 shadow-xl rounded-xl p-4 lg:w-4/6 lg:mx-auto">
                <img src={user.image} alt="avater" />
                <div className="flex justify-between  py-2">
                    <p><span className="font-bold">First Name:</span> {user.firstName}</p>
                    <p><span className="font-bold">Maiden Name:</span> {user.maidenName}</p>
                    <p><span className="font-bold">Last Name:</span> {user.lastName}</p>
                </div>
                <h2><span className="font-bold">User Name</span>: {user.username}</h2>
                <div className="flex justify-between py-2">
                    <p><span className="font-bold">Gender:</span> {user.gender}</p>
                    <p><span className="font-bold">Age:</span> {user.age}</p>
                </div>
                <div className="flex justify-between py-2">
                    <p><span className="font-bold">Height:</span> {user.height}</p>
                    <p><span className="font-bold">Weight:</span> {user.weight}</p>
                </div>
                <h2><span className="font-bold">University Name</span>: {user.university}</h2>
                <h2><span className="font-bold">Email</span>: {user.email}</h2>
                <h2><span className="font-bold">Address:</span> {user.address?.address}, {user.address?.city}</h2>
                <h2 className="pb-2"><span className="font-bold">Company Name:</span> {user.company?.name}</h2>
                <div>
                    <p><span className="font-bold text-2xl underline flex  justify-center">Bank Information</span></p>
                    <p><span className="font-bold">Card Type:</span> {user.bank?.cardType}</p>
                    <p><span className="font-bold">Card Number:</span> {user.bank?.cardNumber}</p>
                    <p><span className="font-bold">Currency:</span> {user.bank?.currency}</p>
                    <p><span className="font-bold">IBAN:</span> {user.bank?.iban}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;