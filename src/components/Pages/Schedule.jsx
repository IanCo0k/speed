import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Schedule.css';

export default function Schedule() {
  return (
    <div className="container">
        <Navbar></Navbar>
            <div className="schedule-container">
                <h1>I can update this page each week with meeting time + location.</h1>
            </div>
    </div>
  )
}
