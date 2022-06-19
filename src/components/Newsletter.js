import React from 'react'

const Newsletter = () => {
  return (
  <div className="max-w-2xl selection:text-yellow-500 bg-gradient-to-r from-sky-500 to-indigo-500 text-white my-10 flex justify-center items-center mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8 sm:rounded-2xl">
    <div className="max-w-2xl w-full text-center">
         <div className="my-4">
            <h1 className='text-4xl font-thin'>Subscribe To Our Newsletter</h1>
          </div>
         <div className="my-2 text-center">
            <p className='text-lg '>Subscribe to our newsletter for latest updated on Deals & Offers..</p>
          </div>
         <div className="max-w-2xl w-full mt-5">
              <div className="flex  justify-between">
                <input placeholder='Email' type="text" className='py-3 px-5 w-full text-gray-500 outline-none border'/>
                <button className='bg-yellow-500 text-lg  px-5 sm:px-10 text-white'>Subscribe</button>
              </div>
          </div>
          </div>
  </div>

  )
}

export default Newsletter