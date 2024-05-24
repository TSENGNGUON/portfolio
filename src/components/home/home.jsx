import React from 'react'
import './home.css'
import Avatar from '../avatar/avatar'
import Social from '../social/social'
import Partbox from '../partbox/partbox'
import Button from '../Button/Button'
import './../Button/button.css'
import Services from '../services/Services'
import ContactMe from '../contactMe/ContactMe'
import Footer from '../footer/Footer'
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
            <Button  content={"Hire me"} />
            <Button  content={"Download CV"} style={{width:278,marginLeft:20}} align={{width:278,right:-30}}/>
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
        <Services />
        <ContactMe />
        <Footer />
        </div>
  )
}

export default Home