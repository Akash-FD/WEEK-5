import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutCompany = () => {

   const nav = useNavigate()
    const handleNavigate = ()=>{
        nav('/')

    }
    return (

        <div className='text-center'>
            <img src="https://st.depositphotos.com/1038076/4908/i/450/depositphotos_49080337-stock-photo-about-us.jpg" alt="" />
            <button onClick={handleNavigate} className='bg-yellow-500 py-2 text-xl px-4 my-2 rounded-md'>Navigate to home page</button>
        </div>

    )
}

export default AboutCompany