import './about.scss'
import {aboutme} from '../../data.js'

export default function About() {
  return (
    <div className='about'>
        <div className="left">
            {aboutme.map((item,key) => (
              <div className="wrapper" key={key}>
                  <div className="line"></div>
                  <h1>{item.title}</h1>
                  <span>{item.desc}</span>
                  <div className="navigation">
                      <div className="ball active"></div>
                      <div className="ball"></div>
                      <div className="ball"></div>
                  </div>
              </div>
            ))}
        </div>
        <div className="right">
            <img src="./images/triangle.webp" alt="" width={400} height={400} loading="lazy"/>
            <img src="./images/astronaut-floating2.png" alt="" width={400} height={400} loading="lazy" />
        </div>
    </div>
  )
}
