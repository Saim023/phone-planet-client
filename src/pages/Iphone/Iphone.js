import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from '../../components/PhoneCard/PhoneCard';

const Iphone = () => {

    const iphone = useLoaderData();
    console.log(iphone)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-16 mr-8 ml-8'>
            {
                iphone.length && iphone.map(iphn => <PhoneCard
                    key={iphn._id}
                    iphn={iphn}
                ></PhoneCard>)
            }
        </div>
    );
};

export default Iphone;