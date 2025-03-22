import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    //  const [user, setUser] = useState('')
    const storedUserData = JSON.parse(localStorage.getItem('user'))
    // console.log(storedUserData?.name);
    
    // if (storedUserData) {
    //   console.log(userData);
    //   setUser(userData.name)
      
    // } else {
    //   console.log('User data not found in local storage')
    // }

    const handleLogOut = () =>{
        localStorage.removeItem("user");
        navigate('/login')
        
    }

  return (
    <div className='text-center mt-28'>
        <h2 className='text-2xl'>Welcom {storedUserData?.name}</h2>
        <button onClick={handleLogOut} className='bg-blue-500 text-white py-1 px-3 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Home