import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/fcc_primary_large.svg'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de Freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='clic'
          tipoBoton={'clic'}
          manejarClic={manejarClic} />
        <Boton
          texto={'reiniciar'}
          tipoBoton={'reiniciar'}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
