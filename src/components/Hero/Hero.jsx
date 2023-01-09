import { useState, useEffect, useRef } from 'react'
import bg from '../../assets/bg.png';
import { useInViewport } from 'react-in-viewport';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Hero.css';

export default function Hero() {

  return (
    <div className='hero-container'>
        <div className="full" style={{backgroundImage: `url(${bg})` }}>
            <div className="text top">
                <h1 style={{fontWeight: 'bolder'}}>Westside Speed</h1>
                <p style={{fontWeight: 'normal'}}>Train with the best</p>
                <a href="/#/contact"><button>Join today!</button></a>
            </div>
        </div>
    </div>
  )
}
