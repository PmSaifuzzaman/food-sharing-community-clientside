import Navbar from "../../components/Navbar/Navbar";
import Swal from "sweetalert2";


const AddFood = () => {

    const handleAddFood = event => {
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

        const newFood = { foodName, foodImage, foodQuantity, pickupLocation, expireDate, additionalNotes, donatorImage, donatorName, donatorEmail, foodStatus }

        // Send data to server

        fetch("http://localhost:5000/api/v1/addFood", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newFood),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    event.target.reset();
                }
            });


        console.log(newFood)

    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="p-10">
                <h2 className="text-3xl font-extrabold text-center pb-4">Add a Food</h2>
                <form onSubmit={handleAddFood}>
                    {/* form food name and food image row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodName" placeholder="Food Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Image Link</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodImage" placeholder="Food Image Link" className="input input-bordered w-full" />
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
                                <input type="text" name="foodQuantity" placeholder="Quantity of food" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Pick Up Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="pickupLocation" placeholder="Pickup Location" className="input input-bordered w-full" />
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
                                <input type="text" name="expireDate" placeholder="Expire date" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="additionalNotes" placeholder="Food Details" className="input input-bordered w-full" />
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
                                <input type="text" name="donatorImage" placeholder="Donator Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Donator Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="donatorName" placeholder="Donator name" className="input input-bordered w-full" />
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
                                <input type="text" name="donatorEmail" placeholder="Donator email" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Food Status</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodStatus" placeholder="Food Status" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Food" className="btn btn-block bg-red-400 text-white" />

                </form>
            </div>
        </div>
    );
};

export default AddFood;