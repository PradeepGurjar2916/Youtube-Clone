import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Video from './pages/video/video.jsx'
import { useState } from 'react'
import Searched from './pages/searched/searched.jsx'

const App = () => {
  //state for sidebar if true=> expand else contract then send sidebar in home and 
  //as the button is in the navbar send setsidebar in the navbar
  const [sidebar,setsidebar] = useState(true);

  return (
    <div>
      <Navbar setsidebar={setsidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
        <Route path='/searched/:string_searched' element={<Searched sidebar={sidebar}/>}/>
      </Routes>
    </div>
  )
}

export default App
