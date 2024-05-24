import './logo.css'

export default function Logo({style,fixed}){
return(
    <div className='menubar' style={style}>
      <div className='logo'>
        <span style={style} className='front'>A</span>
        <span style={fixed} className='back'></span>
      </div>
      </div>
)
}