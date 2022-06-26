import React from 'react';
import { getWomenFashion } from '../../api/women-fashion';
import Carouselloop from '../../components/CarouselLoop/CarouselLoop';
import OtherCategories from '../../components/OtherCategories/OtherCategories';
import { getCategoriesNav } from '../../api/categories-nav';
import './home.css';

const Home = (props:any) => {

    return (<div>
        <Carouselloop data={getWomenFashion()}/>
        <div className="page-header"> Our Other Lines: </div>
        <OtherCategories data={getCategoriesNav()} />
        </div>)
}

export default Home;