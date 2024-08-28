import React from 'react'
import WorkExperience from '../Work Experience/WorkExperience'

const  BackgroundExperience = () => {
  return (
    <div className='bg-[#2F4F4F] w-full  mt-[50px] px-14 '>
        <div>
            <p className='text-[64px] font-extrabold text-white   mb-4'>Background</p>
        </div>

        <div className='ml-20 mt-7'>
            <p className='text-[#FFDD55] text-[32px] font-bold  mb-5'>Educational Background</p>
            <p className='w-[1000px] font-bold text-[24px] text-[#FFFFFF]'>I'm a fourth year IT student from National University of Mangement. During my studies, I focused on web development, mastering the fundamentals of HTML, CSS, JavaScript, and modern frameworks like React.js. My academic journey provided me with a strong foundation in both theoretical concepts and practical website, allowing me to build efficient and scalable web solutions.</p>
            
        </div>

        <div>
            <p className='text-[64px] font-extrabold text-white   mb-4'>Work Experience</p>
        </div>
       <WorkExperience/>
       
    </div>
  )
}

export default BackgroundExperience