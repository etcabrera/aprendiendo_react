import React from 'react'
import { Titulo } from './Titulo';

const Usuario = () => {

    const pais = 'Argentina';
    const amigos = ['Federico','Robertino','Emmanuel'];

    return(
        <div>
            <Titulo color="green"/>
            <Titulo usuario="Cesar"/>
          {pais && <p>Tu eres de {pais}</p>}
          <p>Tu lista de amigos es:</p>
          <ul>
            {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
          </ul>
          <p>Saludos!</p>
        </div>
    );
  };

  export default Usuario;