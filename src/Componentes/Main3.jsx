import React from "react";
import "./Styles/Main3.css";

const Main3 = () => {
  return (
    <div>
      <div className="divMain3">
        <h3 className="h3Main3">¿Cómo puedo ayudarte?</h3>
        <div className="divCardMain3">
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Diseño Litográfico</h5>
                <p className="card-text">
                  Nuestros servicios profesionales enfocados al diseño e
                  impresión litográfica, nuestra maquinaria, como nuestro equipo
                  de profesionales en las artes gráficas nos permite realizar
                  grandes producciones con altos estándares de calidad.
                </p>
                <a href="#" className="btn ">
                  VER SERVICIO
                </a>
              </div>
            </div>

            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Diseño tienda online</h5>
                <p className="card-text">
                  Te creo y diseño una tienda online completamente funcional con
                  WordPress y WooCommerce para que puedas comenzar a vender tus
                  productos. Da igual que tenga pocos o miles de productos.
                </p>
                <a href="#" className="btn">
                  VER SERVICIO
                </a>
              </div>
            </div>

            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Mantenimiento web</h5>
                <p className="card-text">
                  Me encargo de tener tu web hecha con WordPress al día y sin
                  problemas, manteniéndola actualizada, optimizada, creando
                  copias de seguridad, solucionando los problemas que vayan
                  surgiendo, etc.
                </p>
                <a href="#" className="btn">
                  VER SERVICIO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
