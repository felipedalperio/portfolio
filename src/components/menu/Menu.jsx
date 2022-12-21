import './menu.scss';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Menu() {
  return (
    <div className='menu'>
        <div className="left">
            <h1>FK</h1>
        </div>
        <div className="center">
            <ul>
                <li>home</li>
                <li>about</li>
                <li>blog</li>
                <li>contact</li>
            </ul>
        </div>
        <div className="right">
            <div className="circle">
                <FiGithub />
            </div>
            <div className="circle">
                <FaLinkedinIn />
            </div>
            <div className="circle">
                <FaYoutube />
            </div>
        </div>
    </div>
  )
}
