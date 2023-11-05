import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const DetailsPage = () => {

    const singleFood = useLoaderData()[0];
    const { foodImage, foodName, donatorImage, donatorName, foodQuantity, expireDate } = singleFood;
    console.log(singleFood)
    console.log(foodImage)


    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-auto">
            <figure><img  src={foodImage} alt="Food" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {foodName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className='flex gap-10 items-center'>
                    <img className='w-10 rounded-full' src={donatorImage} alt="" />
                    <h2>{donatorName}</h2>
                </div>
                <p><span className='font-bold'>{foodQuantity}</span> Person can eat</p>
                <p>Expire On: <span className='font-medium text-red-400'>{expireDate}</span></p>
                
            </div>
            </div>
        </div>
    );
};

export default DetailsPage;