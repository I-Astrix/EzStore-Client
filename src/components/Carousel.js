import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

export default function Carousel() {
  return (
    <div className="max-w-7xl mx-auto">
    <Splide aria-label="My Favorite Images" options={ {
        rewind: true,
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        height: 300,
        cover: true,
        interval: 5000,
        breakpoints: {
          640: {  
            height: 180,
              snap: true  
          },
        
    }
        
      } }>
    <SplideSlide className='relative'>
        <Link to={`/category/${'tshirt'}`}>
      <img  className='object-cover w-full h-full' src="https://res.cloudinary.com/dse8haobk/image/upload/v1652449430/you_xnz9b3.png" alt="Carousel-1"/>
    </Link>
    </SplideSlide>
    
    <SplideSlide>
      <img src="https://res.cloudinary.com/dse8haobk/image/upload/v1652446965/Cropped_h8yw76.png" alt="Carousel-2"/>
    </SplideSlide>
  </Splide>
  </div>
  )
}
