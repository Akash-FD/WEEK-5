import React from 'react'
import { useParams } from 'react-router-dom'
import myData from '../data'

const ProductDetail = () => {

    const {productId} = useParams()

    const findId = myData.find((e)=>e.id === Number(productId))
    console.log(findId);
    
  return (
    <div className='w-40 h-40 border-2 flex justify-center items-center m-auto mt-32 bg-indigo-400 text-white '>
    {findId.userName}
    </div>
  )
}

export default ProductDetail