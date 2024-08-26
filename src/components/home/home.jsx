import React from 'react'
import './home.css'
import '../SubComponents/button/button.css'
import Services from '../SubComponents/ServicesPart/ServicesPart'
import ContactMe from '../contactMe/ContactMe'
import NewButton from '../SubComponents/button/NewButton'
import Footer from '../footer/Footer'
import MyCV from './../../assets/Resume.pdf'
import Profile from '../SubComponents/Profile/Profile'
import MediaLink from '../SubComponents/MediaLink/MediaLink'
import AboutMePart from '../SubComponents/AboutMePart/AboutMePart'
import ServicesPart from '../SubComponents/ServicesPart/ServicesPart'

function Home() {

    const leftPart = [
        {
            id:1, name:"Tun Seng Nguon", skill: "React Js Developer", career: "Web Developer"
        }
    ];

  return (
   <div>
    <section className='hero-section'>
        {
            // Left part
            leftPart.map(item => (
            <div key={item.id} className='left-part'>

            <p className='name'>Hello,<br/>
            {item.name}
             </p>
            
            {/* Name part */}
            <div className='skills'>
                <span>{item.career} ,</span>
                <span>{item.skill}</span>
            </div>

            {/* Button part */}
            <div className='button-part'>
            <NewButton buttonName={"Hire Me"}/>
            <NewButton style={{marginLeft: 25}} buttonName={"Download CV"} link={MyCV}/>
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
        <ContactMe />
        {/* <Footer /> */}
        </div>
  )
}

export default Home