import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';


const MyRequestsCard = ({ food, myRequests, setMyRequests }) => {

    const { _id, foodImage, foodName, donatorName, expireDate, pickupLocation, requestDateTime } = food;

    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/api/v1/user/foodRequests/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Food has been deleted.',
                                'success'
                            )

                            const remainingRequests = myRequests?.filter(food => food._id !== _id)
                            setMyRequests(remainingRequests)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="card mb-5 card-side border">
                <figure><img className="w-48" src={foodImage} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{foodName}</h2>
                    <p>Donar: {donatorName}</p>
                    <p>Pickup Location: {pickupLocation}</p>
                    <p>Expire Date: <span className="font-semibold text-red-400">{expireDate}</span></p>
                    <p>Request Date: {requestDateTime || ''}</p>
                    <div className="card-actions justify-end">
                        <Link onClick={() => handleDelete(_id)} className="btn bg-red-400 text-white">Remove</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRequestsCard;


MyRequestsCard.propTypes = {
    food: PropTypes.object,
    myRequests: PropTypes.array,
    setMyRequests: PropTypes.func
}