import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './menubar.css'
function Menubar() {
  return (
    <div className='menubar'>
      <div className='logo'>
        <span className='front'>A</span>
        <span className='back'></span>
      </div>
      
      
      <ul className='menu_list'>
        <Link style={{textDecoration:"none"}} to={"/"}><li>Home</li></Link>
        <Link style={{textDecoration:"none"}}  to={"/about"}><li>About</li></Link>
        <Link style={{textDecoration:"none"}}  to={"/contact"}><li id='contact'>Contact us</li></Link>
        <Link style={{textDecoration:"none"}}  to={"/team"}><li>Team</li></Link>
      </ul>
    </div>
  )
}

export default Menubar;