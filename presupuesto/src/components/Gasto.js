import React from "react";
import PropTypes from "prop-types";

const Gato = ({ gasto }) => (
  <li className="gastos">
    <p>
      {gasto.nombre} <span className="gasto">$ {gasto.cantidad}</span>
    </p>
  </li>
);

Gato.prototypes = {
  gasto: PropTypes.object.isRequired,
};

export default Gato;
