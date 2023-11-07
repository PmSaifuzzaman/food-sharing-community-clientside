import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { authContext } from "../../providers/AuthProvider";
import ManageFoodCard from "./ManageFoodCard";

const ManageFoods = () => {
    const [manageFoods, setManageFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(authContext);

    const userEmail = user ? user.email : '';
    console.log(userEmail);

    const url = `http://localhost:5000/api/v1/availableAllfoods?donatorEmail=${userEmail}`;

    useEffect(() => {
        if (userEmail) {
            setIsLoading(true);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setManageFoods(data);
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
            <Navbar />
            
            <div>
                {isLoading ? (
                    <progress className="progress w-56"></progress>
                ) : (
                    manageFoods?.map(food => (
                        <ManageFoodCard key={food._id} food={food} manageFoods={manageFoods} setManageFoods={setManageFoods} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ManageFoods;
