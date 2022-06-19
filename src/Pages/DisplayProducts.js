import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Animate from '../components/Animate';
import Card from '../components/Card';
// import Spinner from '../components/Spinner';
// import { publicRequest } from '../requestMethods';
import {Link} from 'react-router-dom';
// import Categories from '../components/Categories';

export default function ProductPage() {

  const params = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setIsloading] = useState(false);
  const [filter, setFilter] = useState({
    gender: 'male',
    cat: params.cat
    
  });
  

//   console.log(params.cat);

//   // const response = await publicRequest.get(`product/getByCategory/${filter.cat}`)

//   // Custom Url
//   // http://localhost:5000/api/product/custom?cat=shoes&gender=female

//   async function getData(){
//     setIsloading(true)
//     const response = await publicRequest.get(`product/custom?cat=${filter.cat}&gender=${filter.gender}`)
//     setProducts(response.data);
//     setIsloading(false)
//   } 
//   useEffect(()=>{
//       getData()
//   }, [filter])


function handleChange(e){
  const {name, value, checked, type} = e.target;

  setFilter(prev=>{
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }
  })
}

  return (
    <Animate>

    

    <div className="bg-white">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">


    



    <Link to="/" className="flex gap-2 font-semibold text-indigo-600 text-sm items-center mb-5 hover:text-gray-400">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
          Continue Shopping
        </Link>



        {/* Filter */}

    <div className="flex p-4 border gap-5 flex-wrap mb-5">

    <div className=" w-full ">
<label htmlFor="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose a Category</label>
<select onChange={handleChange} name='cat' value={filter.cat} id="countries" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2  w-full">
<option selected="">Choose a Category</option>
  {/* {Categories.map(item=>{
    return (
        <option value={item.link}>{item.name}</option>  
    )
  })} */}
</select> 
</div>

    <div class="flex items-center">
    <input onChange={handleChange} type="radio" value="male" checked={filter.gender === 'male'} name="gender" class="w-4 h-4 text-blue-600 bg-gray-100 focus:outline-none border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" class="ml-2 text-sm text-gray-900 ">Men</label>
</div>  

<div class="flex items-center">
    <input onChange={handleChange} type="radio" value="female" checked={filter.gender === 'female'}  name="gender" class="w-4 h-4 text-blue-600 bg-gray-100 focus:outline-none  border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" class="ml-2 text-sm text-gray-900 ">Women</label>
</div>






    {/* <div className="flex item-center">
    <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 ">Women</label>
    </div>   */}

    <button className='bg-blue-500 p-2 text-white' onClick={()=>{console.log(filter)}}>Set Filter</button>

    </div>

    <div className="flex justify-between my-5">
      <div className="">
    <h1 className=' text-3xl font-thin text-center capitalize'>{filter.cat}</h1> 
    <span>{products.length} Products</span>
    </div>
    <h1 className='mb-5 text-3xl font-thin text-center capitalize'>{filter.gender}</h1> 
    </div>

    {/* {loading && <Spinner/>}  */}
    <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
      
      <h2 className="sr-only">Products</h2>
      {/* <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map(product=>{
            return(
       <AnimatedPage>
             <BasicCard data={product} key={product._id}/>
        </AnimatedPage>)
          })}

      </div> */}
    </div>
  </div>
  </Animate>
  )
}
