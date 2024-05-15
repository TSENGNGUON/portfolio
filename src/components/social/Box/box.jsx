import React from 'react'
import './box.css'

function Box({img}) {

    
  return (
    <div className='box_social '>
        <div className='social_frame'>
                <div className='icon_frame'>
                <img src={img}/>
                </div>
        </div>
    </div>
  )
}

export default Box