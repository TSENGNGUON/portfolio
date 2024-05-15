import React from 'react'
import './avatar.css'
import myPic from './../../assets/myPic.jpg'

function Avatar({style}) {
  return (
    <div className='avatar' style={style}>
    <div className='box_img' style={style}>
        <img src={myPic} alt="avatar" style={style} />
            <div className='box frame'>

            </div>
            <div className='box frame-bg' ></div>
    </div>
    </div>
  )
}

export default Avatar