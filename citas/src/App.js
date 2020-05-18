import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Cita from "./components/Cita";

function App() {
  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  // Arreglo de citas
  const [citas, setCitas] = useState(citasIniciales);

  // Función que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));

    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const eliminarCita = (id) => {
    setCitas(citas.filter((cita) => cita.id !== id));
  };

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form crearCita={crearCita}></Form>
          </div>
          <div className="one-half column">
            <h2>
              {citas.length > 0 ? "Administra tus Citas" : "No hay citas"}
            </h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
