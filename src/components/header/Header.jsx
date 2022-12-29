import './header.scss';
export default function Header() {
    return (
        <div className='header' id="header">
            <img className="meteoro" src="./images/rocket.webp" alt="" width={100} height={100} loading="lazy" />
            <img className="starshoot" src="./images/star.webp" alt="" width={100} height={100} loading="lazy" />
            <img className="satellite" src="./images/spaceship.webp" alt="" width={100} height={100} loading="lazy" />
            <div className="left">
                <img src="./images/astronauta.webp" alt="" width={500} height={500} loading="lazy" />
                <img src="./images/moonyellow2.webp" alt="" width={700} height={700} loading="lazy" />
            </div>
            <div className="right">
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
        </div>
    )
}
