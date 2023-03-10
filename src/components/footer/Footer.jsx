import './footer.scss'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='footer' id="footer">
            <div className="top">
                <div className="item">
                    <h6>NUMERO</h6>
                    <span>(41) 99719-1301</span>
                </div>
                <div className="item">
                    <h6>EMAIL</h6>
                    <span>felipedalperio@gmail.com</span>
                </div>
            </div>
            <div className="bottom">
                <span>Sonhe e viva, Pense e cria.</span>
                <div className="icons">
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
                    <a href='https://www.youtube.com/channel/UCJ93tnBvS7wGUlj9Ine68GA'>
                        <div className="circle">
                            <FaYoutube />
                        </div>
                    </a>
                </div>
            </div>
            <img src="./images/moon.webp" alt="" width={300} height={300} />
        </div>
    )
}
