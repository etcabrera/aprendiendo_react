import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
// import ContadorFuncional from './componentes/ContadorFuncional';
// import ContadorClass from './componentes/ContadorClass';
import './index.css';
import Boton from './elementos/Boton';
import EjemploUseReducer from './componentes/EjemploUseReducer';
import Blog from './componentes/Blog';

const App = () => {

  const [sesion, setSesion] = useState(true)

  return(
    <div className="contenedor">
      {sesion === true ? 
      <div>
        <Usuario/> 
        <Blog/>
        <EjemploUseReducer/>
        {/* <ContadorFuncional cantidadIncremento={10} cantidadDecremento={5}/> */}
        {/* <ContadorClass cantidadIncremento={10} cantidadDecremento={5}/> */}
        <Boton largo marginTop onClick={() => setSesion(false)}>Cerrar Sesión</Boton>
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
