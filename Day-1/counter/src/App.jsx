import React from 'react'
import Counter from './Counter'
import useFetch from './components/useFetch'

const App = () => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
        <Counter/>
        {   
                 data.map((item, index)=>{
                return <p key={index}>{item.name} </p>
            })
        }
    </div>
  )
}

export default App