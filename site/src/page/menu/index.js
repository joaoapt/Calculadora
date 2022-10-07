import './index.css';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <div>
            <h1>Menu</h1>
            <div>
                <Link  className='botão' to='/acai'>1 Venda de Açai</Link>
                <br/>
                <Link  className='botão' to='/libra'>2 Signo</Link>
                <br/>
                <Link  className='botão' to='/peso'>3  Peso do sorvete</Link>
                <br/>
            </div>
        </div>
    )
}