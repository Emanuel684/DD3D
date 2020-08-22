import React from "react";
import "./Styles/Main4.css";

const Main4 = () => {
  return (
    <div>
      <div className="dedicoDiv4">
        <h3 className="h3Main4">Herramientas de mi dominio</h3>
        <div className="divMain4">
          <table className="tableMain4">
            <tr>
              <td className="tdTopMain4">Photoshop</td>
              <td className="tdTopMain4">Ilustrador</td>
              <td className="tdTopMain4">CorelDRAW</td>
            </tr>

            <tr>
              <td className="imgtd">
                <img
                  className="imgMain4"
                  src="https://cdn.worldvectorlogo.com/logos/adobe-photoshop-cs6.svg"
                  alt="Photoshop"
                />
              </td>
              <td className="imgtd">
                <img
                  className="imgMain4"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/66/Illustrator_CC_icon.png"
                  alt="Ilustrador"
                />
              </td>
              <td className="imgtd">
                <img
                  className="imgMain4"
                  src="https://ciberpcsa.com/wp-content/uploads/2016/06/corel.jpg"
                  alt="CorelDRAW"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main4;
