import React from 'react';
import { useLoaderData } from 'react-router-dom';
import XiaomiCard from '../../components/XiaomiCard/XiaomiCard';

const Xiaomi = () => {

    const xiaomi = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-16 mr-8 ml-8'>
            {
                xiaomi.length && xiaomi.map(mi => <XiaomiCard
                    key={mi._id}
                    mi={mi}
                ></XiaomiCard>)
            }
        </div>
    );
};

export default Xiaomi;