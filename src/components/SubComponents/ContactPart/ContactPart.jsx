import React from 'react'

function ContactPart(props) {
  return (
    <div className='w-full h-[548px] bg-[#0ACF83] mt-[181px] px-[136px] flex flex-col  items-center'>
        <p className='mt-[147px] mb-[87px] font-extrabold text-[42px] text-white'>If you have any query or project ideas feel free to </p>
        <a target='_blank' href={props.telegramUrl}  className='shadow-buttonContactShadow py-[20px] px-[150px] bg-[#FFDD55] rounded-[47px] text-[64px] font-bold flex justify-center items-center hover:bg-[#A259FF]'>
            Contact me
        </a>
    </div>
  )
}

export default ContactPart