import { BrowserRouter, Routes, Route } from "react-router-dom";

import Peso from '../src/page/peso';
import Acai from '../src/page/acai';
import Libra from '../src/page/libra';
import Menu from '../src/page/menu';

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/libra" element={<Libra />} />
                <Route path="/acai" element={<Acai />} />
                <Route path="/peso" element={<Peso />} />
            </Routes>
        </BrowserRouter>
    )
}