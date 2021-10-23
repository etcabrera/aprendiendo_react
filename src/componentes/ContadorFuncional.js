import React from 'react'
import { useState } from 'react'
import styles from './ContadorFuncional.module.css'

const ContadorFuncional = (props) => {

    const [contador, setContador] = useState(0)

    const incrementar = cantidad => {setContador(cantidad)}
    const decrementar = cantidad => {setContador(cantidad * -1)}

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button className={styles.boton} onClick={() => incrementar(props.cantidadIncremento)}>Incrementar</button>
            <button className={styles.boton} onClick={() => decrementar(props.cantidadDecremento)}>Decrementar</button>
        </div>
    )
}

export default ContadorFuncional
