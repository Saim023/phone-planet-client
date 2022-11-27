import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

const MyProducts = () => {
    const navigate = useNavigate();

    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller')
            const data = await res.json()
            return data
        }

    });

    const handleDeleteProduct = (my) => {
        // console.log(my)

        fetch(`http://localhost:5000/users/seller/${my._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${my.product} deleted successfully!`)
                    console.log(my.product)
                }
            })
    };

    const handleAdvertise = (my) => {


        fetch(`http://localhost:5000/users/seller/advertised`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(my)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product Advertised Successfully!')
                    navigate('/')
                }
                else {
                    toast.error("Product advertising failed")
                }
            })

    }

    return (
        <div className='mt-8'>
            <h3 className='text-xl text-primary font-bold mb-8 text-center'>MY PRODUCTS</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Category</th>
                            <th>Product</th>
                            <th>Condition</th>
                            <th>Purchase Year</th>
                            <th>Price</th>
                            <th>Availability</th>
                            <th>Advertisement</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts && myProducts.map((my, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{my.category}</td>
                                    <td>{my.product}</td>
                                    <td>{my.condition}</td>
                                    <td>{my.purchaseDate}</td>
                                    <td className='text-red-600'>${my.price}</td>
                                    <td>
                                        <button className="btn btn-outline btn-xs text-green-600 btn-disabled">Available</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleAdvertise(my)} className="btn btn-outline btn-xs btn-primary">Advertise</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteProduct(my)} className="btn btn-outline btn-xs btn-accent">Delete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;