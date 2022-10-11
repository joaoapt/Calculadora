import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'

export default function Index() {
    const [N1,setN1] = useState('');
    const [R,setR]= useState('');

    function Febre (t) {
        let msg = "";
        if(t < 36){
            msg = "você esta com hipotermia";
        }
        else if(t >= 36 && t < 37.6){
            msg = "você esta normal";
        }
        else if(t >= 37.6 && t < 39.6){
            msg = "você esta com febre";
        }
        else if(t >= 39.6 && t < 41){
            msg = "você esta com febre alta";
        }
        else if(t >= 41){
            msg = "você esta com hipertermia";
        }
        return msg;
    } 

    async function verificar(){
        let x = Febre(N1)
        setR(x);
    }

    return (
        <div>
            <h1>Temperatura</h1>
            <div>
                <label>Indique sua Temperatura:</label><input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
            </div>
            <div>
                <button onClick ={verificar}>Verificar</button>
            </div>
            <h2>{R}</h2>
            <Link  className='botão' to='/'>Voltar</Link>
        </div>
    )
}
