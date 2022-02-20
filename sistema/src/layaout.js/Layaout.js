import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { CategoriasContex } from '../context/CategoriasContex'

const Layaout = () => {
    const { datosApi } = useContext(CategoriasContex);

    console.log(datosApi);
    return (
        <>
            <Outlet />
        </>
    );
};

export default Layaout;