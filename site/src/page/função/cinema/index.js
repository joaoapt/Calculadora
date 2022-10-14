import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'

export default function Index() {
    const [N1,setN1] = useState('');
    const [N2,setN2] = useState('');
    const [N3,setN3] = useState('');
    const [N4,setN4] = useState('');
    const [R,setR]= useState('');

    function calcularIngresso(i, m, d, n){
        let msg = "";

        if(d === "quarta-feira" && n !== "nacional"){
            let x = (m * 5.00) + (i * 5.00);
            msg = "tem que pagar R$ " + x;
        }

        else if(d !== "quarta-feira" && n === "nacional"){
            let x = (i * 5.00) + (m * 5.00);
            msg = "tem que pagar R$" + x;
        }

        else if(d === "quarta-feira" && n === "nacional"){
            let x = (i *5.00) + (m * 5.00);
            msg = "tem que pagar R$" + x;
        }
        else{
            let z = (i * 28.50) + (m * 14.25);
            msg = "tem que pagar R$" + z;
        }

        return msg;

      }

    async function verificar(){
        let x = calcularIngresso(N1, N2, N3, N4)
        setR(x);
    }
return (
        <div className="pag-ingresso">
            <div className="base">
                <h1>Valor do Ingresso</h1>
                <div className="valor">
                    <label>Inteira:</label>
                    <input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Meia:</label>
                    <input type="number" value={N2} onChange={e => setN2(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Dia:</label>
                    <input type="text" value={N3} onChange={e => setN3(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Nacional:</label>
                    <input type="text" value={N4} onChange={e => setN4(e.target.value)}></input>
                </div>
            </div>
            <div className="resposta">
                <div>
                    <button  className='botão' onClick ={verificar}>Verificar</button>
                </div>
                <h2>{R}</h2>
                <Link to='/'>Voltar</Link>
            </div>
        </div>
    )
}