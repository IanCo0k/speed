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
            <div className="banner" style={{backgroundImage: `url(https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80)`}}>
                <div className="banner-text">
                    <h1>Join Today</h1>
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
