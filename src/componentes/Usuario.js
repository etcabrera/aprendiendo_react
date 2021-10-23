import React from 'react'
import Titulo from '../elementos/Titulo';
import SubTitulo from '../elementos/SubTitulo';
import Lista from '../elementos/Lista';

const Usuario = () => {

    const pais = 'Argentina';
    const amigos = ['Federico','Robertino','Emmanuel'];
    const NombreUsuario = 'Tomás'

    return(
        <div>
          <Titulo color="blue">Hola {NombreUsuario}</Titulo>
          {pais && <SubTitulo>Tu eres de {pais}</SubTitulo>}
          <SubTitulo>Tu lista de amigos es:</SubTitulo>
          <Lista>
            {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
          </Lista>
          <p>Saludos!</p>
        </div>
    );
  };



  export default Usuario;