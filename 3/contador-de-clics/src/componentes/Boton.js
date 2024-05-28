import React from 'react';
import '../hojas-de-estilo/Boton.css'

function Boton({texto,tipoBoton, manejarClic}){
    return (
        <button
            className={'boton-'+tipoBoton}
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;