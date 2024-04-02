import React from "react";

const TareaChecked = ({ tarea, fnFinalizarTarea }) => {
  return (
    <tr key={tarea.name}>
      <td className="d-flex justify-content-between">
        {tarea.name}
        <input className="" type="checkbox" checked={tarea.done} onChange={()=> fnFinalizarTarea(tarea)} />
      </td>
    </tr>
  );
};

export default TareaChecked;
