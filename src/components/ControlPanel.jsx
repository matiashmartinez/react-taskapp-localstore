import React from "react";

const ControlPanel = ({
  completadaState,
  fnEliminarTareasCompletadas,
  isChecked,
}) => {
  const [mostrarCompletadas, setMostrarCompletadas] = completadaState;

  const onEliminarTareasCompletadas = () => {
    if (
      window.confirm(
        "¿Seguro que quieres eliminar todas las tareas completadas?"
      )
    ) {
      fnEliminarTareasCompletadas();
      setMostrarCompletadas(isChecked);
    }
  };

  return (

    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary ">
      

        <div className="btn-group form-check form-switch">   <input
          id="mostrarTareasCompletadas"
          className="ml-2 form-check-input "
          checked={isChecked}
          type="checkbox"
          onChange={(e) => {
            setMostrarCompletadas(!mostrarCompletadas);
          }}
        />
          <label >Mostrar tareas completadas</label></div>
    
      <div className="d-flex align-items-center">
        <button className="btn btn-danger btn-sm" onClick={onEliminarTareasCompletadas}>
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
