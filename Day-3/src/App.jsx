import { createContext, useState } from 'react'
import './App.css'
import PureComponentwithFunction from './PureComponentwithFunction'
// import PureComponentwithClass from './PureComponentwithClass'
// import UseRefHook from './UseRefHook'
// import UseEffectHook from './UseEffectHook'
// import UsestateHook from './UsestateHook' 

export const myContext = createContext()

function App() {

  const [name, setName] =useState('Akash')


  return (
    <>
    {/* <myContext.Provider value={name}>

    <UsestateHook/>
    <UseEffectHook/>

    </myContext.Provider> */}
    {/* <UseRefHook/> */}
    {/* <PureComponentwithClass/> */}
    <PureComponentwithFunction/>
    </>
  )
}

export default App
