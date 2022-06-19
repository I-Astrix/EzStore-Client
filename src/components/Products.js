import React, { useEffect, useState } from 'react';
import { publicRequest } from '../redux/requestMethods';
import Card from './Card';
import Spinner from './Spinner';
import Widthlimiter from './Widthlimiter';


const Products = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHomeProducts = async()=>{
    setLoading(true);
    try{
        const request = await publicRequest.get('/api/products?populate=*');
        const response = await request.data;
        setProducts(response.data);
        setLoading(false);
    }
    catch{
        console.log('Error')
    }
    
}

  useEffect(()=>{
    fetchHomeProducts()
  }, []);


  return (
      <>
      <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <h1 className='text-center py-5 my-2 text-4xl font-thin underline underline-offset-8 decoration-blue-500'>Products</h1>
    
      {loading && <Spinner/>}

    <Widthlimiter>

      
    {Products && Products.map(product=>{
        return <Card key={product.id} data={product.attributes} id={product.id}/>
      })}
    
    </Widthlimiter>
    </div>
    </>
  )
}

export default Products