import Photo from '../../../assets/myPic.png'

function Profile(props) {
  return (

        <div  style={props.style} className='w-[500px] shadow-fillShadow bg-slate-400 rounded-xl'>

            <div style={props.styleFrame} className='w-[500px] shadow-frame bg-black rounded-xl'>

            <img onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} style={props.styleImg} className='w-[500px] border border-black rounded-xl hover:transition duration-200' src={Photo} alt="photo dev" />

            </div>

        </div>
        
        
  )
}

export default Profile