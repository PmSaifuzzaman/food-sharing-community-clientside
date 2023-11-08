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
import MyRequests from "../pages/MyRequests/MyRequests";
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>
            },
            {
                path: "/myRequests",
                element: <PrivateRoute><MyRequests></MyRequests></PrivateRoute>
            },
            {
                path: "/detailsFood/:id",
                element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-sharing-community-server.vercel.app/api/v1/availableFoods/${params.id}`)
            },
            {
                path: "/addFood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "/updateFood/:id",
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-sharing-community-server.vercel.app/api/v1/availableFoods/${params.id}`)
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