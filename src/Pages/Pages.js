import React from 'react';
import {
    BrowserRouter as Router,
    Routes,Route,
  } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from './Home';
import DisplayProducts from './DisplayProducts';
import ViewProduct from './ViewProduct';
import Cart from './Cart';
import Footer from '../components/Footer';
import SingleItem from '../components/SingleItem';

const Pages = () => {
  return (

<Router>

        <Navbar/>

    <Routes>

        <Route exact path="/" element={<Home/>}/>        
        <Route exact path="/products" element={<DisplayProducts/>}/>        
        <Route exact path="/cart" element={<Cart/>}/>        
        <Route exact path="/product/:prodId" element={<ViewProduct/>}/>        
        <Route exact path="single" element={<SingleItem/>}/>        
        
      </Routes>
      
      <Footer/>
    

</Router>



  )
}

export default Pages