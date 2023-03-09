import styles from "../hojas-de-estilo/Tarea.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? `${styles.tareaContenedorCompletada}` : `${styles.tareaContenedor}`}> 
      <div 
      className={styles.tareaTexto}
        onClick={() => completarTarea(id)}>
        {texto}
        </div>
      <div 
      className={styles.tareaContenedorIconos}
      onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className="tareaIcono"/>
      </div>
    </div>
  );
}

export default Tarea;
