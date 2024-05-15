import React from 'react'
import './button.css'

function Button({btn,width}) {
  return (
    <div className='btn_Hire_me' style={width}>
                <div className='btn_front_bg' style={width}>
                <a href='#'>{btn}</a>
                </div>
                
                <div className='btn_bg' style={width}></div>
     ​</div>
  )
}

export default Button;