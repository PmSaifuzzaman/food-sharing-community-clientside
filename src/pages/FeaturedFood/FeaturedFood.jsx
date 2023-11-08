import { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';


const FeaturedFood = () => {

    const [allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        fetch('https://food-sharing-community-server.vercel.app/api/v1/AllFeaturedFoods')
            .then(res => res.json())
            .then(data => setAllFoods(data))

        Aos.init({
            duration: 800,
            offset: 100,
        });
    }, [])

    console.log(allFoods)

    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-7" data-aos='zoom-in' style={{ fontFamily: 'Playpen Sans, cursive' }}>Featured <span className="text-red-400">Food</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" >
                {
                    allFoods?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className=" flex justify-center" data-aos='zoom-in'>
                <Link to={"/avaiableAllfoods"} className="btn my-10 bg-red-400 text-white items-center">Show All</Link>
            </div>
        </div>
    );
};

export default FeaturedFood;
