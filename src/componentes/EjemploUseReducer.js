import React, {useReducer} from 'react';
import Boton from '../elementos/Boton';

// Acción
// {tipo: 'INCREMENTAR'}

// Estado inicial
const contadorInicial = {contador: 0}

// Reducer
const reducer = (estado, accion) => {
    switch(accion.tipo) {
        case 'INCREMENTAR':
            return { contador: estado.contador + 1 }
        case 'DECREMENTAR':
            return { contador: estado.contador - 1 }
        case 'REINICIAR':
            return { contador: 0 }
        default:
            return estado;
    }
}

const EjemploUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, contadorInicial)

    return (
        <div>
            <h1>Contador: {state.contador}</h1>
            <Boton
                negro
                marginRight
                onClick={() => dispatch({ tipo: 'INCREMENTAR' })}
            >
                Incrementar
            </Boton>
            <Boton
                negro
                marginRight
                onClick={() => dispatch({ tipo: 'DECREMENTAR' })}
            >
                Decrementar
            </Boton>
            <Boton
                negro
                onClick={() => dispatch({ tipo: 'REINICIAR' })}
            >
                Reiniciar
            </Boton>
        </div>
    )
}

export default EjemploUseReducer;
