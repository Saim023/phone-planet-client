import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../components/BookingModal/BookingModal';
import PhoneCard from '../../components/PhoneCard/PhoneCard';

const Iphone = () => {
    const [apple, setApple] = useState(null);

    const { data: iphone = [], refetch, isLoading } = useQuery({
        queryKey: ['iphone'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/iphone')
            const data = await res.json()
            return data
        }

    });

    // const iphone = useLoaderData();
    console.log(iphone)

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-16 mr-8 ml-8'>
                {
                    iphone.length && iphone.map(iphn => <PhoneCard
                        key={iphn._id}
                        iphn={iphn}
                        refetch={refetch}
                        isLoading={isLoading}
                        setApple={setApple}
                    ></PhoneCard>)
                }
            </div>
            {
                apple &&
                <BookingModal
                    apple={apple}
                    setApple={setApple}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default Iphone;