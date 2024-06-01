import React from 'react'
import MyImage from './../../assets/myPic.jpg';
import './about.css'
import Avatar from '../avatar/avatar';
import Footer from '../footer/Footer';

function About() {
  return (
    <>
    <div className='content'>
      {/* <img src={MyImage}/>  */}
      <Avatar />
      <div className='about'>
      <p className='title'>Hello <br /> I'm Seng Nguon  </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, ut porro ipsa nobis temporibus hic. Voluptatem at et adipisci? Aperiam earum quos at. Nisi aut ab maiores non impedit corporis.</p>
      </div>
      {/* <Footer /> */}
    </div>
    <Footer />
    </>
  )
}

export default About