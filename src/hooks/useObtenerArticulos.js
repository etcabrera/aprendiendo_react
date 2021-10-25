import { useState, useEffect } from "react";


const useObtenerArticulos = () => {
    const [articulos, setArticulos] = useState([])

    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setArticulos([
                {
                    id: 1,
                    titulo: 'Titulo del primer artículo'
                },
                {
                    id: 2,
                    titulo: 'Titulo del segundo artículo'
                },{
                    id: 3,
                    titulo: 'Titulo del tercer artículo'
                },
            ]);
            setCargando(false);
        }, 3000)
    }, [])
    return [articulos, cargando];
}

export default useObtenerArticulos;