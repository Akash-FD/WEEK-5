import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const fechData = async() =>{
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(data)
        }
        fechData()
    
    }, [])
    
  return (
    <div>
        {
            data.map((item,index)=>{
              return  <h1 key={index}>{item.name}</h1>
            })
        }
    </div>
  )
}

export default UseEffectHook