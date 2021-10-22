import React from 'react'
import { useState } from 'react'
import './ContadorFuncional.css'

const ContadorFuncional = (props) => {

    const [contador, setContador] = useState(0)

    const incrementar = cantidad => {setContador(cantidad)}
    const decrementar = cantidad => {setContador(cantidad * -1)}

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button className="boton-contador" onClick={() => incrementar(props.cantidadIncremento)}>Incrementar</button>
            <button className="boton-contador" onClick={() => decrementar(props.cantidadDecremento)}>Decrementar</button>
        </div>
    )
}

export default ContadorFuncional
