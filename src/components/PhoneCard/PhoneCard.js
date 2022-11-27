import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';
import bluetic from '../../assets/logo/bluetic.png';

const PhoneCard = ({ iphn, isLoading, refetch, setApple }) => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user.email);

    const { image, name, condition, description, location, originalPrice, resalePrice, used, sellersName, phone, postedTime, } = iphn;
    console.log(name)

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
                <div className=' flex items-start gap-3'>
                    <div><p>Seller Name: {sellersName}</p></div>
                    {isSeller && <><span><img src={bluetic} alt="" /></span></>}
                </div>
                <p>Location: {location}</p>
                <p>Phone: {phone}</p>
            </div>

            <label onClick={() => setApple(iphn)} htmlFor="booking" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Now</label>
        </div>
    );
};

export default PhoneCard;