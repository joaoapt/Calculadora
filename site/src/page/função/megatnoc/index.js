import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'


//<p>{Resp.map(Resp => <p>{Resp} </p>)}</p>

export default function Index() {
    const [N1,setN1] = useState('');
    const [N2,setN2] = useState('');
    const [R,setR]= useState([]);

    function ContagemNumeros(i, f){
        let z = 0;
        const y=[];
        for(let x = i; x <= f; x++){
            y[z] = x;
            z++;
        }
        y.reverse();
        return y;
    }

    async function verificar(){
        let x = ContagemNumeros(N1, N2)
        setR(x);
    }

return (
        <div className="pag-ingresso">
            <div className="base">
                <h1>Contagem de Tras para Frente</h1>
                <div className="valor">
                    <label>Inicio:</label>
                    <input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Fim:</label>
                    <input type="number" value={N2} onChange={e => setN2(e.target.value)}></input>
                </div>
            </div>
            <div className="resposta">
                <div>
                    <button  className='botão' onClick ={verificar}>Verificar</button>
                </div>
                <h1>     {R.map((num, index) => (
            <span key={index}>{num.toLocaleString()}</span>
          ))}</h1>
                <Link to='/'>Voltar</Link>
            </div>
        </div>
    )
}