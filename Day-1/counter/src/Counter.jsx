
import { useState } from 'react'


function Counter() {

  const [counter, setCounter] = useState(0)

  const increment = ()=>{
    setCounter(counter + 1)
  }

  const decrement = ()=>{
    setCounter(counter - 1)
  }
 
  return (
    <div style={{textAlign:"center"}}>
    <button onClick={increment}>+</button>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>    
    </div>
  )
}

export default Counter
