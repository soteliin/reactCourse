import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import TareaFormulario from './componentes/TareaFormulario';
// import Tarea from './componentes/Tarea';
import freeCodeCampLogo from './imagenes/fcc_primary_large.svg'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        {/* <Tarea texto={'Aprender React'}/> */}
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
