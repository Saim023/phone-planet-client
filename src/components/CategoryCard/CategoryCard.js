import React from 'react';
import apple from '../../assets/brands/apple.png';
import one from '../../assets/brands/one.png';
import mi from '../../assets/brands/mi.png';
import { Link } from 'react-router-dom';

const CategoryCard = () => {
    return (
        <div>
            <h1 className=' text-5xl font-bold text-center text-orange-500 mt-16 mb-16'>Pick Your Brand!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className='w-72' src={one} alt="Shoes" /></figure>
                    <div className="card-body">
                        <Link to='/oneplus' className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Select</Link>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className=' w-60' src={apple} alt="Shoes" /></figure>
                    <div className="card-body">
                        <Link to='/iphone' className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Select</Link>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className='w-72' src={mi} alt="Shoes" /></figure>
                    <div className="card-body">
                        <Link to='/xiaomi' className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Select</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;