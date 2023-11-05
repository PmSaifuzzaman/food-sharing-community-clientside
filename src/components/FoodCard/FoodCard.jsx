import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
    const {_id, foodImage, foodName, donatorImage, donatorName, foodQuantity, expireDate } = food;


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-40 w-full object-cover' src={foodImage} alt="Food" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {foodName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className='flex justify-between items-center'>
                    <img className='w-10 rounded-full' src={donatorImage} alt="" />
                    <h2>{donatorName}</h2>
                </div>
                <p><span className='font-bold'>{foodQuantity}</span> Person can eat</p>
                <p>Expire On: <span className='font-medium text-red-400'>{expireDate}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/detailsFood/${_id}`} className='btn btn-outline rounded-full border-red-400 text-red-400'>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;

FoodCard.propTypes = {
    food: PropTypes.object,
}