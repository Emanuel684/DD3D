import React from "react";
import CEO from "./Paginas/CEO";
import Cotizador from "./Paginas/Cotizador";
import NuestraEmpresa from "./Paginas/NuestraEmpresa";
import "./Componentes/Styles/Header.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Dibujo() {
  return (
    <Router>
      <div align="center">
        <div>
          <img src="https://1.bp.blogspot.com/-byZzBXOx_eY/Xzc6fHVLIPI/AAAAAAAAHIc/8sM_Pv37aggzd4bY2yPe0kj4xJxG-luxQCLcBGAsYHQ/s287/Logo.PNG" />
        </div>
        <div
          className="btn-group Botones"
          role="group"
          aria-label="Basic example"
        >
          <Link to="/CEO">
            <button
              to="/CEO"
              type="button"
              className="BtnColors"
              activeClassName="active"
            >
              CEO
            </button>
          </Link>
          <Link to="/NuestraEmpresa">
            <button
              type="button"
              className="BtnColors"
              activeClassName="active"
            >
              Nuestra Empresa
            </button>
          </Link>
          <Link to="/Cotizador">
            <button
              type="button"
              className="BtnColors"
              activeClassName="active"
            >
              Cotizador
            </button>
          </Link>
        </div>
      </div>
      <Switch>
        <div>
          <Route path="/CEO" exact>
            <CEO />
          </Route>
          <Route path="/Cotizador" exact>
            <Cotizador />
          </Route>
          <Route path="/NuestraEmpresa" exact>
            <NuestraEmpresa />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default Dibujo;
