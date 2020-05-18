import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Pregunta = ({
  guardarRestante,
  guardarPresupuesto,
  actualizarPregunta,
}) => {
  // definir el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setCantidad(parseFloat(e.target.value));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    // Pasa validación
    setError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handleChange}
        />

        <input
          className="button-primary u-full-width"
          placeholder="Definir Presupuesto"
          type="submit"
        />
      </form>
    </Fragment>
  );
};

Pregunta.prototypes = {
  guardarRestante: PropTypes.func.isRequired,
  guardarPresupuesto: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
