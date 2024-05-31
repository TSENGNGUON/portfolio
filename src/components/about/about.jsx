import React from 'react'
import MyImage from './../../assets/me.jpg';
import './about.css'

function About() {
  return (
    <div className='content'>
      <img src={MyImage}/> 
      <div className='about'>
      <p className='title'>Hello <br /> I'm Seng Nguon  </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, ut porro ipsa nobis temporibus hic. Voluptatem at et adipisci? Aperiam earum quos at. Nisi aut ab maiores non impedit corporis.</p>
      </div>
    </div>
  )
}

export default About