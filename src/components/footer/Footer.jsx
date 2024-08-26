import Logo from '../logo/Logo'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCopyright } from "react-icons/md";
import './footer.css'


export default function Footer(){
    return(
        <div className='footer'>
            <div className='header'>
                <Logo color={{backgroundColor: '#ffffff'}} style={{position:'relative'}} fixed={{position:'fixed',left:65,right:25,backgroundColor:"#ffffff",zIndex:1}} />
                <p>Tun Seng Nguon</p>
            </div>
            <pre className='greeting'>
            I Make as soon as Possible .You really <br />
            like my work contact me and let’s Work <br /><p>Together.</p>
            </pre>
            <div className='link'>
                {/* <Box style={{ display: 'flex',width: 410,justifyContent: 'space-around'}} /> */}
                
            </div>
            <div className='copy_right'>
                <div className='location'>
                    <FaLocationDot />
                    <pre>Phnom Penh</pre>
                </div>
                <div className='date'>
                    <MdOutlineCopyright />
                    <p>2024,All Right By React JS Library.</p>
                </div>
                <div className='link_footer'>
                    <a href="#">Guides</a>
                    <a href="#">Term of Use</a>
                    <a href="#">Private Policy</a>
                </div>
            </div>
        </div>
    )
}