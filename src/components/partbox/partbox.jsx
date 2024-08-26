import React from 'react'
import './partbox.css'
import Avatar from '../avatar/avatar'
import Button from '../SubComponents/button/button'
import MyCV from './../../assets/Resume.pdf'


function Partbox() {
  return (
    <div className='partbox'>
        
    <Avatar style={{width:385.08,height:480.68,objectFit:'cover',borderRadius:10}}/>
    <Info />  
    </div>
  )
} 

function Info(){
  return(
    <div>
      <h1>About me</h1>
      <p className='skill'>Web Developer <br />
        React Js Developer
      </p>
      <p className='title'>Hello I'm Web Developer Dive into my portpolio to discover a fusion of elegant</p>
      <div className='middle_btn'>
        <Button content={"Hire me"} align={{zIndex:2}} style={{zIndex:3}}/>
        <Button cv={MyCV}  content={"Download CV"} style={{width:278,marginLeft:20,zIndex:3}} align={{width:278,right:-30,zIndex:1}}/>
      </div>
     
    </div>
  )
}

export default Partbox