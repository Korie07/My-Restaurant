import Home from './pages/Home'
import React from 'react'
import Layout from './Component/Layout/Layout'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Pagenotfound from './pages/Pagenotfound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  console.log("eraw")
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element= {<Home />} />
        <Route  path='/about' element= {<About />} />
        <Route  path='/contact' element= {<Contact/>} />
           <Route  path='/menu' element= {<Menu />} />
        <Route  path='/pagenotfound' element= {<Pagenotfound />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
