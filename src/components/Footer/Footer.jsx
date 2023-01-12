import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faE } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
        <div className="socials">
            <a href="https://www.instagram.com/westside_speed/"><FontAwesomeIcon className='icon' icon={faInstagram}/></a>
            <a href="tel:616-498-9795"><FontAwesomeIcon className='icon' icon={faPhone}/></a>
            <a href="mailto:haddadeli89@gmail.com"><FontAwesomeIcon className='icon' icon={faEnvelope}/></a>
        </div>
        <h3>Westside Speed</h3>
    </div>
  )
}
