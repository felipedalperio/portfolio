import './header.scss';
export default function Header() {
    //<img className="bubble" src="./images/bubble.gif" alt="" loading="lazy"/>
    return (
        <div className='header'>
            <div className="top">
                <img className="meteoro" src="./images/meteoro.webp" alt="" width={100} height={100} loading="lazy" />
                <img className="satellite" src="./images/spaceship2.webp" alt="" width={100} height={100}loading="lazy" />
                <div className="left">
                    <img src="./images/astronauta.webp" alt="" width={300} height={300}loading="lazy" />
                    <img src="./images/planet2.webp" alt="" width={100} height={150}loading="lazy" />
                    <img src="./images/planet3.webp" alt="" width={200} height={100}loading="lazy" />
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
                    <img src="./images/planet4.webp" alt="" width={380} height={200} loading="lazy" />
                    <img src="./images/rocket.webp" alt="" width={50} height={100} loading="lazy" />
                </div>
            </div>
            <div className="bottom">
                <img src="./images/cloud.webp" alt="" width={800} height={800} loading="lazy"  />
                <img src="./images/planet.webp" alt="" width={700} height={700}loading="lazy" />
                <img src="./images/cloud.webp" alt="" width={800} height={800}loading="lazy" />
            </div>
        </div>
    )
}
