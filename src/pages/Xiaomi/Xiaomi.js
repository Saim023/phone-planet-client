import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import XiaomiCard from '../../components/XiaomiCard/XiaomiCard';
import XiaomiModal from '../../components/XiaomiModal/XiaomiModal';

const Xiaomi = () => {

    const [xiao, setXiao] = useState(null);

    const { data: xiaomi = [], refetch, isLoading } = useQuery({
        queryKey: ['iphone'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/xiaomi')
            const data = await res.json()
            return data
        }

    });

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-16 mr-8 ml-8'>
                {
                    xiaomi.length && xiaomi.map(mi => <XiaomiCard
                        key={mi._id}
                        mi={mi}
                        refetch={refetch}
                        isLoading={isLoading}
                        setXiao={setXiao}
                    ></XiaomiCard>)
                }
            </div>
            {
                xiao &&
                <XiaomiModal
                    xiao={xiao}
                    setXiao={setXiao}
                ></XiaomiModal>
            }
        </section>
    );
};

export default Xiaomi;