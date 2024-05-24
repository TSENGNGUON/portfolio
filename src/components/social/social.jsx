import React, { useState } from 'react'
import Box from './Box/box'
import Instagram from './../../assets/instagram.svg'
import Facebook from './../../assets/facebook.svg'
import Twitter from './../../assets/twitter.png'
import Youtube from './../../assets/youtube.svg'
import GreyInstagram from './../../assets/grey-instagram.svg'
import GreyFaceBook from './../../assets/grey-facebook.svg'
import GreyTwitter from './../../assets/grey-twitter.svg'
import GreyYouTube from './../../assets/grey-youtube.svg'



function Social({flex}) {


  return (
    <div style={flex} className='box_social'>
            <Box style={{marginBottom:30}} />
    </div>
  )
}

export default Social


