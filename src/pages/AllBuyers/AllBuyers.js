import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {

    const { data: buyers = [], refetch, } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/admin/allBuyers')
            const data = await res.json()
            return data;
        }
    })

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
                        buyers.length && buyers.map((buyer, index) => <tr
                            key={index}
                        >
                            <th>{index + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td>{buyer.role}</td>
                            <td>
                                <button className="btn btn-outline btn-accent btn-xs">Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;