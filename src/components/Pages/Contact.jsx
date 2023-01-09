import { useState, useRef, useEffect } from 'react';
import './Contact.css';
import banner from '../../assets/banner.jpeg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


export default function Contact() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

  return (
    <div className='container'>
        <Navbar></Navbar>
        <div className="contact-container">
            <div className="banner" style={{backgroundImage: `url(${banner})`}}>
                <div className="banner-text">
                    <h1>Contact</h1>
                </div>
            </div>
            <div className="form">
                <div className='heading'><h1>Get In Touch!</h1></div>
                <form>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name"/>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email"/>
                    <label for="body">Message</label>
                    <textarea id="body" name="body"></textarea>
                    <input className='button' type="submit" value="Submit"/>
                </form> 
            </div>
        </div>

        <Footer/>
    </div>
  )
}
