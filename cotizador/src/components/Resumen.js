import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const DivResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
  text-transform: capitalize;
`;

const Resumen = ({ datos: { marca, year, plan } }) => {
  return (
    <DivResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>Plan: {plan}</li>
        <li>Año del Auto: {year}</li>
      </ul>
    </DivResumen>
  );
};

Resumen.prototypes = {
  datos: PropTypes.object.isRequired,
};

export default Resumen;
