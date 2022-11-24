import React from 'react';
import Banner from '../../components/Banner/Banner';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Banner></Banner>
        </div>
    );
};

export default Home;