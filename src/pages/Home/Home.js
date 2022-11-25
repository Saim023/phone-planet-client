import React from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <CategoryCard></CategoryCard>
            <Banner></Banner>
        </div>
    );
};

export default Home;