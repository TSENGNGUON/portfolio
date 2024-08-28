import React, { useState } from 'react'
import Profile from '../Profile/Profile'
import NewButton from '../Button/NewButton'
import MyCv from '../../../assets/Tun_SengNguon.pdf'

function AboutMePart() {

    const [isHovered,setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false); 


    const rotateProfile = {
            transform: isHovered ? 'translate(-20px,-20px)' : 'translate(0)',
            width: 385,
            zIndex: 5,
            border: '3px solid black'
    };


  return (
    <div className='mx-[53px] mt-[1006] py-[87px] px-[54px] w-[92%] h-[672px] bg-bgBlue rounded-[20px] flex'>

        {/* Profile component */}
       <div  className='w-[385px]'>
       <Profile onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{width: 385,boxShadow:"10px 0px 5px rgba(0,0,0,0.3)"}} styleImg={rotateProfile} styleFrame={{width: 385,boxShadow:"none",backgroundColor: '#00C6AE'}} />
       </div>
      
       

        {/* About me content */}
        <div className='ml-[45px] mt-[62px]'>
            <div className='mb-[50px]'>
                <p className='text-[64px] font-extrabold text-[#FFFFFF]'>About me</p>
                <div className='relative bottom-4'>
                    <p className='text-[32px] font-bold text-[#FFDD55]'>Frontend Developer</p>
                    <p className='relative top-1 font-bold text-[24px] text-[#FFFFFF]'>
                    Hi, I'm Tun Seng Nguon, a passionate Frontend Developer with a keen eye for detail and a love for crafting clean, user-friendly web experiences. I specialize in turning complex problems into simple, beautiful, and intuitive interfaces using technologies like React, Tailwind and some CSS.                     </p>
                </div>
            </div>
            <NewButton buttonUrl={"https://t.me/SENG_NGUONN"} buttonName={"Hire me"}/>
            <NewButton buttonUrl={MyCv} style={{marginLeft: 19}} buttonName={"Download CV"}/>
        </div>
    </div>
  )
}

export default AboutMePart