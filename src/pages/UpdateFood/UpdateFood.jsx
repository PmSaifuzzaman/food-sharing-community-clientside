import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Swal from "sweetalert2";

const UpdateFood = () => {

    const singleFood = useLoaderData();
    console.log(singleFood)
    const {_id, foodName, foodImage, donatorImage, donatorName, foodQuantity, pickupLocation, expireDate, additionalNotes, foodStatus, donatorEmail } = singleFood;

    console.log(foodName)


    const handleUpdateFood = event => {
        event.preventDefault();

        const form = event.target;

        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expireDate = form.expireDate.value;
        const additionalNotes = form.additionalNotes.value;
        const donatorImage = form.donatorImage.value;
        const donatorName = form.donatorName.value;
        const donatorEmail = form.donatorEmail.value;
        const foodStatus = form.foodStatus.value;

        const updatedFood = { foodName, foodImage, foodQuantity, pickupLocation, expireDate, additionalNotes, donatorImage, donatorName, donatorEmail, foodStatus }

        // Send data to server

        fetch(`http://localhost:5000/api/v1/availableFoods/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedFood),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    event.target.reset();
                }
            });


        console.log(updatedFood)

    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="p-10">
                <h2 className="text-3xl font-extrabold text-center pb-4">Update a Food</h2>
                <form onSubmit={handleUpdateFood}>
                    {/* form food name and food image row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodName" defaultValue={foodName} placeholder="Food Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Image Link</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodImage" defaultValue={foodImage} placeholder="Food Image Link" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form food quantity and pickup location row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodQuantity" defaultValue={foodQuantity} placeholder="Quantity of food" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Pick Up Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="pickupLocation" defaultValue={pickupLocation} placeholder="Pickup Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Expire date and additional notes row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Expire date</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="expireDate" defaultValue={expireDate} placeholder="Expire date" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="additionalNotes" defaultValue={additionalNotes} placeholder="Food Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Donator image and name row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Donator Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="donatorImage" defaultValue={donatorImage} placeholder="Donator Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Donator Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="donatorName" defaultValue={donatorName} placeholder="Donator name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Donator email and food status row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Donator email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="donatorEmail" defaultValue={donatorEmail} placeholder="Donator email" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Food Status</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodStatus" defaultValue={foodStatus} placeholder="Food Status" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Food" className="btn btn-block bg-red-400 text-white" />

                </form>
            </div>
        </div>
    );
};

export default UpdateFood;