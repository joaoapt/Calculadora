import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.css'

export default function Index() {
    const [N1,setN1] = useState('');
    const [R,setR]= useState('');

    function calcularSorvete(G){
        let msg = "";
       
        if(G < 0){
            msg = "peso invalido"
        }
        if(G < 100 || G >100 && G < 1000){
            let x = (G * 3.5)/100;
            msg = "total é R$ " + x;  
        }
        if(G == 100){
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
        <div>
            <h1>SORVETE</h1>
            <div>
                <label>Gramas:</label><input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
            </div>
            <div>
                <button onClick ={verificar}>Verificar</button>
            </div>
            <h1>{R}</h1>
            <Link  className='botão' to='/'>Voltar</Link>
        </div>
    )
}
