import './post.scss';
import { projects } from '../../constants/constants';

export default function Post() {
  return (
    <div className='post'>
       {projects.map((item,key) => (
           <div class="card" key={key}>
              <div class="card-info">
                <img src={item.image} alt={item.image} loading='lazy' width={400} height={200} />
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
                    <button><span>{item.button}</span></button>
                </div>
              </div>
          </div>
       ))}
    </div>
  )
}
