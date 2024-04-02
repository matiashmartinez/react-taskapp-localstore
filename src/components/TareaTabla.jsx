import React from "react";
import TareaChecked from "./TareaChecked";

const TareaTabla = ({ tareas, fnFinalizarTarea, completada = false }) => {
  const crearFilas = (done) => {
    return tareas
      .filter((tarea) => tarea.done === done)
      .map((tarea) => (
        <TareaChecked
          tarea={tarea}
          key={tarea.name}
          fnFinalizarTarea={fnFinalizarTarea}
        />
      ));
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary ">
      <thead>
        <tr className="table-primary" >
          <th>Listado de Tareas </th>
        </tr>
      </thead>
      <tbody>{crearFilas(completada)}</tbody>
    </table>
  );
};

export default TareaTabla;
