import React from 'react'
import './App.css'
import ProfilePage from './modules/ProfilePageManagement/ProfilePage'
import HomePage from './modules/HomePageManagement/HomePage'
import FullScreenPlayer from './components/FullScreenPlayer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route exact path='/' element={<ProfilePage />} />
          <Route exact path='home' element={<HomePage />} />
          <Route exact path='watching' element={<FullScreenPlayer />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

