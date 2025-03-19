import React, { useState } from 'react'
import MyName from './MyName'

const PureComponentwithFunction = () => {

    const [counter, setCounter] = useState(0)

    const increment = ()=>{
        setCounter(counter+1)
        console.log('hii');       
    }

  return (
    <div>
        <h2>{counter}</h2>
        <MyName username={[1,2,3,4]}/>
        <button onClick={increment}>Counter</button>
    </div>
  )
}



export default PureComponentwithFunction