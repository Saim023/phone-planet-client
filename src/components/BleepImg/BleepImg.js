import React from 'react';
import './BleepImg.css';
import sam1 from '../../assets/images/sam-1.png'
import sam2 from '../../assets/images/sam-2.png'
import sam3 from '../../assets/images/sam-3.png'

const BleepImg = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='bleep-container'>
                <img src={sam2} alt="" />
            </div>
            <div className='bleep-container'>
                <img src={sam3} alt="" />
            </div>
            <div className='bleep-container'>
                <img src={sam1} alt="" />
            </div>
        </div>
    );
};

export default BleepImg;