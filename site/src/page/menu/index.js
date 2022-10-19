import './index.scss';
import { Link } from 'react-router-dom';


export default function Index() {
    return(
        <div className='pagina-menu'>
            <div className='titulo'>
                <h1>Menu</h1>
            </div>
            <div className='base'>
                <br/>
                    <div>
                        <Link  className='botão' to='/acai'>1. Venda de Açai</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/libra'>2. Signo</Link>
                        <br/> <br/> <br/> 
                    </div> 
                    <div>
                        <Link  className='botão' to='/peso'>3. Venda de SORVETE</Link>
                        <br/> <br/> <br/>
                    </div>  
                    <div>
                        <Link  className='botão' to='/Salario'>4. Salario Liquido</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/abastecimento'>5.  Ipiranga mais procimo</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/temperatura'>6. Temperatura</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/orcamento'>7. Orçamento Familiar</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/cinema'>8. Cinema</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/contagem'>9. Contagem</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/linha'>10. Linha</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/forma'>11. Formas</Link>
                        <br/> <br/> <br/> 
                    </div>
                    <div>
                        <Link  className='botão' to='/cafe'>12. Cafééé</Link>
                        <br/> <br/> <br/> 
                    </div>
            </div>
        </div>
    )
}