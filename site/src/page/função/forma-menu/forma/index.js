import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <div className='pagina-forma'>
            <div className='titulo'>
                <h1>Formas</h1>
            </div>
            <div className='base'>
                <br/>
                    <div>
                        <Link  className='botão' to='/forma/estrela'>Estrela</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/forma/quadrado'>Quadrado</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/forma/circulo'>Circulo</Link>
                        <br/> <br/> <br/> 
                    </div>  
                    <div>
                        <Link  className='botão' to='/forma/imagem'>Imagem</Link>
                        <br/> <br/> <br/>
                    </div>
                    <div>
                        <Link className='voltar' to='/'>Voltar</Link>
                    </div>
                </div> 
        </div>
    )
}