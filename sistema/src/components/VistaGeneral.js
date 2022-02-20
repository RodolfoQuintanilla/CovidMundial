
import total from '../styles/TableroTotales.module.css'
import { Link } from "react-router-dom";

import graficos from '../img/graficos.png';
import muerte from '../img/muerte.png';
import fiebre from '../img/fiebre.png';
import contagio from '../img/contagio.png';

import useOperaciones from '../hook/useOperaciones'

import { formatearFecha } from '../helper/fecha'

const VistaGeneral = () => {



    const { sumaMT, sumaMuertesTotal, muerteDia, diaDeth,
        confirmadoTolales, confirmadosNuevos, sumaMuertes, totalConfirmado } = useOperaciones()

    setTimeout(() => {
        sumaMT()
        muerteDia()
        confirmadoTolales()
        sumaMuertes()
    }, 500);


    return (
        <>

            <div className={total.contenedor}>

                <div className={total.fecha}>
                    <label>Fecha:</label>
                    <input type="text" disabled value={formatearFecha(new Date())} />
                </div>
                <div className={total.contenidoCajas}>

                    <div className={total.caja}>
                        <img className={total.icono} src={contagio} alt='contagio' />

                        <div className={total.contenedorTexto}>
                            <h1 className={total}>Contagio Total</h1>
                            <p> {totalConfirmado.toLocaleString("es-ES")} </p>
                        </div>
                    </div>
                    <div className={total.caja}>

                        <img className={total.icono} src={fiebre} alt='fiebre' />

                        <div className={total.contenedorTexto}>
                            <h1 className={total}>Nuevos Casos</h1>
                            <p>{confirmadosNuevos.toLocaleString("es-ES")}</p>
                        </div>

                    </div>

                    <div className={total.caja}>
                        <img className={total.icono} src={graficos} alt='graficos' />

                        <div className={total.contenedorTexto}>
                            <h1 className={total}>Muertes Total</h1>
                            <p>{sumaMuertesTotal.toLocaleString("es-ES")}</p>
                        </div>
                    </div>

                    <div className={total.caja}>
                        <img className={total.icono} src={muerte} alt='muerte' />
                        <div className={total.contenedorTexto}>
                            <h1 className={total}>Nuevas Muertes</h1>
                            <p>{diaDeth.toLocaleString("es-ES")}</p>
                        </div>
                    </div>

                </div>
                <div className={total.btn}>

                    <Link to='/Test'>Realiza tu Test</Link>
                </div>

            </div>
        </>
    );
};

export default VistaGeneral;