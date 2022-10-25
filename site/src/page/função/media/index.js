import{ useState} from "react"
import { Link } from 'react-router-dom';
import './index.scss'

export default function Index() {
    const [N1,setN1] = useState();
    const [N2,setN2] = useState();
    const [Re,setRe]= useState([]);

    // function Aluno(a){
    //     let z = 0;
    //     const y = [];
    //     for (let x = 1; x < a+1; x++){
    //         y[z] = x;
    //         z++;
    //     } 
    //     return y;
    // }

    function Media(a){
        // let o = (n1 + n2 + n3);
        const x= [];
        const y = [];

        for (let x = 1; x < a+1; x++){
            let z = 0;
            y[z] = x;
            z++;
        } 

        for(let z = 1; z <= a; z++){
            x[z] = <input type="number" value={N2} onChange={e => (setN2 (Number(e.target.value)))}></input> ;
        }
        let d = Math.max(...x);

        let z = Math.min(...x);

        // return "a media é " + o + " o maior é " + y + " o menor é " + z;
        return " o maior é " + d + " o menor é " + z;
    }
    // async function v1(){
    //     let x = Aluno(N1); 
    //     setR(x);
    // }

    async function v2(){ 
        let x = Media(N2);
        setRe(x);
    }

    return (
        <div className="pag-orçamento">
            <div className="base">
                <h1>Media dos Alunos</h1>
                <div className="valor">
                    <label>QTD.Alunos:</label>
                    <input type="number" value={N1} onChange={e => (setN1 (Number(e.target.value)))}></input>
                </div>
                
            </div>
            <div className="resposta">
                <div>
                    <button className='botão' onClick ={v2}>Verificar</button>
                </div>
                <br/>
                <div>{Re.map(Re => <h2>{Re}-Aluno <input type="number" value={N2} onChange={e => (setN2 (Number(e.target.value)))}></input></h2>)}</div>
                <div>
                    <button className='botão' onClick ={v2}>Verificar</button>
                </div>
                <div>{Re.map(Re => <h2>{Re} </h2>)}</div>
                <br/> <br/> <br/> 
                <Link to='/'>Voltar</Link>
            </div>
        </div>
    )
}