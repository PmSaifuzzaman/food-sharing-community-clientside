import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FoodCard from "../../components/FoodCard/FoodCard";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const AvailableFoods = () => {
    const [allFoods, setAllFoods] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    // For pagination
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 9;
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const displayedCards = allFoods.slice(startIndex, endIndex);


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
                    displayedCards?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            {/* Pagination section for Displaying 9 cards */}
            <div className="flex justify-center">
                <div className="join ">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="join-item btn"
                    >
                        <FaArrowLeft />
                    </button>
                    {Array.from({ length: Math.ceil(allFoods.length / cardsPerPage) }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`join-item btn ${i + 1 === currentPage ? 'btn-active' : ''}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={endIndex >= allFoods.length}
                        className="join-item btn"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AvailableFoods;