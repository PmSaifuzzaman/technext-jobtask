import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import UserDetails from "../components/UserDetails/UserDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        //   errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/userDetails/:id",
                element: <UserDetails></UserDetails>,
                loader: () => fetch('./users.json')
            },
        ],
    },
]);

export default router