import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { authContext } from "../../providers/AuthProvider";
import ManageFoodCard from "../ManageFoods/ManageFoodCard";


const MyRequests = () => {
    const[myRequests, setMyRequests] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(authContext);

    const userEmail = user ? user.email : '';
    console.log(userEmail);

    const url = `http://localhost:5000/api/v1/user/foodRequests?requesterEmail=${userEmail}`;

    useEffect(() => {
        if (userEmail) {
            setIsLoading(true);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setMyRequests(data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error("Error:", error);
                    setIsLoading(false);
                });
        }
    }, [userEmail]);

    return (
        <div>
            <Navbar></Navbar>
            <h2>My requests</h2>
            <div>
                {isLoading ? (
                    <progress className="progress w-56"></progress>
                ) : (
                    myRequests?.map(food => (
                        <ManageFoodCard key={food._id} food={food} />
                    ))
                )}
            </div>
        </div>
    );
};

export default MyRequests;