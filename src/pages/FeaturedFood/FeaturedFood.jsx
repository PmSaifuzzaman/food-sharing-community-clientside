import { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";


const FeaturedFood = () => {

    const[allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/AllFeaturedFoods')
        .then(res => res.json())
        .then(data => setAllFoods(data))
    }, [])

    console.log(allFoods)

    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-7">Featured Food</h1>
            <div className="grid grid-cols-1 grid-cols-3 gap-5">
                {
                    allFoods?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedFood;
