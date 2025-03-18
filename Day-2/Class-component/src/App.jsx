import React, { Component } from 'react'
import Car, { Garage } from './Car'
import Mounting from './Mounting'

export class App extends Component {
  
  render() {
    return (
      <div>

     {/* <Car model='BMW'/>
     <Garage/> */}
     <Mounting myColor='white'/>
      </div>
   
    )
  }
}

export default App