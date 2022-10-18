import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <div className='pagina-forma'>
            <div className='titulo'>
                <h1>Menu</h1>
            </div>
            <div className='base'>
                <br/>
                    <div>
                        <Link  className='botão' to='/forma/estrela'>1. Estrela</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/libra'>2. Quadrado</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/libra'>3. Circulo</Link>
                        <br/> <br/> <br/> 
                    </div>  
                    <div>
                        <Link  className='botão' to='/peso'>4. Imagem</Link>
                        <br/> <br/> <br/>
                    </div>
                </div> 
        </div>
    )
}