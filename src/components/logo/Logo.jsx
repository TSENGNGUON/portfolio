import './logo.css'
import { Link } from 'react-router-dom'

export default function Logo({style,fixed,color}){
return(
    <div className='menubar' style={style}>
      <div style={color} className='logo'>
        <Link style={{textDecoration:'none'}} to={"/"}><a  style={style} className='front'>A</a></Link>
        <span style={fixed} className='back'></span>
      </div>
      </div>
)
}