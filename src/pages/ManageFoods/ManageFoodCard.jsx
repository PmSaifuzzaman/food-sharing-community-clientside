import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';


const ManageFoodCard = ({ food, manageFoods, setManageFoods }) => {
    const { _id, foodImage, foodName, foodQuantity, expireDate, pickupLocation } = food;

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

                fetch(`http://localhost:5000/api/v1/availableAllfoods/${_id}`, {
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

                            const remainingFood = manageFoods?.filter(food => food._id !== _id)
                            setManageFoods(remainingFood)

                        }
                    })
            }
        })
    }

    return (
        <div >

            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={foodImage} alt="Food" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{foodName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {foodQuantity}
                            </td>
                            <td>{pickupLocation}</td>
                            <td>{expireDate}</td>
                            <th>
                                <Link to={`/updateFood/${_id}`} className="btn btn-outline border-sky-400 text-sky-400 btn-sm">Update</Link>
                            </th>
                            <th>
                                <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-red-400 text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
                            </th>
                            <th>
                                <button className="btn btn-outline border-sky-400 text-sky-400 btn-sm">Manage</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageFoodCard;


ManageFoodCard.propTypes = {
    food: PropTypes.object,
    manageFoods: PropTypes.array,
    setManageFoods: PropTypes.func
}