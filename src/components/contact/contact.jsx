import React from 'react'
import './contact.css'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <>
    <div className='main'>
      {/* <img className='img' src={myPic} alt="Me" /> */}
      <div className='contact'>
        <p className='title_p'>Contact Us</p>
        <div className='modal'>
        <div className='field'>
          <div>
          <label>Full-Name</label><br/>
          <input type="text" />
          <div className='line'></div>
          </div>
          <div><label>E-mail</label><br/>
          <input type='text' />
          <div className='line'></div>
          </div>
          <div><label>Message</label><br/>
          <input type="text" />
          <div className='line'></div>

          </div>

          
          <a href='#'>Contact us</a>
        </div>
        <div className='link'>
          <div>
          <h3>Contact</h3>
          <p className='p_tag'>sengn5112@gmail.com</p>
          </div>
          <div>
            
          <h3>Based in</h3>
          <p className='p_tag'>Phnom Penh</p>
          </div>
          <div className='icon'>
            <a href="https://www.facebook.com/seng.nguon.773" target='_blank'><FaFacebookF style={{color: 'black', fontSize: 30}} /></a>
            <a href="https://www.instagram.com/tunsengnguon?igsh=MTR0bW5tcGk3MXJzYQ==" target='_blank'><IoLogoInstagram style={{color: 'black', fontSize: 30}}/></a>
            <a href="https://x.com/tunsengnguon" target='_blank'><FaTwitter style={{color: 'black', fontSize: 30}} /></a>
          </div>
        </div>
        </div>
      </div>

    </div>
   
    </>
  )
}

export default Contact