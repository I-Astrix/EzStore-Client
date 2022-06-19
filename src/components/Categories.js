import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import CatData from './CatData';

export default function Categories() {

  return (
 

<div className="bg-white">
  
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">


                

            <h1 className='text-3xl py-16 my-2 font-thin text-center underline underline-offset-8 decoration-blue-500'>Shop By Categories</h1> 

                       
              
              <h2 className="sr-only">Products</h2>


                <Splide aria-label="My Favorite Images" options={ {
                        rewind: true,
                        cover: true,
                        autoplay: true,
                        drag: 'free', 
                        perPage: 5,
                        gap: '2rem',
                        pagination: false,
                        arrows: false,
                        pauseOnHover: true,
                        pauseOnFocus: true,
                        autoHeight: true,
                        interval: 5000,
                        snap: true,
                        breakpoints: {
                            640: {
                                perPage: 2
                            },
                            1024:{
                              perPage: 3
                            }
                      }
                      } }>

                        {CatData.map(category=>{
                            return (
                              <SplideSlide key={category.image}>                      
                              <Link to={`/category/${category.link}`}>
                              <div className=" h-[200px] w-full aspect-w-1 aspect-h-1 bg-gray-200 shadow-md rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                  src={category.image}
                                  alt={category.name}
                                  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-all duration-300"
                                />
                              </div>
                              <h1 className='text-center mt-5 text-2xl font-thin'>{category.name}</h1>
                            </Link>
                              </SplideSlide>
                            )
                        })}
 
                  </Splide>
            </div>
            <div className="divider w-3/5 mx-auto h-[2px] shadow-xl bg-slate-200"></div>
            </div>
      
  )
}
