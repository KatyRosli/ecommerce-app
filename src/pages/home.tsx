import React from 'react';
import { getWomenFashion } from '../api/women-fashion';
import Carouselloop from '../components/CarouselLoop';
import OtherCategories from '../components/OtherCategories';
import { getCategoriesNav } from '../api/categories-nav';

const Home = (props:any) => {

    return (<div>
        <Carouselloop data={getWomenFashion()}/>
        <h3 style={{margin: '40px 0 20px 0', color: '#FBF8F1', fontFamily: "'Fjalla One', sans-serif"}}> Our Other Lines: </h3>
        <OtherCategories data={getCategoriesNav()} />
        </div>)
}

export default Home;