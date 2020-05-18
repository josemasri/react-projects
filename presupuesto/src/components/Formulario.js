import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ agregarNuevoGasto, setCreargasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorCantidad, setErrorCantidad] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    // validar
    if (nombre.trim() === "") {
      setErrorNombre(true);
    }
    if (cantidad <= 0 || isNaN(cantidad)) {
      setErrorCantidad(true);
    }
    if (nombre.trim() === "" || cantidad <= 0 || isNaN(cantidad)) {
      return;
    }
    setErrorNombre(false);
    setErrorCantidad(false);

    // construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    // pasar el gasto al componente principal
    agregarNuevoGasto(gasto);
    setCreargasto(true);

    // resetear el form
    setNombre("");
    guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {errorCantidad ? <Error mensaje="Cantidad no valida"></Error> : null}
      {errorNombre ? (
        <Error mensaje="Ambos campos son obligatorios"></Error>
      ) : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          name="nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          name="cantidad"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseFloat(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.prototypes = {
  agregarNuevoGasto: PropTypes.func.isRequired,
  setCreargasto: PropTypes.func.isRequired,
};

export default Formulario;
