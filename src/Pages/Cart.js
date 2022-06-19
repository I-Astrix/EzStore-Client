import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// import CartItem from '../components/CartItem';
import Animate from '../components/Animate';

const Cart = () => {
    

  return (
    <Animate>
    <div className="bg-white">
       <div className="container mx-auto mt-10 ">
    <div className="flex shadow-md my-10 flex-col lg:flex-row">
      <div className=" lg:w-3/4 bg-white px-5 py-10">
        <div className="flex justify-between border-b pb-6 items">
        <Link to="/" className="flex font-semibold text-indigo-600 text-sm items-center">
        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </Link>
          <h1 className="text-2xl font-thin">Cart</h1>
          <h2 className="text-xl">{} Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/12 ">Action</h3>
        </div>

        
         
        
       
      </div>

      <div id="summary" className=" lg:w-1/4 px-8 py-10">
        <h1 className="text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Total</span>
          <span className="font-semibold text-sm">₹. {}</span>
        </div>

        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Delivery Charge</span>
          <span className="font-semibold text-sm">₹. {}</span>
        </div>

      
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Amount to be Paid</span>
            <span></span>
          </div>
          <button className="bg-indigo-500 font-semibold rounded-md shadow hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
  </div>
  </Animate>
  )
}

export default Cart