import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/nav-logo.svg'
import logo from '../Assets/logo.png'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className='nav-logo' alt="" />
      <p>SWIFTCART ADMIN</p>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
