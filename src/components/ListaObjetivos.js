import React from "react";
import "./ListaObjetivos.css";

const ListaObjetivos = (props) => {
  console.log(props.objetivos);
  return (
    <ul className="lista-objetivos">
      {props.objetivos.map(objetivo => {
        return <li key={objetivo.id}>{objetivo.text}</li>;
      })}
    </ul>
  );
};

export default ListaObjetivos;
