import { Route, Routes, Link } from 'react-router-dom'
import AboutRoute from './components/AboutRoute/AboutRoute'
import Home from './components/Home/Home'
import Contact from './components/Contact/contact'
import Me from './components/Me/Me'
import './App.css'
import './list-menu.css'
import LogoPage from './components/SubComponents/LogoPage/LogoPage'


export const App = () => {

// Array of menu items
const menuLists = [
  {id: 1, page: "Home", path:"/"},
  {id: 2, page: "About", path:"/about"},
  {id: 3, page: "Contact us", path:"/contact"},
  {id: 4, page: "Me", path:"/me"},
];

// Style for logo
const logoHomePage = {
  boxShadow: "none",
  border: "2px solid black",
  position: 'fixed'
}

// Background logo home page

const bgLogo = {
  position: 'fixed',
  zIndex: 5,
  top: 33
}

  return (
    <>
  
    {/* Black backgroud color of menu */}
      <div className='backgroundMenu'>
      </div>

    {/* Menu items */}
      <div className='listOfMenu'>

      <LogoPage noneShadow={logoHomePage} logoHomePage={bgLogo}/>

      <ul className='menu_list ml-[521px]'>
        {menuLists.map(menuList => (
          <Link key={menuList.id} style={{textDecoration:"none",zIndex:999}}  to={menuList.path}><li>{menuList.page}</li></Link>
        ))}
      </ul>

      </div>
    {/* End of menu items */}

    {/* Manage routes */}
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<AboutRoute />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/me' element={<Me />}/>
      </Routes>
       {/* End of manage routes */}
    </>
  );
};

