import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({ cotizacion: 0 });
  const [loading, setLoading] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros"></Header>
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
          setLoading={setLoading}
        ></Formulario>
        {datos && !loading ? <Resumen datos={datos} /> : null}
        {loading ? <Spinner /> : <Resultado cotizacion={cotizacion} />}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
