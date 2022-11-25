import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OneplusCard from '../../components/OnePlusCard/OneplusCard';

const Oneplus = () => {

    const oneplus = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-16 mr-8 ml-8'>
            {
                oneplus.length && oneplus.map(one => <OneplusCard
                    key={one._id}
                    one={one}
                ></OneplusCard>)
            }
        </div>
    );
};

export default Oneplus;