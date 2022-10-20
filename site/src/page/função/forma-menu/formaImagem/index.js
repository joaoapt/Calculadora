import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'
import logo from "../../../../img/logo.png"

export default function Index() {
    const [N1,setN1] = useState('');
    const [N2,setN2] = useState('');
    const [R,setR]= useState([]);

    function Formas(b, a){
        const y=[];
        const w=[];
        
        for(let z = 1; z <= b; z++){
            y[z] = <img src={logo }/> ;
        }
        for(let x = 1; x <= a; x++){
            w[x] = y;
        }
        
        return w;
        
    }

    async function verificar(){
        let x = Formas(N1, N2)
        setR(x);
    }

return (
        <div className="pag-img">
            <div className="base">
                <h1>Imagem</h1>
                <div className="valor">
                    <label>Base:</label>
                    <input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Altura:</label>
                    <input type="number" value={N2} onChange={e => setN2(e.target.value)}></input>
                </div>
            </div>
            <div className="resposta">
                <div>
                    <button  className='botão' onClick ={verificar}>Verificar</button>
                </div>
                <div>{R.map(R => <h2>{R}</h2> )}</div>
                <Link to='/forma'>Voltar</Link>
            </div>
        </div>
    )
}