import React from "react";
import "./NuevoObjetivo.css";

const NewGoal = (props) => {
  const addObjetivoHandler = (event) => {
    event.preventDefault();

    const nuevoObjetivo = {
      id: Math.random().toString(),
      text: "Mi nuevo objetivo!",
    };
    console.log(nuevoObjetivo)

    props.onAddObjetivo(nuevoObjetivo);
  };

  return (
    <form className="nuevo-objetivo" onSubmit={addObjetivoHandler}>
      <input type="text" />
      <button type="submit">Añadir Objetivo</button>
    </form>
  );
};

export default NewGoal;
