import React from 'react';
/*
import Header from '../Componentes/Header';
*/
import Fooder from '../Componentes/Fooder';
import Main1N from '../Componentes/NuestraEmpresa/Main1N';
import Main2N from '../Componentes/NuestraEmpresa/Main2N';
import Main3N from '../Componentes/NuestraEmpresa/Main3N';

import { data1 } from '../Utils/Mocks/Data1';

function NuestraEmpresa() {
    return (
        <div>
            
            <Main1N />
            <Main2N />
            <Main3N  Datos1={data1}  />
            <Fooder />
        </div>
    )
}

export default NuestraEmpresa;
