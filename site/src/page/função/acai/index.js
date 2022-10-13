import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'

export default function Index() {
    const [N1,setN1] = useState('');
    const [N2,setN2] = useState('');
    const [N3,setN3] = useState('');
    const [N4,setN4] = useState('');
    const [R,setR]= useState('');

    function calcularAcai(AP, AM, AG, D){
        let msg = "";

        let a = (AP * 13.50) + (AM * 15.00) + (AG * 17.50);
        let c = (a / 100) * (100 - D);
        msg = "Total à pagar é R$ " + c;
        
        if(D < 0 || D > 100){
            msg = "INVALIDO SE ACHA QUE EU VOU TE DAR DINHEIRO PRA VC COMER >:<"
        }
        if(AG < 0 || AM < 0 || AP < 0){
          msg = "vai vumitar açai"  
        }
          
          return msg;
        
      }

    async function verificar(){
        let x = calcularAcai(N1, N2, N3, N4)
        setR(x);
    }

    return (
        <div className="pag-acai">
            <div className="base">
                <h1>Quanto Custa Seu Açaí</h1>
                <div className="valor">
                    <label>Pequeno:</label>
                    <input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Médio:</label>
                    <input type="number" value={N2} onChange={e => setN2(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Grande:</label>
                    <input type="number" value={N3} onChange={e => setN3(e.target.value)}></input>
                </div>
                <div className="valor">
                    <label>Desconto:</label>
                    <input type="number" value={N4} onChange={e => setN4(e.target.value)}></input>
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