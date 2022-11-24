import React from 'react';
import banner from '../../assets/images/banner.jpg'
import BleepImg from '../BleepImg/BleepImg';

const Banner = () => {
    return (
        <div className="mt-16 hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-[700px]">
                    <h1 className="mb-16 text-5xl font-bold text-orange-600">Grab The Best One Now!</h1>
                    <BleepImg></BleepImg>
                </div>
            </div>
        </div>
    );
};

export default Banner;