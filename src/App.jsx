import React from 'react'
import Header from './Components/Static/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Project from './Pages/Project'
import Service from './Pages/Service'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      {/* <Header />
      <About />
      <Contact />
      <Home />
      <Project />
      <Service /> */}

     <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Home/>} />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/service' element={<Service />} />

        <Route path='/project' element={<Project />} />

        <Route path='/contact' element={<Contact />} />

      </Routes>
     </BrowserRouter>
      

    </div>
  )
}

export default App