import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import Navbar from "../Navbar/Navbar";
import './About.css';

export default function About() {

    const firstRef = useRef();
    const firstInView = useInViewport(firstRef)
    const [first, setFirst] = useState(false);

    const secondRef = useRef();
    const secondInView = useInViewport(secondRef);
    const [second, setSecond] = useState(false);

    const thirdRef = useRef();
    const thirdInView = useInViewport(thirdRef);
    const [third, setThird] = useState(false);

    const refs = [firstRef, secondRef, thirdRef];
    const [counter, setCounter] = useState(1);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        if(!loaded){
            window.scrollTo(0,0);
            setLoaded(true);
        }

        if(firstInView['inViewport']){
            setFirst(true);
        }
        if(secondInView['inViewport']){
            setSecond(true);
        }
        if(thirdInView['inViewport']){
            setThird(true);
        }
    }, [firstInView, secondInView, thirdInView])

    const handleClick = () => {
        refs[counter].current.scrollIntoViewIfNeeded({ behavior: 'smooth'});
        setCounter(counter+1);
      }


  return (
    <div className="container">
        <Navbar></Navbar>
        <div className="about-container">

             <div className="section">
                <div onClick={handleClick} ref={firstRef} className={first ? 'section-text fade-right' : 'hide'}>
                    <div className="date">
                        <h1>March 19th</h1>
                    </div>
                    <div className="year"><h2>2002</h2></div>
                    <div className="body">
                        <p>
                            I was born. Thanks mom and dad.
                        </p>
                    </div>
                </div>
            </div>

            <div className="section">
                <div onClick={handleClick} ref={secondRef}  className={second ? 'section-text fade-left' : 'hide'}>
                    <div className="date">
                        <h1>August</h1>
                    </div>
                    <div className="year"><h2>2002</h2></div>
                    <div className="body">
                        <p>
                            Solved my first differential equation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="section">
                <div ref={thirdRef} className={third ? 'section-text fade-right' : 'hide'}>
                    <div className="date">
                        <h1>January</h1>
                    </div>
                    <div className="year"><h2>2003</h2></div>
                    <div className="body">
                        <p>
                            Walked and Talked.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
