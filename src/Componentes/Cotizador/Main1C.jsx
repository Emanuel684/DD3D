import React from "react";
import "./StylesC/Main1C.css";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Main1C = () => {
  const { register, handleSubmit, errors } = useForm();

  const [datos, setdatos] = useState({
    Cantidad: "",
    ValorUnitario: "",
    ValorTotal: "",
    DescripciondelPedido: "",
  });

  const handleInputChange = (event) => {
    console.log(datos);
    setdatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (data, clean) => {
    clean.target.reset();
  };

  return (
    <Router>
      <Switch>
        <Route path="/Cotizador" exact>
          <div className="DivFatherFather">
          <h4 className="h4Header">
            Realice una cotización de un pedido, con el valor unitario que usted
            concidere conveniente.
          </h4>
          <div className="divFather">
            <div className="divBox">
              <form
                className="col FormMain1C"
                onSubmit={handleSubmit(onSubmit)}
              >
                
                <div className="divBoxes">
                <p className="pCampoText">Cantidad</p>
                  <input
                    
                    className="form-control borderBox"
                    type="number"
                    name="Cantidad"
                    onChange={handleInputChange}
                    ref={register({
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.Cantidad?.message}
                  </span>
                </div>
                <div className="divBoxes">
                <p className="pCampoText">Valor Unitario</p>
                  <input
                    
                    className="form-control borderBox"
                    type="number"
                    name="ValorUnitario"
                    onChange={handleInputChange}
                    ref={register({
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.ValorUnitario?.message}
                  </span>
                </div>
                <div className="divBoxes"> 
                <p className="pCampoText">Cantidad</p>
                  <div><strong>$</strong>{datos.Cantidad * datos.ValorUnitario}</div>
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.ValorTotal?.message}
                  </span>
                </div>

                <div className="">
                <p className="pCampoText">Descripción del Perdido</p>
                  <textarea
                    type="text"
                    name="DescripciondelPedido"
                    className="form-control ZiseDescripcion"
                    onChange={handleInputChange}
                    ref={register({
                      required: {
                        value: true,
                        message: "Campo obligatorio",
                      },
                      maxLength: {
                        value: 1000,
                        message: "¡No más de 1,000 carácteres!",
                      },
                      minLength: {
                        value: 100,
                        message: "¡Mínimo 100 carácteres!",
                      },
                    })}
                  />
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.DescripciondelPedido?.message}
                  </span>
                </div>
              </form>
            </div>
          </div>
          </div>
        </Route>
      </Switch>
      <Switch>
        <Route path="/Cotizador/2">
        <div className="DivFatherFather2">
          <h1 className="h4Header">
            Detalle del Pedido
          </h1>
          <div className="divFather2">
            <div className="divBox">
              <form
                className="col FormMain1C"
                onSubmit={handleSubmit(onSubmit)}
              >
                
                <div className="divBoxes">
                <p className="pCampoText2">Cantidad</p>
                  <div>
                  <strong>{datos.Cantidad}</strong>
                  </div>
                </div>
                <div className="divBoxes">
                <p className="pCampoText2">Valor Unitario</p>
                  <div>
                  <strong>{datos.ValorUnitario}</strong>
                  </div>
                </div>
                <div className="divBoxes">
                <p className="pCampoText2">Cantidad</p>
                  <div><strong>${datos.Cantidad * datos.ValorUnitario}</strong></div>
                  <span className="text-danger text-small d-block mb-2">
                    {errors?.ValorTotal?.message}
                  </span>
                </div>

                <div className="">
                <p className="pCampoText2">Descripción del Perdido</p>
                  <textarea className="divDescrip2" value={datos.DescripciondelPedido}></textarea> 
                </div>
              </form>
            </div>
          </div>
          </div>
        </Route>
      </Switch>
      <Link to="/Cotizador/2">
        <div className="BtnButon">
          <button className="btn Buton">Enviar</button>
        </div>
      </Link>
    </Router>
  );
};

export default Main1C;
