import React from "react";
import "./Styles/Main1.css";

const Main1 = () => {
  return (
    <div className="main1Border">
      <div className="imgDiv">
        <div className="imgGrid">
          <img
            src="https://www.fmdos.cl/wp-content/uploads/2018/10/hombreguapo-25283459bb17a90df6cee30ae4bd3aed-1200x800-1024x683.jpg"
            alt="Diseñador Grafico"
            className="imgMain"
          />
        </div>
        <div className="textMain1">
          <div>
            <h2>Hola, soy Carlos David Pérez</h2>
            <h6>Y SOY DISEÑADOR GRAFICO</h6>
            <div>
              ¡Hola! Si estás aquí, es porque quieres saber un poco más sobre
              mí, por eso, te voy a contar un poco quién soy, a qué me dedico, y
              cómo te puedo ayudar.
            </div>

            <div>
              Nací en Barcelona capital, aunque he vivido toda la vida fuera
              pero muy cerca de ella. Me gusta tener la ciudad cerca, pero
              prefiero los sitios más tranquilos para vivir.
            </div>
            <div>
              Como no sabía muy bien qué estudiar, cuando llegó la hora de
              decidir, me puse a estudiar informática, porque era lo que más me
              llamaba la atención en aquel momento.
            </div>
            <div>
              Eso me llevó a trabajar como informático algunos años, cosa que me
              hizo darme cuenta de que no me gustaba lo que hacía, ni me veía
              toda la vida intentando arreglar los marrones de los demás.
            </div>
            <div>
              Por ese motivo, desde que perdí mi último trabajo, no envié ningún
              curriculum más y decidí dedicarme a algo que realmente me gustara.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
