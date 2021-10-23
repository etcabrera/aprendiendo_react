import React from 'react'
import { Titulo } from './Titulo';
import styled from 'styled-components';

const Usuario = () => {

    const pais = 'Argentina';
    const amigos = ['Federico','Robertino','Emmanuel'];

    return(
        <div>
            <Titulo color="green"/>
            <Titulo usuario="Cesar"/>
          {pais && <p>Tu eres de {pais}</p>}
          <Parrafo>Tu lista de amigos es:</Parrafo>
          <ul>
            {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
          </ul>
          <Parrafo>Saludos!</Parrafo>
        </div>
    );
  };

  const Parrafo = styled.p`
    margin-bottom: 20px 0;
  `;

  export default Usuario;