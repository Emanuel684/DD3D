import React from "react";
import "../Styles/Main1.css";

const Main1N = () => {
  return (
    <div className="main1Border">
      <div className="imgDiv">
        <div className="imgGrid">
          <img
            src="https://ep01.epimg.net/economia/imagenes/2019/08/17/actualidad/1566041686_081620_1566074377_noticia_normal.jpg"
            alt="Empresa"
            className="imgMain"
          />
        </div>
        <div className="textMain1">
          <div>
            <h2>¿Quienes Somos?</h2>
            <h6>DISEÑO DIGITAL 3D</h6>
            <p>
              Somos uno empresa Colombiana de Innovación y Diseño Digital
              ubicada en Medellín, Antioquía.
            </p>

            <p>
              Con más de 10 años acumulados de experiencia en el desarrollo de
              diseños digitales y otras herramientas de Tecnología, Entornos Web
              y Desarrollo Móvil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1N;
