import React from 'react'
import { useState } from 'react'
// import styles from './ContadorFuncional.module.css'
import Boton from '../elementos/Boton'

const ContadorFuncional = (props) => {

    const [contador, setContador] = useState(0)

    const incrementar = cantidad => {setContador(cantidad)}
    const decrementar = cantidad => {setContador(cantidad * -1)}

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <Boton negro marginRight onClick={() => incrementar(props.cantidadIncremento)}>Incrementar</Boton>
            <Boton negro onClick={() => decrementar(props.cantidadDecremento)}>Decrementar</Boton>
        </div>
    )
}

export default ContadorFuncional
