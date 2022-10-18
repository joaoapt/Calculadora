import { BrowserRouter, Routes, Route } from "react-router-dom";

//Menu
import Menu from '../src/page/menu';

//Funções
import Salario from '../src/page/função/salario';
import Temperatura from '../src/page/função/temperatura'
import Abastecimento from '../src/page/função/abastecimento'
import Peso from '../src/page/função/peso';
import Acai from '../src/page/função/acai';
import Libra from '../src/page/função/libra';
import Cinema from '../src/page/função/cinema';
import Orcamento from '../src/page/função/orcamento';
import Contagem from '../src/page/função/contagem';
import Linha from '../src/page/função/linha';
import Formas from './page/função/1formas';
import Forma from './page/função/forma';
export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/cinema" element={<Cinema />} />
                <Route path="/orcamento" element={<Orcamento />} />
                <Route path="/contagem" element={<Contagem />} />
                <Route path="/forma/estrela" element={<Formas />} />
                <Route path="/forma" element={<Forma />} />
                <Route path="/linha" element={<Linha/>} />
                <Route path="/temperatura" element={<Temperatura />} />
                <Route path="/abastecimento" element={<Abastecimento />} />
                <Route path="/Salario" element={<Salario />} />
                <Route path="/libra" element={<Libra />} />
                <Route path="/acai" element={<Acai />} />
                <Route path="/peso" element={<Peso />} />
            </Routes>
        </BrowserRouter>
    )
}