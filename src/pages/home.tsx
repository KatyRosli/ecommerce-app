import React from 'react';
import { getWomenFashion } from '../api/women-fashion';
import Carouselloop from '../components/CarouselLoop';


const Home = (props:any) => {

    return <Carouselloop data={getWomenFashion()}/> 
}

export default Home;