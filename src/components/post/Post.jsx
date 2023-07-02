import './post.scss';
import { projects } from '../../constants/constants';

export default function Post() {
  return (
    <div className='post'>
       {projects.map((item,key) => (
           <div class="card" key={key}>
              <div class="card-info">
                <div className="imageWrapper" style={{backgroundImage: `url(${item.image})`}}>
                  <img src={item.image} alt={item.image} loading='lazy' width={400} height={200} />
                </div>
                <div className="content">
                    <h1>{item.title}</h1>
                    <div className="line"></div>
                    <span>{item.description}</span>
                    <p>Tecnologias usadas</p>
                    <div className="tech">
                        {item.tags.map((item,key) =>(
                          <span>{item}</span>
                        ))}
                    </div>
                    <a href={item.source}>
                      <span>{item.button}</span>
                    </a>
                </div>
              </div>
          </div>
       ))}
    </div>
  )
}
