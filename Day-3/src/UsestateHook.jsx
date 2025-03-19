import React, { useContext } from 'react'
import { useState } from 'react'
import { myContext } from './App'


const UsestateHook = () => {

  const myname = useContext(myContext)
  console.log(myname)
  
const [car, setCar] = useState({
  brand: "Ford",
  model: "Mustang",
  year: "1964",
  color: "red"
});

const updateColor = () => {
  setCar(pre => { return {...pre, color:'blue'}});
}
  return (
    <>
    <h1>{myname}</h1>
    <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

export default UsestateHook