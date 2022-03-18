
import './App.css';
import './hojas-de-estilo/TareaFormulario.css'
import ListaDeTareas from './componentes/ListaDeTareas'

function App() {
  return (
    <div className="App">
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas></ListaDeTareas>
      </div>
    </div>
  );
}

export default App;
