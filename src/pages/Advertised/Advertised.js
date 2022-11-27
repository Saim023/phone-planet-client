import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertised = () => {


    const { data: advertisedItems = [], refetch, isLoading } = useQuery({
        queryKey: ['advertisedItems'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertised')
            const data = await res.json()
            return data
        }

    });

    console.log(advertisedItems)

    return (
        <div className=' pl-10 pr-10 mt-12 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                advertisedItems.length && advertisedItems.map(addItem => <section
                    key={addItem._id}
                >

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                {addItem.product}
                                <div className="badge badge-secondary">ON SALE !</div>
                            </h2>
                            <p>Condition: {addItem.condition}</p>
                            <p>Purchase Year: {addItem.purchaseDate}</p>
                            <p>Location: {addItem.location}</p>
                            <p className='text-green-500'>Price: {addItem.price}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline text-primary">{addItem.category}</div>
                            </div>
                        </div>
                    </div>
                </section>)
            }
        </div>
    );
};

export default Advertised;