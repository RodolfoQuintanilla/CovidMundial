import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const CategoriasContex = createContext();

//provide
const CategoriasProvider = (props) => {

    // const [hola, setHola] = useState('Hola Perro');

    const [datosApi, setDatosApi] = useState([]);
    useEffect(() => {
        const respuesta = async () => {
            const url = 'https://api.covid19api.com/summary';
            const resultado = await axios(url);
            setDatosApi(resultado.data.Countries);
        };
        respuesta()
    }, [])



    return (
        <CategoriasContex.Provider
            value={{
                datosApi
            }}
        >
            {props.children}
        </CategoriasContex.Provider>
    )
};

export default CategoriasProvider