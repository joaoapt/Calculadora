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

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />} />
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