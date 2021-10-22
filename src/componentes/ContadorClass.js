import React, {Component} from 'react'

class ContadorClass extends Component {
    constructor(props){
        super(props);
        this.state = { contador: 0 }
    }

    componentDidMount() {
        console.log('El componente se cargo en el DOM')
        // ... llamamos a la API ...
    }

    componentDidUpdate(propsAnteriores, estAnterior){
        console.log('El componente se actualizó')
        console.log('Propiedades anteriores del componente', propsAnteriores)
        console.log('Estado anterior del componente', estAnterior)
    }

    componentWillUnmount() {
        console.log('Adios componente')
        // ... acabamos llamada a la API ...
    }

    incrementar(cantidad){
        this.setState(estadoAnterior => {
            return { contador: estadoAnterior.contador + cantidad }
        })
    }

    decrementar(cantidad){
        this.setState(state => {
            return { contador: state.contador - cantidad }
        })
    }

    render(){
        return(
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={() => this.incrementar(this.props.cantidadIncremento)}>Incrementar</button>
                <button onClick={() => this.decrementar(this.props.cantidadDecremento)}>Decrementar</button>
            </div>
        );
    }
}

export default ContadorClass;