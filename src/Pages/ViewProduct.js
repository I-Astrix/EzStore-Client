import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Animate from '../components/Animate';
import Spinner from '../components/Spinner';
import { publicRequest } from '../redux/requestMethods';



const ViewProduct = () => {

  const IMAGE_PREFIX = 'http://localhost:1337';


  const [loading, setIsloading] = useState(false);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [similar, setSimilar] = useState([]);

  const [currentProduct, setCurrentProducts] = useState([]);
  const params = useParams();

  const {name, price, description} = currentProduct;

  
   async function getById(){
    setIsloading(true)
    const request = await axios.get(`http://localhost:1337/api/products/${params.prodId}?populate=*`);

    const response = request.data
    setCurrentProducts(response.data.attributes);
    console.log(response.data.attributes.images.data);
    setImages(response.data.attributes.images.data);
    setMainImage(response.data.attributes.mainimg.data.attributes.url);
    setIsloading(false)
  }

  useEffect(() => {
      getById();
    }, []);




      useEffect(() => {
        window.scrollTo(0,0)
      }, [currentProduct]);
   

      // useEffect(() => {
  //   getData();
  // }, [currentProduct])

  // async function getData(){
  //   const response = await fetch(`http://localhost:5000/api/product/getByCategory/${category && category[0]}`);
  //   const data = await response.json();
  //   setSimilar(data);
  // }

  return (
    <>
    
    <Animate>
<div className="max-w-2xl mx-auto py-16 px-2 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

<div className="flex justify-between py-2 mb-2">
<Link to="/" className="flex gap-2 font-semibold text-indigo-600 text-sm items-center mb-5 hover:text-gray-400">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
          Continue Shopping
        </Link>

        <Link to={`/category/${''}`} className="flex gap-2 font-semibold text-indigo-600 text-sm items-center mb-5 hover:text-gray-400">
          Shop By Categories
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>
        </Link>

</div>

        <h1 className='text-3xl font-thin my-5  w-wrap sm:hidden'>{}</h1>


        {loading && <Spinner/>}

   { !loading && <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-6">



        {/* Left Container */}
        
            <div className="flex flex-col">

            <h1 className='text-2xl mb-5 font-thin w-wrap md:hidden'>{name}</h1>


                <Animate>
                <img src={mainImage} alt="" className='scale-2 h-max object-cover rounded-2xl shadow-md transition-all duration-300 ease'/>
                </Animate>
                <div className="grid grid-cols-4 gap-5 my-5">

                {images.length > 1 && images.map(image=>{
                  return (
                    <img src={image.attributes.url} key={image.attributes.url} onClick={()=> setMainImage(image.attributes.url)} alt="" className=' rounded shadow-md '/>
                  )
                })}  

                </div>
            </div>  

        {/* Right Containers */}
            <div className="">
            <h1 className='text-5xl mb-5 font-thin w-wrap '>{name}</h1>

            <div className="flex items-center gap-2">

            <div className="flex items-center my-2">

              <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              
                </div>
    <p className='font-thin text-md'>Rated {} On EzStore</p>

                </div>

            <h1 className='text-5xl font-thin my-5'>₹. {price} <span className="text-sm">*Price May vary</span></h1>

               



            


                {/* Description */}
            


            
            <div className="actions flex gap-3 items-center flex-wrap">
                <button className='bg-black py-3 px-7 flex gap-3  border   rounded-lg hover:bg-white    hover:text-black text-white active:scale-[0.98] transition-all duration-300 ease'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>{'Buy On Amazon'}
                    </button>
                <button className='bg-white py-3 flex g   ap-3 px-7 border  hover:bg-gray-700 hover:text-white    text-black  rounded-lg active:scale-[0.98] transition-all duration-300 ease'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="red" viewBox="0 0 24 24" stroke="" strokeWidth="">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                    Wishlist</button>                                
                </div>

                <div className="my-5">
                <h5 className='font-bold my-5 underline underline-offset-8 decoration-blue-500'>About This Product</h5>
                {description}
                <p className='text-xl'>{}</p>
            </div>


            </div>


    </div>}

                           
                  <div className="border my-5"></div>
    


    <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className='mb-5 text-3xl font-thin text-center'>Similar Products</h1> 
              
              <h2 className="sr-only">Products</h2>
      
              <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {/* {similar.map((product) => (
                  <BasicCard data={product} key={product._id}/>
                ))} */}
              </div>
            </div>
          </div>


    </div>


    </Animate>
    </>
  )
}

export default ViewProduct