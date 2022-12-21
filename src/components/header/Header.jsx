import './header.scss';

export default function Header() {
  return (
    <div className='header'>
        <div className="top">
            <img className="bubble" src="./images/bubble.gif" alt=""  />
            <img className="meteoro" src="./images/meteoro.webp" alt="" width={100} />
            <div className="left">
                <img src="./images/astronauta.png" alt="" width={300} />
                <img src="./images/planet2.webp" alt="" width={100} />
                <img src="./images/planet3.webp" alt="" width={100} />
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
                <img src="./images/planet4.webp" alt="" width={300} />
                <img src="./images/rocket.webp" alt="" width={50} />
            </div>
        </div>
        <div className="bottom">
            <img src="./images/cloud.webp" alt="" width={800}/>
            <img src="./images/planet.webp" alt="" width={700} />
            <img src="./images/cloud.webp" alt="" width={800}/>
        </div>
    </div>
  )
}
