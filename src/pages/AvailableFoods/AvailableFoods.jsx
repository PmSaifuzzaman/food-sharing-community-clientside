import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FoodCard from "../../components/FoodCard/FoodCard";


const AvailableFoods = () => {
    const[allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/availableAllfoods')
        .then(res => res.json())
        .then(data => setAllFoods(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 grid-cols-3 gap-5">
                {
                    allFoods?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;