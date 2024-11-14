import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import Encuesta from '../pages/encuesta'
import Tendencias from '../pages/tendencias'
import Apoyo from '../pages/apoyo'
import Registro from '../pages/registro'
import NavBar from '../components/nav_bar'
import ScrollToTop from '../components/scrolltotop'
import Calendario from '../pages/calendario'
import Contacto from '../pages/contacto'


const Layout = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='layout'>
        <h1 className='layout__title'>MoodKarta</h1>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/tendencias' element={<Tendencias />} />
            <Route path='/encuesta-diaria' element={<Encuesta />} />
            <Route path='/registro' element={<Registro />} />
            <Route path='/apoyo' element={<Apoyo />} />
            <Route path='/calendario' element={<Calendario />} />
            <Route path='/contacto' element={<Contacto/>} />
          </Routes>
        </div>
      <NavBar className='layout_navbar'/>
      </div>
    </BrowserRouter>
  )
}

export default Layout
