import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Schedule from './components/Pages/Schedule';
import About from './components/Pages/About';
import './app.css';

export default function App() {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/schedule' element={<Schedule/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </div>
  )
}
