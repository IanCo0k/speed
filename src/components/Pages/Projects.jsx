import { useState, useEffect, useRef } from 'react'
import banner from '../../assets/sky.jpeg';
import portfolio from '../../assets/portfolio.png';
import tnt from '../../assets/tnt.png';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/Footer';
import './Projects.css';

export default function Projects() {


    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

  return (
    <div className="container">
        <Navbar></Navbar>
        <div className="project-container">
            <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
                <div className="banner-text">
                    <h1>Projects</h1>
                </div>
            </div>

           <div className="projects">

            <div className="project">
                    <div className="project-title">
                        <h1>Tuesday Night Takes</h1>
                    </div>
                    <div className="project-image" style={{ backgroundImage: `url(${tnt})` }}>
                        <a href="https://github.com/IanCo0k/ianco0k.github.io">Source Code</a>
                        <a href="https://tuesdaynighttakes.com/#/">Project Link</a>
                    </div>
                    <div className="project-details">
                        <div className="detail-section">
                            <div className="detail-title">
                                <h1>Languages</h1>
                            </div>
                            <div className="detail-body">
                                <FontAwesomeIcon style={{ fontSize: '3em', marginInline: '.2em' }} icon={faReact}/>
                                <FontAwesomeIcon style={{ fontSize: '3em', marginInline: '.2em'  }} icon={faHtml5}/>
                                <FontAwesomeIcon style={{ fontSize: '3em', marginInline: '.2em'  }} icon={faCss3}/>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="project">
                    <div className="project-title">
                        <h1>Portfolio Site</h1>
                    </div>
                    <div className="project-image" style={{ backgroundImage: `url(${portfolio})` }}>
                        <a href="https://github.com/IanCo0k/everything">Source Code</a>
                        <a href="/">Project Link</a>
                    </div>
                    <div className="project-details">
                        <div className="detail-section">
                            <div className="detail-title">
                                <h1>Languages</h1>
                            </div>
                            <div className="detail-body">
                                <FontAwesomeIcon style={{ fontSize: '3em', marginInline: '.2em' }} icon={faReact}/>
                                <FontAwesomeIcon style={{ fontSize: '3em', marginInline: '.2em'  }} icon={faHtml5}/>
                                <FontAwesomeIcon style={{ fontSize: '3em', marginInline: '.2em'  }} icon={faCss3}/>
                            </div>
                        </div>
                    </div>
            </div>

           </div>
        </div>
        <Footer/>
    </div>
  )
}
