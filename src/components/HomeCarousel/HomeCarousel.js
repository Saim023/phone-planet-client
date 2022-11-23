import React from 'react';
import iphone2 from '../../assets/images/iphone-2.jpg';
import iphone3 from '../../assets/images/iphone-3.jpg';
import iphone4 from '../../assets/images/iphone-4.jpg';
import iphone1 from '../../assets/images/iphone-1.jpg';

const HomeCarousel = () => {
    return (
        <div>
            <div className="carousel w-full h-[660px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={iphone2} className="w-full" alt='phone-img' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={iphone3} className="w-full" alt='phone-img' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={iphone4} className="w-full" alt='phone-img' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={iphone1} className="w-full" alt='phone-img' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;