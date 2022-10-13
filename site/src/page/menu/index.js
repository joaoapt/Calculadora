import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <div className='pagina-menu'>
            <div className='titulo'>
                <h1>Menu</h1>
            </div>
            <div className='base'>
                    <div>
                        <Link  className='botão' to='/acai'>1. Venda de Açai</Link>
                    </div>
                    <br/> <br/> 
                    <div>
                        <Link  className='botão' to='/libra'>2. Signo</Link>
                    </div>
                    <br/> <br/> 
                    <div>
                        <Link  className='botão' to='/peso'>3. Venda de SORVETE</Link>
                    </div>
                    <br/> <br/> 
                    <div>
                        <Link  className='botão' to='/Salario'>4. Salario Liquido</Link>
                    </div>
                    <br/> <br/> 
                    <div>
                        <Link  className='botão' to='/abastecimento'>5.  Ipiranga mais procimo</Link>
                    </div>
                    <br/> <br/>
                    <div>
                        <Link  className='botão' to='/temperatura'>6. Temperatura</Link>
                    </div>
            </div>
        </div>
    )
}