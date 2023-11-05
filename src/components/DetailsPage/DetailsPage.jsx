import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const DetailsPage = () => {

    const singleFood = useLoaderData()[0];
    const {_id, foodImage, foodName, donatorImage, donatorName, foodQuantity, expireDate, pickupLocation } = singleFood;
    console.log(singleFood)
    console.log(foodImage)


    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-auto">
                <figure><img src={foodImage} alt="Food" /></figure>
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
                    <div className="card-actions justify-end">
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-outline border-red-400 text-red-400">Request</button>
                    </div>
                    {/* modal section */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <img className="h-40 w-45 object-cover mx-auto" src={foodImage} alt="" />
                            <h3 className="font-bold text-lg">{foodName}</h3>
                            <p>Food Quantity: {foodQuantity}</p>
                            <p className="">Food id: {_id}</p>
                            <p className="">Food Donator Name: {donatorName}</p>
                            <p className="">Pickup Location: {pickupLocation}</p>
                            <p className="">Expire Date: <span className='font-medium text-red-400'>{expireDate}</span></p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn  bg-red-400 text-white">Request</button>
                                    <button className="btn ml-5">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;