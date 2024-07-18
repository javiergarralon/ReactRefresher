import "./App.css";

import ListaObjetivos from "./components/ListaObjetivos/ListaObjetivos";
import NewGoal from "./components/NuevoObjetivo/NuevoObjetivo";

const App = () => {
  const objetivosCurso = [
    { id: "oc1", text: "Finalizar el Curso" },
    { id: "oc2", text: "Aprender sobre React" },
    { id: "oc3", text: "Ayudar a otros estudiantes en las PyR" },
  ];

  const addNuevoObjetivoHandler = (nuevoObjetivo) => {
    objetivosCurso.push(nuevoObjetivo);
    console.log(objetivosCurso);
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
