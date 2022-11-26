import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import OneplusCard from '../../components/OnePlusCard/OneplusCard';
import OnePlusModal from '../../components/OnePlusModal/OnePlusModal';

const Oneplus = () => {

    const [onep, setOnep] = useState(null);

    const { data: oneplus = [], refetch, isLoading } = useQuery({
        queryKey: ['oneplus'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/oneplus')
            const data = await res.json()
            return data
        }

    });

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-16 mr-8 ml-8'>
                {
                    oneplus.length && oneplus.map(one => <OneplusCard
                        key={one._id}
                        one={one}
                        refetch={refetch}
                        isLoading={isLoading}
                        setOnep={setOnep}
                    ></OneplusCard>)
                }
            </div>
            {
                onep &&
                <OnePlusModal
                    onep={onep}
                    setOnep={setOnep}
                ></OnePlusModal>
            }
        </section>
    );
};

export default Oneplus;