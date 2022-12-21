import './header.scss';
import React, { useState, useEffect, useRef } from 'react';
export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const could1 = useRef(null);
    const could2 = useRef(null);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }

    function getDevice(){
        let width = getWindowDimensions().width;
        if(width <= 1400){
            return 300;
        }
        else if (width <= 510){
            return 250;
        }
        return 200;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='header'>
            <div className="top">
                <img className="bubble" src="./images/bubble.gif" alt="" loading="lazy" />
                <img className="meteoro" src="./images/meteoro.webp" alt="" width={100} loading="lazy" />
                <img className="satellite" src="./images/spaceship2.webp" alt="" width={100} loading="lazy" />
                <div className="left">
                    <img src="./images/astronauta.png" alt="" width={300} loading="lazy" />
                    <img src="./images/planet2.webp" alt="" width={100} loading="lazy" />
                    <img src="./images/planet3.webp" alt="" width={100} loading="lazy" />
                </div>
                <div className="center">
                    <span>hi there!</span>
                    <div className="name">
                        <span>I'M FELIPE</span>
                    </div>
                    <span>WELCOME TO MY <span>PORTFOLIO</span></span>
                    <div className="groupButton">
                        <button>MY BLOG</button>
                        <button>CURRICULUM</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./images/planet4.webp" alt="" width={300} loading="lazy" />
                    <img src="./images/rocket.webp" alt="" width={50} loading="lazy" />
                </div>
            </div>
            <div className="bottom">
                <img src="./images/cloud.webp" alt="" width={800} loading="lazy"  style={{left: `-${getDevice() + scrollPosition/2}px`}}/>
                <img src="./images/planet.webp" alt="" width={700} loading="lazy" />
                <img src="./images/cloud.webp" alt="" width={800} loading="lazy"  style={{right: `-${getDevice() + scrollPosition/2}px`}}/>
            </div>
        </div>
    )
}
