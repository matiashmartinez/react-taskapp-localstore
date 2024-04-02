import CreadorTarea from "./components/CreadorTarea";
import { useEffect, useState } from "react";
import TareaTabla from "./components/TareaTabla";
import ControlPanel from "./components/ControlPanel";
import "../src/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";

function App() {
  const [tareasItems, setTareasItems] = useState([]);
  const [mostrarCompletadas, setMostrarCompletadas] = useState(false);

  useEffect(() => {
    console.log("Carga ok");

    let data = localStorage.getItem("tareas");

    if (data) {
      setTareasItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareasItems));
  }, [tareasItems]);

  const fnCrearTarea = (tareaName) => {
    if (!tareasItems.find((tarea) => tarea.name === tareaName)) {
      setTareasItems([...tareasItems, { name: tareaName, done: false }]);
    } else {
      alert("tarea repetida");
    }
  };

  const fnFinalizarTarea = (tarea) => {
    setTareasItems(
      tareasItems.map((t) =>
        t.name === tarea.name ? { ...t, done: !t.done } : t
      )
    );
  };

  const fnEliminarTareasCompletadas = () => {
    setTareasItems(
      tareasItems.filter((tarea) => {
        return !tarea.done;
      })
    );
  };

  return (
    <main className=" mt-0 bg-dark vh-100  text-white">
      <Container>
        <CreadorTarea fnCrearTarea={fnCrearTarea} />

        <TareaTabla tareas={tareasItems} fnFinalizarTarea={fnFinalizarTarea} />

        <ControlPanel
          completadaState={[mostrarCompletadas, setMostrarCompletadas]}
          fnEliminarTareasCompletadas={fnEliminarTareasCompletadas}
          isChecked={mostrarCompletadas}
        />

        {mostrarCompletadas && (
          <TareaTabla
            tareas={tareasItems}
            fnFinalizarTarea={fnFinalizarTarea}
            completada={mostrarCompletadas}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
