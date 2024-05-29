import React from 'react'
import '../hojas-de-estilo/TareaFormulario.css'

function TareaFormulario(props) {
    return (
        <form>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto' />
            <button className='tarea-boton'>Agregar tarea</button>
        </form>
    )
}

export default TareaFormulario;
