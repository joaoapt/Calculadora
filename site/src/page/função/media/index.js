

import { useState } from 'react';
import './index.scss';

export default function Index() {
  const [qtd, setQtd] = useState(0);
  const [notasAlunos, setNotasAlunos] = useState([])

  const [media, setMedia] = useState(0);
  const [maior, setMaior] = useState(0);
  const [menor, setMenor] = useState(0);

        function criarArray(tamanho) {
            let notas = [];
            for (let volta = 1; volta <= tamanho; volta++) {
                notas.push(0);
            }
            return notas;
        }

        function calcMedia(notas) {
            let soma = 0;
            for (let volta = 0; volta < notas.length; volta++) {
                soma = soma + notas[volta];
            }
            let m = soma / notas.length;
            return m;
        }

        function calcMaior(notas) {
            let m = 0;
            for (let volta = 0; volta < notas.length; volta++) {
                if (notas[volta] > m) {
                    m = notas[volta];
                }
            }
            
            return m;
        }

        function calcMenor(notas) {
            let m = 11;
            for (let volta = 0; volta < notas.length; volta++) {
                if (notas[volta] < m) {
                    m = notas[volta];
                }
            }
            
            return m;
        }
        
        function okQtd() {
            const x = criarArray(qtd);
            setNotasAlunos(x);
        }

        function alterar(pos, novoValor) {
            notasAlunos[pos] = Number(novoValor);
            setNotasAlunos([...notasAlunos]);
        }

        function calcular() {
            const a = calcMedia(notasAlunos);
            const b = calcMaior(notasAlunos);
            const c = calcMenor(notasAlunos);

            setMedia(a);
            setMaior(b);
            setMenor(c);
        }
return (
    <div className="pag-media">
        <div className='base'>
            <br/><br/><br/><br/>
            <h1>A Media dos Alunos</h1>
        <div>
            <label> Qtd. Alunos:</label><input type='text' value={qtd} onChange={e => setQtd(e.target.value)} />
          <button className='botão1'  onClick={okQtd}> ok </button>
        </div>
        {notasAlunos.map((_item,pos) => 
          <div>
            <label>Aluno{pos+1}:</label> <input type='text' value={notasAlunos[pos]} onChange={e => alterar(pos, e.target.value)} />
          </div>  
        )}
            <div> 
                <button className='botão' onClick={calcular}> Calcular </button>
            </div>
        </div>
        <div className='resposta'>
          <h2>Média: {media}</h2>
        </div>
        <div className='resposta'>
          <h2>Maior: {maior}</h2>
        </div>
        <div className='resposta'>
          <h2>Menor: {menor}</h2>
        </div>
    </div>
  );
}