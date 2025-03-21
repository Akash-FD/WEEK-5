import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import Login from './Components/Login'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={ <Home />}></Route>
    
    </Routes>
    </BrowserRouter>
      
    
    </>
  )
}

export default App
