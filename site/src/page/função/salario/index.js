import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'

export default function Index() {
    const [N1,setN1] = useState('');
    const [N2,setN2] = useState('');
    const [N3,setN3] = useState('');
    const [R,setR]= useState('');

    function Salario (sb, b, d) {
        let msg ="";
        let x = sb * b/100 - d;

        msg = "Seu salario liquido é de R$ " + x;

        return msg;
    }

    async function verificar(){
        let x = Salario(N1, N2, N3)
        setR(x);
    }

    return (
        <div className="pag-salario">
            <div className="base">
                <h1>Salario Líquido</h1>
                <div className="valor">
                    <label>Salario Base:</label>
                    <input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Bônus:</label>
                    <input type="number" value={N2} onChange={e => setN2(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Desconto:</label>
                    <input type="number" value={N3} onChange={e => setN3(e.target.value)}></input>
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
