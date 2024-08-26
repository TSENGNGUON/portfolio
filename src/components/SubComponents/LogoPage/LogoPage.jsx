import React from 'react'


function LogoPage(props) {
  return (
    <>
    <a style={props.noneShadow} className='text-[48px] text-black font-extrabold ml-[61px] w-[64px] py-3 px-3 h-[64px] flex justify-center items-center rounded-[50%] shadow-logoShadow bg-[#FFDD55] ring-[2px] ring-black ring-inset z-50' href="#">N</a> 
    <a style={props.logoHomePage} className='text-[48px] text-black font-extrabold ml-[61px] w-[64px] py-3 px-3 h-[64px] flex justify-center items-center relative bottom-14 left-1  rounded-[50%] z-[-99999] bg-[#FFFFFF] ring-[2px] ring-black ring-inset  ' href="#"></a> 
    </>
    
    
  )
}

export default LogoPage