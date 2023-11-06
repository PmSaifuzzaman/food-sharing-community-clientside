import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FoodCard from "../../components/FoodCard/FoodCard";


const AvailableFoods = () => {
    const [allFoods, setAllFoods] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/availableAllfoods')
            .then(res => res.json())
            .then(data => setAllFoods(data))
    }, [])

    const handleSearch = () => {

        const filteredFoods = allFoods.filter(food =>
            food.foodName.toLowerCase().includes(searchInput.toLowerCase())
        );
        setAllFoods(filteredFoods);
    };

    const handleSortByExpireDate = () => {
        const sortedFoods = [...allFoods].sort((a, b) =>
            new Date(a.expireDate) - new Date(b.expireDate)
        );
        setAllFoods(sortedFoods);
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-between my-5">
                <div className="flex">
                    <input onChange={(e) => setSearchInput(e.target.value)} value={searchInput} type="text" placeholder="Search by food name" className="input border-red-400 w-full max-w-xs" />
                    <button onClick={handleSearch} className="btn bg-red-400 text-white">Search</button>
                </div>
                <div>
                    <button onClick={handleSortByExpireDate} className="btn btn-outline border-red-400 text-red-400">Sort by Expire date</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allFoods?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;