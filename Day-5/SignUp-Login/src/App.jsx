import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<ProtectedRoute> <Home /> </ProtectedRoute> }></Route>
    
    </Routes>
    </BrowserRouter>
      
    
    </>
  )
}

export default App
