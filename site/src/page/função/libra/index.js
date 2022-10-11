import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'

export default function Index() {
    const [N1,setN1] = useState('');
    const [N2,setN2] = useState('');
    const [R,setR]= useState('');

    function calcularLibras(D,M){
        let msg = "";
       
        if(D > 22 && D < 31 && M === 9){
            msg = "vc é libra"
        }
        else if(D > 0 && D < 23 && M === 10){
          msg = "vc é libra s"  
        }

        else {
            msg = "NÃO LIBRA "   
        }
        
        return msg;
        
      }

    async function verificar(){
        let x = calcularLibras(N1, N2)
        setR(x);
    }

    return (
        <div>
            <h1>Você é Libra</h1>
            <div>
                <label>Dia:</label><input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
            </div>
            <div>
                <label>Mes:</label><input type="number" value={N2} onChange={e => setN2(e.target.value)}></input>
            </div>
            <div>
                <button onClick ={verificar}>Verificar</button>
            </div>
            <h1>{R}</h1>
            <Link  className='botão' to='/'>Voltar</Link>
        </div>
    )
}
