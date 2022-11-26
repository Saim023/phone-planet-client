import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const OneplusCard = ({ one, setOnep }) => {

    const { image, name, condition, description, location, originalPrice, resalePrice, used, sellersName, phone, postedTime } = one;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className=' h-80' src={image} alt="smartphone" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 50)}</p>
                <p>Condition: {condition}</p>
                <p>Used: {used}</p>
                <p>Posted: {postedTime}</p>
                <p>Original Price: <span className='text-red-600'>${originalPrice}</span></p>
                <p>Resale Price: <span className=' text-red-600'>${resalePrice}</span></p>
                <p>Seller Name: {sellersName}</p>
                <p>Location: {location}</p>
                <p>Phone: {phone}</p>
            </div>
            <label onClick={() => setOnep(one)} htmlFor="booking" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Now</label>
        </div>
    );
};

export default OneplusCard;