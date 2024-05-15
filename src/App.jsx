import React from 'react'
import './App.css'
import Menubar from './components/menubar/menubar'
import { Route, Routes } from 'react-router-dom'
import About from './components/about/about'
import Home from './components/home/home'
import Contact from './components/contact/contact'
import Team from './components/team/team'
function App() {
  return (
    <div>
      <div className='bg_menubar'></div>
      <Menubar />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/team' element={<Team />}/>
      </Routes>
    </div>
  )
}

export default App