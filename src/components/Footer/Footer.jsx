import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
        <div className="socials">
            <FontAwesomeIcon className='icon' icon={faInstagram}/>
            <FontAwesomeIcon className='icon' icon={faFacebook}/>
            <FontAwesomeIcon className='icon' icon={faTwitter}/>
            <FontAwesomeIcon className='icon' icon={faGithub}/>
        </div>
        <h3>Ian Cook</h3>
    </div>
  )
}
