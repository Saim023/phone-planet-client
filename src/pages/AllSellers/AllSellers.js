import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const { data: sellers = [], refetch, } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/admin/allSellers')
            const data = await res.json()
            return data;
        }
    })

    const handleDeleteSeller = (seller) => {
        fetch(`http://localhost:5000/admin/all-buyers/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${seller.email} deleted successfully!`)
                }
            })
    }

    return (
        <div className="overflow-x-auto mt-6">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.length && sellers.map((seller, index) => <tr
                            key={index}
                        >
                            <th>{index + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td>{seller.role}</td>
                            <td>
                                <button onClick={() => handleDeleteSeller(seller)} className="btn btn-outline btn-accent btn-xs">Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;