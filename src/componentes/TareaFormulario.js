import styles from "../hojas-de-estilo/TareaFormulario.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // npm install uuid (Crear identificador unico)

function TareaFormulario(props) {


  const [input, setInput] = useState("");

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {

    e.preventDefault();
    

    const tareaNueva = {
      // Creamos identificador unico con uuidv4()
      id: uuidv4(),
      texto: input,
      completado: false
    };

    props.onSubmit(tareaNueva);

  };


  return (
    <form className={styles.tareaFormulario}
    onSubmit={manejarEnvio}
    >
      <input 
      className={styles.tareaInput}
      type="text"
      placeholder="Defina aquí su tarea"
      name="texto"
      onChange={manejarCambio}
      />
      <button className={styles.tareaBoton}>
        Agregar Tarea
        </button>
    </form>
  );
}

export default TareaFormulario;
