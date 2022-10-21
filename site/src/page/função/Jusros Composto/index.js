import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'

export default function Index() {
    const [N1,setN1] = useState('');
    const [N2,setN2] = useState('');
    const [N3,setN3] = useState('');
    const [N4,setN4] = useState('');
    const [R,setR]= useState([]);

    function JurosComposto(e, v, t, p){
       let x = v - e;
       let m = x * Math.pow (1+ (t / 100) ,p);
       let vp = m / (p * 12);
       let j = m - x;

       let msg = "Montante:" + m.toFixed(2) + " o Juros:" + j.toFixed(2) + " e o Valor da Parcela: " + vp.toFixed(2);

       return msg;
      }

    async function verificar(){
        let x = JurosComposto(N1, N2, N3, N4)
        setR(x);
    }
return (
        <div className="pag-ingresso">
            <div className="base">
                <h1>Juros Compostos</h1>
                <div className="valor">
                    <label>Extrada:</label>
                    <input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>valor do Empreendimento:</label>
                    <input type="number" value={N2} onChange={e => setN2(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Taxa:</label>
                    <input type="text" value={N3} onChange={e => setN3(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Periodo:</label>
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