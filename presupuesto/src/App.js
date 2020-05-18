import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  // Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCreargasto] = useState(false);

  // UseEffect que actualiza el restante
  useEffect(() => {
    if (creargasto) {
      // agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);
      setCreargasto(false);
      // resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
    }
  }, [gasto, creargasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  agregarNuevoGasto={setGasto}
                  setCreargasto={setCreargasto}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos}></Listado>
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                ></ControlPresupuesto>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
