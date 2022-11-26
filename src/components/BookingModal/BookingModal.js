import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from '../Spinner/Spinner';

const BookingModal = ({ apple, setApple, refetch, isLoading }) => {
    const { name, phone, location, resalePrice } = apple;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const item = form.item.value;

        const booking = {
            name,
            email,
            item,
            resalePrice,
            location,
            phone,
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setApple(null);
                    toast.success('Booking Confirmed!')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })

        if (isLoading) {
            return <Spinner></Spinner>
        }

    }

    return (
        <div>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-8">Confirm Your Booking by Submitting</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Enter Your Name" className="input input-bordered input-secondary w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Enter Your Email" className="input input-bordered input-secondary w-full" />
                        <input name='item' type="text" value={`Item Name: ${name}`} disabled placeholder="" className="input input-bordered input-secondary w-full" />
                        <h3 className='text-red-600'>Price:  ${resalePrice}</h3>
                        <h3 className='text-lg text-success'>Contact Information:</h3>
                        <p>Meeting Location: {location}</p>
                        <p>Seller Mobile: {phone}</p>
                        <input type="submit" placeholder="Type here" className="btn btn-accent w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;