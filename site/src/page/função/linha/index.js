import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'

export default function Index() {
    const [N1,setN1] = useState('');
    const [R,setR]= useState([]);

    function Linha(t){
        const y=[];
        for(let x = 1; x <= t; x++){
            y[x] = "*";
        }
        return y;
    }

    async function verificar(){
        let x = Linha(N1)
        setR(x);
    }

return (
        <div className="pag-ingresso">
            <div className="base">
                <h1>Linha</h1>
                <div className="valor">
                    <label>Tamanho:</label>
                    <input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
                </div>
            </div>
            <div className="resposta">
                <div>
                    <button  className='botão' onClick ={verificar}>Verificar</button>
                </div>
                <br/>
                <div className="r">{R.map(R => <p>{R} &nbsp;</p>)}</div>
                <br/>
                <Link to='/'>Voltar</Link>
            </div>
        </div>
    )
}