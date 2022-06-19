import React from 'react'
import Card from './Card'

const FeaturedProd = () => {
  return (
    <>
    <h1 className='py-5 text-2xl font-thin text-center'>Featured</h1>
    <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </>
  )
}

export default FeaturedProd