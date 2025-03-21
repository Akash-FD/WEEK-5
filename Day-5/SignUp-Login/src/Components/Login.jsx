import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
      const userData = async()=>{
        const {data} = await axios.get('http://localhost:8000/students')
        setUser(data)
        console.log(data);
        
      }
      userData()
    }, [])
    
  const handleLogin = (e)=>{
    e.preventDefault()
    const findUser = user.find((e)=> e.email === email && e.password === password)
    if(findUser){
        alert('Login successfully')
        navigate('/home')
    }else{
        alert('please Register first!!')
        navigate('/')

    }

  }

    

    return (
        <form action=""  onSubmit={handleLogin} className='flex flex-col w-96 gap-5 m-auto mt-10 border shadow-md p-10'>
            <input type="email" name="" id="" placeholder='Enter your email' className='border px-2 py-1' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" name="" id="" placeholder='Enter your password' className='border px-2 py-1' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='bg-yellow-500 py-2 px-4'>Login</button>
        </form>
    )
}

export default Login