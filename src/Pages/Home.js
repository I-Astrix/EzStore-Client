// Packages
import React, { useEffect, useState } from 'react';

// Components
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Widthlimiter from '../components/Widthlimiter';
import { publicRequest } from "../redux/requestMethods";


 

const Home = () => {

  

  return (
    <>
    <Carousel/>
    <Categories/>
    <Products/>
    <Featured/>
    <Newsletter/>   
    </>
  )
}

export default Home