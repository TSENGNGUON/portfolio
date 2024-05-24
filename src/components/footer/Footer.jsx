import Logo from '../logo/Logo'
import Social from '../social/social'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCopyright } from "react-icons/md";
import './footer.css'
import Box from '../social/Box/box';

export default function Footer(){
    return(
        <div className='footer'>
            <div className='header'>
                <Logo style={{position:'relative'}} fixed={{position:'fixed',left:65,right:25,backgroundColor:"#ffffff",zIndex:1}} />
                <p>Tun Seng Nguon</p>
            </div>
            <pre className='greeting'>
            I Make as soon as Possible .You really <br />
            like my work contact me and let’s Work <br /><p>Together.</p>
            </pre>
            <div className='link'>
                <Social flex={{display:'flex'}} />
                <p>Phnom Penh</p>
            </div>
            <div className='copy_right'>
                <div className='location'>
                    <FaLocationDot />
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