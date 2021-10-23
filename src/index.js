import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
import ContadorFuncional from './componentes/ContadorFuncional';
// import ContadorClass from './componentes/ContadorClass';
import './index.css';

const App = () => {

  const [sesion, setSesion] = useState(false)

  return(
    <div className="contenedor">
      {sesion === true ? 
      <div>
        <Usuario/> 
        <ContadorFuncional cantidadIncremento={10} cantidadDecremento={5}/>
        {/* <ContadorClass cantidadIncremento={10} cantidadDecremento={5}/> */}
        <button onClick={() => setSesion(false)}>Cerrar Sesión</button>
      </div>
      :
      <div>
        <FormularioInicioSesion setSesion={setSesion}/>
      </div>
      }
    </div>
    );
}
ReactDOM.render(<App/>, document.getElementById('root'));
