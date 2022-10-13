import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'

export default function Index() {
    const [N1,setN1] = useState('');
    const [R,setR]= useState('');

    function calcularSorvete(G){
        let msg = "";
       
        if(G < 0){
            msg = "peso invalido"
        }
        if(G < 100 && G >100 && G < 1000){
            let x = (G * 3.5)/100;
            msg = "total é R$ " + x;  
        }
        if(G === 100){
            msg = "total é R$ 3,50";  
        }
        if(G >= 1000){
            let y = (G/100)*3;
            msg = "total é R$ " + y;   
        }
        
        return msg;
        
      }

    async function verificar(){
        let x = calcularSorvete(N1)
        setR(x);
    }

    return (
        <div className="pag-peso">
            <div className="base">
                <h1>SORVETE</h1>
                <div className="valor">
                    <label>Gramas:</label>
                    <input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
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
