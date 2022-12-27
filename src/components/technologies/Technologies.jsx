import './technologies.scss';
import { DiCode, DiDatabase, DiFirebase, DiReact, DiZend } from 'react-icons/di';

export default function Technologies() {
    return (
        <div className='technologies'>
            <div className="title">
                <div className="line"></div>
                <h1>Tecnologias</h1>
            </div>
            <span>
                Foquei meus estudos em Dev Web utilizando a 
                biblioteca JavaScript (React) e o framework Next.js, 
                Também me dediquei em desenvolvimento Android utilizando a 
                linguagem de programação nativa (Java) e iniciei agora meus estudos em 
                React-Native. O DataBase que mais utilizei em meus projetos foi o Firebase,
                MongoDb, MySql e o SQLite.
            </span>
            <div className="tech">
                <div className="left">
                    <DiReact size="40"/>
                    <h3>Front-End</h3>
                    <span>React.js e Next.js</span>
                </div>
                <div className="center">
                    <DiCode size="40"/>
                    <h3>Back-End</h3>
                    <span>Java, Javascript e Node</span>
                </div>
                <div className="right">
                    <DiDatabase size="40"/>
                    <h3>Database</h3>
                    <span>Firebase, MongoDB, MySql</span>
                </div>
                
            </div>
        </div>
    )
}
