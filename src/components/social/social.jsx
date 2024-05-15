import React from 'react'
import Box from './Box/box'
import Instagram from './../../assets/instagram.svg'
import Facebook from './../../assets/facebook.svg'
import Twitter from './../../assets/twitter.png'
import Youtube from './../../assets/youtube.svg'
import GreyInstagram from './../../assets/grey-instagram.svg'
import GreyFaceBook from './../../assets/grey-facebook.svg'
import GreyTwitter from './../../assets/grey-twitter.svg'
import GreyYouTube from './../../assets/grey-youtube.svg'



function Social() {
  return (
    <div className='box_social'>
        <Box img={GreyInstagram} />       
        <Box img={GreyFaceBook} />       
        <Box img={GreyTwitter} />       
        <Box img={GreyYouTube} />       
    </div>
  )
}

export default Social


