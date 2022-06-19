import React from 'react'

const Featured = () => {
  return (
    <section className="text-gray-600 body-font lg:max-w-7xl max-w-2xl mx-auto bg-gradient-to-r from-gray-100 to-gray-200 sm:rounded-2xl">
  <div className="container mx-auto flex px-4 py-8 sm:py-4 md:flex-row flex-col items-center gap-4">

    <div className="lg:flex-grow md:w-1/2 lg:pl-10 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
      <h1 className="sm:text-6xl font-extrabold text-3xl mb-8 text-gray-900">Grab them before its gone
      </h1>
      <p className="mb-4 leading-relaxed text-3xl font-bold">5% off All Shirts</p>
      <div className="flex justify-center gap-2">
        <button className="inline-flex border py-2  px-8 focus:outline-none hover:bg-gray-300 rounded text-lg">Shop Now</button>
        <button className="inline-flex border py-2  px-8 focus:outline-none bg-gray-800 text-white hover:bg-gray-300 rounded text-lg">Learn More</button>
        </div>
    </div>

    <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded-2xl " alt="hero" src="https://source.unsplash.com/v8XaVfyo41Q"/>
    </div>
  </div>
</section>
  )
}

export default Featured