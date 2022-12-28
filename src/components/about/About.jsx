import './about.scss'
import {aboutme} from '../../data.js'
import { useRef,useEffect,useState  } from 'react'

export default function About() {

  const slide = useRef(null);
  const wrapper = useRef(null);
  const imageAstro = useRef(null);
  const imageback = useRef(null);
  const right = useRef(null);
  const[ball, setBall] = useState(['active', 0, 0])
  const[backImg, setBackImg] = useState("./images/triangle.webp")
  const[astronaut, setAtronaut] = useState("./images/astronaut-floating3.png")
  
  const changePosition = ( scrollPosition) => {
    slide.current.scrollLeft = scrollPosition
  }

useEffect(() => {
  if(slide.current) {
    slide.current.addEventListener("scroll", handleScroll)
  }
},)


const handleScroll = () => {
  let scrollBall = ['active', 0, 0];
  let scrollLeft = slide.current.scrollLeft
  let centerScroll = wrapper.current.offsetWidth;
  let endScroll = wrapper.current.offsetWidth * 2;
  
  if(scrollLeft == 0) { //start
     scrollBall = ['active', 0, 0];
  }
  else if(scrollLeft >= centerScroll && scrollLeft < endScroll ){ //center
    scrollBall = [0, 'active', 0];
  }
  else if(scrollLeft >= endScroll ){ //end
    scrollBall = [0, 0, 'active'];
  }

  //right.current.style.animation = "right 1s linear";
  setBall(scrollBall)
  
}


useEffect(() => {
  imageAstro.current.style.animation = 'astro 5s linear infinite';
  imageback.current.style.animation = 'rotateMoon 10s linear infinite'
  if(ball[0] == 'active'){
    setAtronaut("./images/astronaut-floating3.png");
    setBackImg("./images/triangle.webp");
  }
  else if(ball[1] == 'active'){
    setAtronaut("./images/astronaut-flag.png");
    setBackImg("./images/planetback.png");
  }
  else{
    setAtronaut("./images/astronaut-book.webp");
    setBackImg("./images/circulo.png");
  }
  
},[ball])




  return (
    <div className='about'>
        <div className="left">
            <div className="content" ref={slide}>
              {aboutme.map((item,key) => (
                <div className="wrapper" key={key} ref={wrapper}>
                    <div className="line"></div>
                    <h1>{item.title}</h1>
                    <span>{item.desc}</span>
                </div>
              ))}
            </div>
            <div className="navigation">
                <div className={"ball " + ball[0]} onClick={() => changePosition( 0)} ></div>
                <div className={"ball " + ball[1]} onClick={() => changePosition( wrapper.current.offsetWidth)} ></div>
                <div className={"ball " + ball[2]} onClick={() => changePosition( wrapper.current.offsetWidth * 2)} ></div>
            </div>
        </div>
        <div className="right" ref={right}>
            <img src={backImg} alt="" width={400} height={400} loading="lazy" ref={imageback}/>
            <img src={astronaut} alt="" width={300} height={300} loading="lazy" ref={imageAstro} />
        </div>
    </div>
  )
}
