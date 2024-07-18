import React, { useState } from "react";

import ListaObjetivos from "./components/ListaObjetivos/ListaObjetivos";
import NewGoal from "./components/NuevoObjetivo/NuevoObjetivo";
import "./App.css";

const App = () => {
  const [objetivosCurso, setObjetivoCurso] = useState([
    { id: "oc1", text: "Finalizar el Curso" },
    { id: "oc2", text: "Aprender sobre React" },
    { id: "oc3", text: "Ayudar a otros estudiantes en las PyR" },
  ]);

  const addNuevoObjetivoHandler = (nuevoObjetivo) => {
    setObjetivoCurso(objetivosCurso.concat(nuevoObjetivo));
  };

  return (
    <div className="objetivos-curso">
      <h2>Objetivos del Curso React</h2>
      <NewGoal onAddObjetivo={addNuevoObjetivoHandler} />
      <ListaObjetivos objetivos={objetivosCurso} />
    </div>
  );
};

export default App;
