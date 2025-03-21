import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Products from './Component/Products'
import Navbar from './Component/Navbar'
import ProductDetail from './Component/ProductDetail'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/products/:productId' element={<ProductDetail/>}></Route>


    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
