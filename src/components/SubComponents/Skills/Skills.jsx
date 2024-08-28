import React from 'react'

const  Skills = () => {
  return (
    <div className='bg-[#2F4F4F] w-full  mt-[50px] px-14 '>
        <div>
            <p className='text-[64px] font-extrabold text-white   mb-4'>Skills</p>
        </div>

        <div className='ml-20 mt-7'>
            <p className='text-[#FFDD55] text-[32px] font-bold  mb-5'>Technical Skills</p>
            <p className='w-[1000px] font-bold text-[24px] text-[#FFFFFF]'>
            <b className='text-[28px] font-bold text-blue-400'>Frontend Development</b> <br/>
            Languages: HTML, CSS, JavaScript <br/>
            Frameworks & Libraries: React.js, jQuery <br/>
            CSS Frameworks: Tailwind CSS, Bootstrap, Foundation
            Styling Techniques: Styled Components, Emotion <br/>
            <b className='text-[28px] font-bold text-blue-400'>Responsive Design</b> <br/>
            Techniques: Flexbox, CSS Grid, Media Queries
            </p>
            
        </div>

        <div>
            <p className='text-[64px] font-extrabold text-white   mb-4'>Work Experience</p>
        </div>
       
    </div>
  )
}

export default Skills