import React from 'react'
import './home.css'
import Button from '../button/button'
import Avatar from '../avatar/avatar'
import Social from '../social/social'
import Partbox from '../partbox/partbox'
function Home() {
  return (
   <div>
    <section className='information'>
        <div className='info_personal'>
            <p className='name'>Hello,</p>
            <p>I'm Nguon</p>
            <div className='skills'>
                <span>Web Developer ,</span>
                <span>React Js Developer</span>
            </div>
            <div className='section_btn'>
            
            <Button btn={"Hire me"} />
            <Button btn={"Download CV"} width={{width:278,textAlign:"center",marginLeft:20}} />
            </div>
           
        </div>
        <div className='avatar-home'>
            <div className='avatar'>
            <Avatar />
            </div>
        </div>
        <div className='social'>
        <Social />
        </div>
    </section>
    <Partbox /> 
   </div>
  )
}

export default Home