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
        <div className="pag-libra">
            <div className="base">
                <h1>Você é Libra</h1>
                <div className="valor">
                    <label>Dia:</label>
                    <input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Mes:</label>
                    <input type="number" value={N2} onChange={e => setN2(e.target.value)}></input>
                </div>
            </div>
            <div className="resposta">
                <div>
                    <button className='botão' onClick ={verificar}>Verificar</button>
                </div>
                <h2>{R}</h2>
                <Link to='/'>Voltar</Link>
            </div>
        </div>
    )
}
