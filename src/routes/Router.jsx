import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import DetailsPage from "../components/DetailsPage/DetailsPage";
import AddFood from "../pages/AddFood/AddFood";
import ManageFoods from "../pages/ManageFoods/ManageFoods";
import UpdateFood from "../pages/UpdateFood/UpdateFood";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/avaiableAllfoods",
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: "/manageFoods",
                element: <ManageFoods></ManageFoods>
            },
            {
                path: "/detailsFood/:id",
                element: <DetailsPage></DetailsPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/availableFoods/${params.id}`)
            },
            {
                path: "/addFood",
                element: <AddFood></AddFood>
            },
            {
                path: "/updateFood/:id",
                element: <UpdateFood></UpdateFood>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/availableFoods/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;