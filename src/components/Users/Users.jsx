import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


const Users = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("");

    // Load data
    useEffect(() => {
        fetch("./users.json")
            .then((res) => res.json())
            .then((data) => setAllUsers(data));
    }, []);

    // Filter users based on search query
    const filteredUsers = allUsers.filter((user) =>
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort filteredUsers based on sortBy state
    const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortBy === "name") {
            return a.firstName.localeCompare(b.firstName);
        } else if (sortBy === "email") {
            return a.email.localeCompare(b.email);
        } else if (sortBy === "company") {
            return a.company.name.localeCompare(b.company.name);
        }
        return 0;
    });

    // Handle input change for search query
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Handle select change for sorting
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };


    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-5">Total Users: {allUsers.length} </h1>
            <div className="flex gap-2 justify-between mb-5">
                <div className=" relative flex items-center" >
                    <input
                        type="text"
                        placeholder="Search by user's name"
                        className="input border-blue-500 w-full max-w-xs"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button className="absolute right-3 top-3 mt-1 ml-[-2] hidden md:block"><FaSearch/></button>
                </div>
                <div>
                    <select className="select select-bordered w-full max-w-xs border-blue-500" onChange={handleSortChange}>
                        <option disabled selected>Sort the users...</option>
                        <option value="name">Sort by name</option>
                        <option value="email">Sort by email</option>
                        <option value="company">Sort by Company name</option>
                    </select>
                </div>
            </div>
            <div className="card-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Map all users dinamically */}
                {sortedUsers.map((user) => (
                    <div key={user.id} className="card  bg-base-100  rounded-lg shadow-2xl p-4">
                        <img src={user.image} alt="avater" />
                        <Link to={`/userDetails/${user.id}`} className="pt-2"><span className="font-bold">User Name</span>: {user.username}</Link>
                        <div className="flex justify-between py-2">
                            <p><span className="font-bold">First Name:</span> {user.firstName}</p>
                            <p><span className="font-bold">Last Name:</span> {user.lastName}</p>
                        </div>
                        <h2><span className="font-bold">Email</span>: {user.email}</h2>
                        <h2><span className="font-bold">Address:</span> {user.address.address}, {user.address.city}</h2>
                        <h2 className="pb-2"><span className="font-bold">Company Name:</span> {user.company.name}</h2>
                        <Link
                            to={`/userDetails/${user.id}`}
                            className="btn btn-primary text-white bg-blue-500 w-full p-2 rounded-lg"

                        >
                            Details
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;