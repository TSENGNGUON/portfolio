import { Route, Routes, Link } from 'react-router-dom'
import About from './components/about/about'
import Home from './components/home/home'
import Contact from './components/contact/contact'
import Me from './components/Me/Me'
import './App.css'
import './list-menu.css'


export const App = () => {

// Array of menu items
const menuLists = [
  {id: 1, page: "Home", path:"/"},
  {id: 2, page: "About", path:"/about"},
  {id: 3, page: "Contact us", path:"/contact"},
  {id: 4, page: "Me", path:"/me"},
];

  return (
    <>
  
    {/* Black backgroud color of menu */}
      <div className='backgroundMenu'>
      </div>

    {/* Menu items */}
      <div className='listOfMenu'>

      <div className='logo'>
        <span className='front'>A</span>
        <span className='back'></span>
      </div>

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
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/me' element={<Me />}/>
      </Routes>
       {/* End of manage routes */}
    </>
  );
};

