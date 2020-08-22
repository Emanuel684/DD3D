import React from "react";
import "./StylesN/Main3N.css";
import { Component } from "react";

class Main3N extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { Datos1 } = this.props;

    return (
      <div>
        <div className="divMain3">
          <h3 className="h3Main3">Nuestros Empleados</h3>
          <div className="divCardMain3">
            <table className="tableTrabajador">
              <tr className="tableHeader">
                <td className="tdTable"><strong>Empleado</strong></td> 
                <td className="tdTable"><strong>Edad</strong></td>
                <td className="tdTable"><strong>Teléfono</strong></td>
                <td className="tdTable"><strong>Correo</strong></td>
              </tr>

              {Datos1.map((datosT, index) => {
                return (
                  <tr key={`datosT-${index}`} className="tableDatos">
                    <td className="tdTable">{datosT.nombreEmpleado}</td>
                    <td className="tdTable">{datosT.edadEmpleado}</td>
                    <td className="tdTable">{datosT.telefonoEmpleado}</td>
                    <td className="tdTable">{datosT.correoEmpleado}</td>
                  </tr>
                );
              })}

            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Main3N;
