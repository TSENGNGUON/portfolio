import React from 'react'
import LogoPage from '../LogoPage/LogoPage'
import MediaLink from '../MediaLink/MediaLink'
import { IoLocationSharp } from "react-icons/io5"
import { FaRegCopyright } from "react-icons/fa"


function FooterPart() {

  const shadowLogo = {
    boxShadow: "none",
    border: "2px solid black"
  }

  return (
    <>
   
    <div className='w-full h-[802px] relative flex items-center flex-col'>   

        {/* Part logo and name */}
        <div className='flex mt-[129px]'>
          <div>
            <LogoPage noneShadow={shadowLogo}/>
          </div>
          <p className='font-extrabold text-[48px] ml-[42px]'>
            Tun Seng Nguon
          </p>
        </div>

        {/* Conclusion part */}
        <p className='font-bold text-[40px] flex items-center flex-col mb-[90px]'>
        I make as soon as possible.You really <br/>
        like my work contact me and let's work <br/>
        <p>together.</p>
        </p>

        {/* Media link part */}
        <MediaLink styleIcons={{marginLeft: 7}} style={{position: "relative",display: "flex",top: -50}}/>

        {/* Copy right part */}
        <div className='flex justify-between items-center w-[95%] mt-[91px] z-[-99] text-[25px] font-medium'>
        <div className='flex items-center'>
        <IoLocationSharp /> 
        <p className='ml-[2px]'>Cambodia</p>
        </div>
        <span className='flex items-center'>
        <FaRegCopyright />
        <p>2024,All Rights By Figma Design.</p>
        </span>
        <ul className='flex text-[#3B5999]'>
          <li className='mr-[19px]'><a href="#">Guides</a></li>
          <li className='mr-[19px]'><a href="#">Term of Use</a></li>
          <li className='mr-[19px]'><a href="#">Privacy Policy</a></li>
        </ul>

        </div>
    </div>
    </>
    
  )
}

export default FooterPart