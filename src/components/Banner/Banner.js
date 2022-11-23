import React from 'react';
import banner from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="mt-16 hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-emerald-300">Choose Your Best Smartphone Here!</h1>
                    <p className="mb-5 text-emerald-100">Grab the best one now!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;