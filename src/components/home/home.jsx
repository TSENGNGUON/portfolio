import React from 'react'
import './home.css'
import NewButton from '../SubComponents/Button/NewButton'
import MyCV from './../../assets/Resume.pdf'
import Profile from '../SubComponents/Profile/Profile'
import MediaLink from '../SubComponents/MediaLink/MediaLink'
import AboutMePart from '../SubComponents/AboutMePart/AboutMePart'
import ServicesPart from '../SubComponents/ServicesPart/ServicesPart'
import ContactPart from '../SubComponents/ContactPart/ContactPart'
import FooterPart from '../SubComponents/FooterPart.jsx/FooterPart'

function Home() {

    const leftPart = [
        {
            id:1, name:"Tun Seng Nguon", skill: "React Js Developer", career: "FrontEnd Developer"
        }
    ];

  return (
   <div>
    <section className='hero-section'>
        {
            // Left part
            leftPart.map(item => (
            <div key={item.id} className='left-part'>

            <p className='name'>Hello, I'm<br/>
            {item.name}
             </p>
            
            {/* Name part */}
            <div className='skills'>
                <span>{item.career} ,</span>
                <span>{item.skill}</span>
            </div>

            {/* Button part */}
            <div className='button-part'>
            <NewButton buttonUrl={"https://t.me/SENG_NGUONN"}  buttonName={"Hire Me"}/>
            <NewButton buttonUrl={MyCV} style={{marginLeft: 25}} buttonName={"Download CV"} />
            </div>  
        </div>
            ))
        }

        <div className='right-part'>
            <Profile style={{marginLeft: 155}}/>
        </div>  
        <MediaLink/>
        </section>
        <AboutMePart />
        <ServicesPart />
        <ContactPart telegramUrl={"https://t.me/SENG_NGUONN"} />
        <FooterPart />
        </div>
  )
}

export default Home