import React, {useState} from 'react';
import './FormularioInicioSesion.css'

const FormularioInicioSesion = (props) => {

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const onChange = e => {
        if(e.target.name === 'usuario') {
            setUsuario(e.target.value)
        } else if (e.target.name === 'contrasena') {
            setContrasena(e.target.value)
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        if(usuario === 'Tom' && contrasena === '123'){
            props.setSesion(true)
        } else {
            alert('Datos incorrectos');
            setUsuario('')
            setContrasena('')
        }
    }

    return (
        <form onSubmit={onSubmit} className="formulario">
        <h1>No has iniciado sesión</h1>

            <div>
                <label htmlFor="usuario" className="label">Usuario </label>
                <input 
                    type="text" 
                    name="usuario" 
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                    className="input"
                />
            </div>
            <div>
                <label htmlFor="contrasena" className="label">Contraseña </label>
                <input 
                    type="password" 
                    name="contrasena" 
                    id="usuario"
                    value={contrasena}
                    onChange={onChange}
                    className="input"
                />
            </div>
            <button className="boton" type="submit">Iniciar Sesión</button>
        </form>
    )
}

export default FormularioInicioSesion
