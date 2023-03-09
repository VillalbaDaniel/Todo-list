import styles from "./App.module.css";
import ListaDeTareas from "./componentes/ListaDeTareas";



function App() {
  return (
    <div className={styles.aplicacionTareas}>
      <div className={styles.tareasListaPrincipal}>
        <h1>Todo-list</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
