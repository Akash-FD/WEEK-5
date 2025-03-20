import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>

      <div className='flex gap-5 bg-slate-500 justify-center items-center text-slate-100 text-xl py-2'>
        <NavLink style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
          to="/aboutus/aboutcompany">Comoany</NavLink>

        <NavLink style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })} to="/aboutus/abouttecnology">Tecnology</NavLink>
        
        <NavLink style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })} to="/aboutus/aboutwork">Work</NavLink>

      </div>
      <Outlet />
    </>

  )
}

export default AboutUs