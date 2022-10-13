import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'

export default function Index() {
    const [N1,setN1] = useState('');
    const [N2,setN2] = useState('');
    const [N3,setN3] = useState('');
    const [R,setR]= useState('');

    function Paradas (L, C, D){
        let x = L * C;
        let y = D / x;
        return y;
    }

    async function verificar(){
        let x =  Paradas(N1, N2, N3)
        setR(x);
    }

    return (
        <div className="pag-posto">
            <div className="base">
                <h1>Posto Ipiranga Mais Procimo</h1>
                <div className="valor">
                    <label>Litros:</label>
                    
                    <input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Consumo:</label>
                    
                    <input type="number" value={N2} onChange={e => setN2(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Distancia:</label>
                    <input type="number" value={N3} onChange={e => setN3(e.target.value)}></input>
                </div>
            </div>
            <div className="resposta">
                <div>
                    <br/>
                    <button className="botão" onClick ={verificar}>Verificar</button>
                </div>
                    <br/>
                    <h2>{R}</h2>
                    <Link to='/'>Voltar</Link>
            </div>
        </div>
    )
}
