import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinkStyles = ({isActive}) => {
    return{
        color: isActive?"red":"black",
        textDecoration : isActive?"underline":null
    }
}

const NavBar = () => {
  return (
    <nav className='flex justify-around items-center py-4'> 
        <div className="left">
            <img src="/logos/Logo.png"  className='w-[150px] md:w-[200px] lg:w-[250px]'/>
        </div>
        <div className="right flex justify-around items-center text-base md:text-xl font-medium gap-2 md:gap-5">
            <NavLink  style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink  style={navLinkStyles} to='/donation'>Donation</NavLink>
            <NavLink  style={navLinkStyles} to='/statistics'>Statistics</NavLink>
        </div>
        
    </nav>
  )
}

export default NavBar