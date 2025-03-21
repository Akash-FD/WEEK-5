import React from 'react'
import myData from '../data.js'
import { Link } from 'react-router-dom'

const Products = () => {
    return (

        <>
            {myData.map((item, index) => {
                return <div key={item.id}>
                    <Link to={`/products/${item.id}`}>
                    <div className='border-2 w-40 h-40 flex justify-center items-center bg-indigo-400 text-white'>
                        <h2 className=''>{item.userName}</h2>
                    </div> 
                    </Link>
                </div>
            })}
        </>

    )
}

export default Products