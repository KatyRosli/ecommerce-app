import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from './CarouselLoop.module.css';


const CarouselLoop = (props: any) => {
    
  return (
    <Carousel>
      {props.data.womenfashion.map((item: any, index: any) => 
        { return (
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={item.imageUrl}></img>
        </Carousel.Item>
          )
        }
      )}
    </Carousel>
  )
}

export default CarouselLoop;