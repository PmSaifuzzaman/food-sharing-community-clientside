import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { authContext } from "../../providers/AuthProvider";
import ManageFoodCard from "./ManageFoodCard";



const ManageFoods = () => {
    const [manageFoods, setManageFoods] = useState([])
    const { user } = useContext(authContext)

    const userEmail = user ? user.email : '';
    console.log(userEmail)

    const url = `http://localhost:5000/api/v1/availableAllfoods?donatorEmail=${userEmail}`

    useEffect(() => {
        if (userEmail) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setManageFoods(data)
                })
        }

    }, [userEmail])

    console.log(manageFoods)

    return (
        <div>
            <Navbar></Navbar>
            <h2>Manage Food</h2>
            <div>
                {
                    manageFoods?.map(food => <ManageFoodCard key={food._id} food={food}></ManageFoodCard>)
                }
            </div>
        </div>
    );
};

export default ManageFoods;