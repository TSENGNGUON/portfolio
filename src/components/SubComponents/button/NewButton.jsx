import React from 'react'

function NewButton(props) {

  return (
    <a style={props.style} target='_blank' className="py-[12px] px-[39px] border-black border bg-black text-white text-[32px] font-bold rounded-custom hover:bg-white hover:border-black hover:border hover:text-black shadow-custom hover:shadow-custom  hover:transition duration-300 " href={props.buttonUrl}>{props.buttonName}</a>
  )

}

export default NewButton