import { useState, useEffect, useRef } from 'react'
import headshot from '../../assets/headshot.png';
import hero2 from '../../assets/hero2.jpeg';
import sky from '../../assets/sky.jpeg';
import cmu from '../../assets/cmu.jpeg';
import { useInViewport } from 'react-in-viewport';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand, faCode, faComputer, faSchool, faGraduationCap, faBookBible } from '@fortawesome/free-solid-svg-icons';

import './Hero.css';

export default function Hero() {

    const [visible, setVisible] = useState(false);
    const [second, setSecond] = useState(false);
    const [contact, setContact] = useState(false)

    const secondHero = useRef();

    const ref = useRef();
    const myRef = useRef();
    const contactRef = useRef();

    const { inViewport } = useInViewport(ref);
    const otherInViewport = useInViewport(myRef);
    const contactInView = useInViewport(contactRef);

    useEffect(() => {
        if(inViewport){
            setVisible(true);
        } if(otherInViewport['inViewport']){
            setSecond(true);
        } if(contactInView['inViewport']){
            setContact(true);
        }

    }, [inViewport, second, contactInView])


  return (
    <div className='hero-container'>
        <div className="full" style={{backgroundImage: `url(${headshot})` }}>
            <div className="text top">
                <h1>Hi, I'm Ian Cook</h1>
                <FontAwesomeIcon style={{fontSize: '2em'}} icon={faHand}/>
            </div>
        </div>

        <div ref={secondHero} className="full" style={{backgroundImage: `url(${cmu})`}}>
            <div ref={ref} style={{padding: '1em', lineHeight: '1.3em', textAlign: 'center'}} className={visible ? 'text fade-right' : 'hide'}>
                <h3>Computer Science <FontAwesomeIcon icon={faComputer} /></h3>
                <h3>Central Michigan University <FontAwesomeIcon icon={faSchool} /></h3>
                <h3>2024 <FontAwesomeIcon icon={faGraduationCap} /></h3>
                <a href="/#/projects"><button>Projects <FontAwesomeIcon style={{fontSize: '1em'}} icon={faCode} /></button></a>
            </div>
        </div>

        <div className="full" style={{backgroundImage: `url(${sky})`}}>
            <div ref={myRef} className={second ? 'text fade-left' : 'hide'}>
                <h2>Check out my blogs!</h2>
                <button>Read<FontAwesomeIcon icon={faBookBible} /></button>
            </div>
        </div>

        <div className="full closer" style={{backgroundImage: `url(${hero2})`}}>
            <div ref={contactRef} className={contact ? 'text fade-right' : 'hide'}>
               <h1>Project ideas?</h1>
               <a href="/#/contact"><button>Let's talk!</button></a>
            </div>
        </div>
    </div>
  )
}
