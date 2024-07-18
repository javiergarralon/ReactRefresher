import React, { useState } from "react";

import "./NuevoObjetivo.css";

const NewGoal = (props) => {
  const [textoObjetivo, setTextoObjetivo] = useState("");

  const addObjetivoHandler = (event) => {
    event.preventDefault();

    const nuevoObjetivo = {
      id: Math.random().toString(),
      text: textoObjetivo,
    };

    setTextoObjetivo("");

    props.onAddObjetivo(nuevoObjetivo);
  };

  const textoObjetivoHandler = (event) => {
    setTextoObjetivo(event.target.value);
  };

  return (
    <form className="nuevo-objetivo" onSubmit={addObjetivoHandler}>
      <input
        type="text"
        value={textoObjetivo}
        onChange={textoObjetivoHandler}
      />
      <button type="submit">Añadir Objetivo</button>
    </form>
  );
};

export default NewGoal;
