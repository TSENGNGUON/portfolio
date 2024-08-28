import React from 'react'
import Profile from '../SubComponents/Profile/Profile'
import BackgroundExperience from '../SubComponents/BackgroundExperience/BackgroundExperience'
import Skills from '../SubComponents/Skills/Skills'

function AboutRoute() {
  return (
    <div>

    {/* Brief Personal Introduction */}
    <div className='bg-[#2F4F4F] w-full h-[500px] mt-[50px] px-14 flex'>
        <div>
            <p className='text-[64px] font-extrabold text-white   mb-4'>About Me</p>
            <Profile style={{width: 250}} styleFrame={{width:250}} styleImg={{width:250}}/>
        </div>

        <div className='ml-20 mt-7'>
            <p className='text-[#FFDD55] text-[32px] font-bold  mb-5'>Personal Introduction</p>
            <p className='w-[1000px] font-bold text-[24px] text-[#FFFFFF]'>Hi, I'm Tun Seng Nguon, a passionate Frontend Developer with a keen eye for detail and a love for crafting clean, user-friendly web experiences. I specialize in turning complex problems into simple, beautiful, and intuitive interfaces using technologies like React, Tailwind and some CSS. With a strong foundation in both design and development, I aim to bridge the gap between ideas and reality, delivering websites that are not only functional but also engaging. Let's build something amazing together!</p>
        </div>
    </div>
    {/* Background & Experience */}
    <BackgroundExperience/>
    {/* Skills */}
    <Skills/>
    </div>
    

  )
}

export default AboutRoute