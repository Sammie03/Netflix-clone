import React from 'react'
import './App.css'
import ProfilePage from './modules/ProfilePageManagement/ProfilePage'
import HomePage from './modules/HomePageManagement/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div className='app-container'>
      <Routes>
        <Route exact path='profiles' element={<ProfilePage/>}/>
        <Route exact path='home' element={<HomePage/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App;

