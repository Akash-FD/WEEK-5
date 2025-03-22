import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpasswaord, setCpassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e)=>{

        e.preventDefault()
        if(!name || !email || !password || !cpasswaord){
            alert('all filds are mendetory')
            return false;
        }   

        if(password !== cpasswaord){
          alert('password and Confirm password must same')
          return false;
        }

        if(name.length <3){
            alert('name must be more than three character')
            return false;
        }

        const jsonData = {name, email, password}
        console.log(jsonData);

        axios.post('http://localhost:8000/students', jsonData).then((res)=>console.log(res.status))
        setName('')
        setEmail('')
        setPassword('') 
        setCpassword('')
        navigate('/login')

    }
    

  return (

    <form action="" onSubmit={handleSubmit} className='flex flex-col w-96 gap-5 m-auto mt-10 border shadow-md p-10 '>
        <input type="text" name="" id="" placeholder='Enter your name' className='border px-2 py-1' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" name="" id="" placeholder='Enter your email' className='border px-2 py-1' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" name="" id="" placeholder='Enter your password' className='border px-2 py-1' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="text" name="" id="" placeholder='Confirm password' className='border px-2 py-1' value={cpasswaord} onChange={(e)=>setCpassword(e.target.value)}/>
        <button className='bg-yellow-500 py-2 px-4'>SignUp</button>
    </form>
    
  )
}

export default SignUp