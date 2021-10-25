import React from 'react'
import { useState, useEffect } from 'react'
// import styles from './ContadorFuncional.module.css'
import Boton from '../elementos/Boton'

const ContadorFuncional = (props) => {
    
    const [contador, setContador] = useState(0)

    const incrementar = cantidad => {setContador(contador + cantidad)}
    const decrementar = cantidad => {setContador(contador + cantidad * -1)}

    //Equivalente a componentDidMount y componentDidUpdate
    // useEffect(() => {
    //     console.log('El componente se renderizo');
    // });

    //Equivalente a componentDidMount, se ejecuta al primer renderizado
    // useEffect(() => {console.log('El componente cargo por primera vez')}, []);
    
    //Equivalente a componentDidUpdate, se ejecuta al primer renderizado
    // useEffect(() => {console.log('El estado del contador cambió')}, [contador]);

    //Equivalente a componentWillUnmount
    // useEffect(() => {
    //     // Codigo del efecto
    //     return(() => {
    //         console.log('Adios componente')
    //     })
    // }, [])

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <Boton negro marginRight onClick={() => incrementar(props.cantidadIncremento)}>Incrementar</Boton>
            <Boton negro onClick={() => decrementar(props.cantidadDecremento)}>Decrementar</Boton>
        </div>
    )
}

export default ContadorFuncional