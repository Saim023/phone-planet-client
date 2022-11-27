import React from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import Advertised from '../Advertised/Advertised';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <CategoryCard></CategoryCard>
            <Advertised></Advertised>
            <Banner></Banner>
        </div>
    );
};

export default Home;