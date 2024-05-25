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
import FormaEstrela from './page/função/forma-menu/formaEstrela';
import Forma from './page/função/forma-menu/forma';
import FormaQuadrado from './page/função/forma-menu/formaQuadrado';
import FormaCirculo from './page/função/forma-menu/formaCirculo';
import FormaImagem from './page/função/forma-menu/formaImagem';
import Cafe from './page/função/cafe';
import Media from './page/função/media'
import Juros from './page/função/Jusros Composto';
import ContarDeTrasParaFrente from './page/função/megatnoc';
export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/media" element={<Media />} />
                <Route path="/" element={<Menu />} />
                <Route path="/cinema" element={<Cinema />} />
                <Route path="/orcamento" element={<Orcamento />} />
                <Route path="/juros" element={<Juros />} />
                <Route path="/contagem" element={<Contagem />} />
                <Route path="/megatnoc" element={<ContarDeTrasParaFrente />} />
                <Route path="/forma/estrela" element={<FormaEstrela />} />
                <Route path="/forma/quadrado" element={<FormaQuadrado />} />
                <Route path="/forma/imagem" element={<FormaImagem />} />
                <Route path="/forma/circulo" element={<FormaCirculo />} />
                <Route path="/forma" element={<Forma />} />
                <Route path="/cafe" element={<Cafe />} />
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