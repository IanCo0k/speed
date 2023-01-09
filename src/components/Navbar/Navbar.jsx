import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faBook, faContactCard, faPerson, faCode } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import './Navbar.css';

export default function Navbar() {

    const [opened, setOpened] = useState(false);

    const handleToggle = () => {
        setOpened(!opened);
      };

  return (
    <div>
        <div className="nav-container">
            <div className="left">
                <a href="/"><img src={logo} alt="Ian Cook Logo" /></a>
            </div>
            
            <div className="right">
                <div className="element"><h1><a href="/#/about">About</a></h1></div>
                <div className="element"><h1><a href="/#/read">Read</a></h1></div>
                <div className="element"><h1><a href="/#/projects">Projects</a></h1></div>
                <div className="element"><h1><a href="/#/contact">Contact</a></h1></div>

                <FontAwesomeIcon onClick={handleToggle} className={opened ? 'hamburger flip' : 'hamburger'} icon={faHamburger} />
            </div>
        </div>

        <div className={opened ? 'dropdown visible' : 'dropdown'}>
            <div className="dropdown-element"><FontAwesomeIcon style={{fontSize: '2em'}} icon={faPerson}/> <a href="/#/about">About</a></div>
            <div className="dropdown-element"><FontAwesomeIcon style={{fontSize: '2em'}} icon={faBook}/> <a href="/#/read">Read</a></div>
            <div className="dropdown-element"><FontAwesomeIcon style={{fontSize: '2em'}} icon={faCode}/> <a href="/#/projects">Projects</a></div>
            <div className="dropdown-element"><FontAwesomeIcon style={{fontSize: '2em'}} icon={faContactCard}/> <a href="/#/contact">Contact</a></div>
        </div>

    </div>
  )
}
