import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Pages/Contact';
import Projects from './components/Pages/Projects';
import About from './components/Pages/About';
import Read from './components/Pages/Read';
import './app.css';

export default function App() {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/read' element={<Read/>}/>
        </Routes>
    </div>
  )
}
