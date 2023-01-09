import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
        <div className="socials">
            <FontAwesomeIcon className='icon' icon={faInstagram}/>
        </div>
        <h3>Westside Speed</h3>
    </div>
  )
}
