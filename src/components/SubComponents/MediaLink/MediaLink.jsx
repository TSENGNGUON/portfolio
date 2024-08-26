
import InstagramIcon from '../../../assets/instagram.svg'
import FaceBookIcon from '../../../assets/facebook.svg'
import TwitterIcon from '../../../assets/twitter.png'


const  MediaLink = (props) => {

    const mediaLists = [
        {id: 1, icon:InstagramIcon, alt:"Instagram"},
        {id: 2, icon:FaceBookIcon, alt:"Facebook"},
        {id: 3, icon:TwitterIcon, alt:"Twitter"},
    ]

  
  return (
    <ul style={props.style} className='fixed right-[25px] top-[406px]'>
        {
            mediaLists.map(list => (
            <li key={list.id}  style={props.styleIcons} className='p-3 bg-white rounded-full mb-2' >
            <a  href="#">
            <img className='w-[70px] grayscale hover:filter-none ' src={list.icon} alt={list.alt} />  
            </a>
            </li>
            ))
        }
    </ul>
  )
}

export default MediaLink