import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data, id}) => {
  const IMAGE_PREFIX = 'http://localhost:1337';
  const {name, price, mainimg} = data;

  const {small} = mainimg.data.attributes.formats;
  


  return (
    <div id='cardd' className="relative group hover:scale-95 hover:border px-2 transition-all ease duration-300">
    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
      <Link to={`/product/${id}`}>
      <img
        loading='lazy'
        src={small.url}
        alt={"Product Image"}
        className="w-full h-full object-center object-cover group-hover:scale-95 transition-all duration-300"
      />  
      </Link>
    </div>
    <h3 className="mt-4 text-sm text-gray-700 ">{name}</h3>
    <p className="mt-1 text-lg font-medium text-gray-900">₹. {price}</p>

  <button className={`flex items-center justify-center gap-2  border px-1 py-1 my-2 bg-white rounded w-full transition-all duration-300 ease hover:bg-blue-500 hover:text-white`}> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>Add To Bag</button>  
    
  </div>
  )
}

export default Card