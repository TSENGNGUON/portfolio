import React, { useState } from "react";
import "./box.css";
import Data from "./../../../assets/data.json";
import Instagram from './../../../assets/instagram.svg'
import Facebook from './../../../assets/facebook.svg'
import Twitter from './../../../assets/twitter.png'
import Youtube from './../../../assets/youtube.svg'

function Box({ style }) {
  const boxData = Data.map((item) => (
    <div style={style} className="social_frame">
      <div className="icon_frame">
        <img src={item.img} />
      </div>
    </div>
  ));

  


  return <div className="box_social ">{boxData}</div>;
}

export default Box;
