import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <div className='pagina-menu'>
            <div className='titulo'><h1>Menu</h1></div>
            <ol className='base'>
                <li>
                    <Link  className='botão' to='/acai'>Venda de Açai</Link>
                    <br/> <br/>
                </li>
                <li>
                    <Link  className='botão' to='/libra'> Signo</Link>
                    <br/> <br/>
                </li>
                <li>
                    <Link  className='botão' to='/peso'> Venda de SORVETE</Link>
                    <br/> <br/>
                </li>
                <li>
                    <Link  className='botão' to='/Salario'> Salario Liquido</Link>
                    <br/> <br/>
                </li>
                <li>
                    <Link  className='botão' to='/abastecimento'>  Ipiranga mais procimo</Link>
                    <br/> <br/>
                </li>
                <li>
                    <Link  className='botão' to='/temperatura'> Temperatura</Link>
                    <br/> <br/>
                </li>
            </ol>
        </div>
    )
}