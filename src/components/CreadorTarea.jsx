import React from "react";

import { useState } from "react";

const CreadorTarea = ({ fnCrearTarea }) => {
  const [tarea, setTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fnCrearTarea(tarea);
    setTarea("");
  };

  return (
    <form onSubmit={handleSubmit} className=" my-2 row ">
      <div className="col-9 ">
        <input
          className="form-control  "
          type="text"
          name="tarea"
          placeholder="Ingrese una tarea"
          onChange={(e) => {
            setTarea(e.currentTarget.value);
          }}
          value={tarea}
        />
      </div>

      <div className="col-3">
        <button className="btn btn-primary btn-sm" onClick={() => handleSubmit}>
          Guardar tarea
        </button>
      </div>
    </form>
  );
};

export default CreadorTarea;
