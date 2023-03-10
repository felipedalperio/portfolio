import './menu.scss';
import { FiGithub } from 'react-icons/fi';
import { FaFacebook, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { useRef, useEffect } from 'react';

export default function Menu() {
    const menu = useRef(null);
    const handleScroll = () => {
        const position = window.pageYOffset;
        if(position > 0){
            menu.current.style.backgroundColor = "#050516";
        }else{
            menu.current.style.backgroundColor = "transparent";
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className='menu' ref={menu}>
        <div className="left">
            <h1>FK</h1>
        </div>
        <div className="center">
            <ul>
                <li> <a href="#header" > home </a> </li>
                <li> <a href="#about"> about</a> </li>
                <li> <a href="https://lacodev.netlify.app">blog</a></li>
                <li> <a href="#footer">contact</a></li>
            </ul>
        </div>
        <div className="right">
            <a href="https://github.com/felipedalperio">
                <div className="circle">
                    <FiGithub />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/felipe-dalperio-3b569521a/">
            <div className="circle">
                <FaLinkedinIn />
            </div>
            </a>
            <a href="https://www.facebook.com/felipe.kd.16/">
            <div className="circle">
                <FaFacebook />
            </div>
            </a>
        </div>
    </div>
  )
}
