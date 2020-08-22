import React from 'react';
//import Header from '../Componentes/Header';
import Fooder from '../Componentes/Fooder';
import Main1 from '../Componentes/Main1';
import Main2 from '../Componentes/Main2';
import Main3 from '../Componentes/Main3';
import Main4 from '../Componentes/Main4';
import { BrowserRouter as Router } from "react-router-dom";


function CEO() {
    return (
        <Router>
        <div>
            
            <Main1 />
            <Main2 />
            <Main3 />
            <Main4 />
            <Fooder />
        </div>
        </Router>
    )
}

export default CEO;
