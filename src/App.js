import "./App.css";

import ListaObjetivos from "./components/ListaObjetivos";

const App = () => {
  const objetivosCurso = [
    { id: "oc1", text: "Finalizar el Curso" },
    { id: "oc2", text: "Aprender sobre React" },
    { id: "oc3", text: "Ayudar a otros estudiantes en las PyR" },
  ];

  return (
    <div className="objetivos-curso">
      <h2>Objetivos del Curso React</h2>
      <ListaObjetivos objetivos={objetivosCurso} />
    </div>
  );
};

export default App;
