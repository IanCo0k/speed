import React from 'react'
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
import './Home.css';

export default function Home() {
  return (
    <div className="container">
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}
