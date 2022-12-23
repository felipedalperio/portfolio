import './about.scss'

export default function About() {
  return (
    <div className='about'>
        <div className="left">
            <h1>Sobre mim</h1>
            <div className="line"></div>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate facere dolorum, ut quas voluptas illum necessitatibus! Obcaecati dignissimos dolore dolorum aut dicta nihil veniam nostrum repellendus odit. Nulla, neque porro!</span>
            <div className="navigation">
                <div className="ball active"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
        </div>
        <div className="right">
            <img src="./images/triangle.png" alt="" width={400}/>
            <img src="./images/astronaut-floating.webp" alt="" width={400} />
        </div>
    </div>
  )
}
