import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'

export default function Index() {
    const [N1,setN1] = useState('');
    const [N2,setN2] = useState('');
    const [R,setR]= useState('');

    function calcularOrcamento(ga,gs){
        let msg = "";

        let x = (gs*100)/ga;

        if(x > -1 && x < 21){
            msg = "parabens, está gerenciando bem seu  orçamento"
        }

        else if(x > 20 && x < 51){
          msg = "muito bem, seus gastos não ultrapassam metade dos ganhos"
        }

        else if(x > 50 && x < 81){
            msg = "atenção, melhor conter os gastos"
        }

        else if(x > 80 && x <= 100){
            msg = "cuidado, seu orçamento está comprometido"
        }

        else if(x > 100){
            msg = "orçamento comprometido, hora de rever seus gastos"
        }

        else {
            msg = "coloque um valor valido"
        }

        return msg;

      }

    async function verificar(){
        let x = calcularOrcamento(N1, N2)
        setR(x);
    }

    return (
        <div className="pag-orçamento">
            <div className="base">
                <h1>Situação de orçamento Familiar</h1>
                <div className="valor">
                    <label>Ganhos:</label>
                    <input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Gastos:</label>
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