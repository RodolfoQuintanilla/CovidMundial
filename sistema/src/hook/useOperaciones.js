import { useContext, useState } from 'react';
import { CategoriasContex } from '../context/CategoriasContex'



const useOperaciones = () => {
    const { datosApi } = useContext(CategoriasContex);
    const [sumaMuertesTotal, setSumaMuertesTotal] = useState(0);
    const [diaDeth, setdiaDeth] = useState(0);
    const [confirmadosNuevos, setConfirmadosNuevos] = useState(0);
    const [totalConfirmado, setTotalConfirmado] = useState(0);


    let muerteSuma = []
    let newDeaths = [];
    let totalConfirmed = [];
    let arreglo = [];
    let newConfirmed = [];

    const sumaMT = () => {
        datosApi.map(res => {
            muerteSuma.push(res.TotalDeaths)
        })
        let total = muerteSuma.reduce((a, b) => a + b, 0);
        setSumaMuertesTotal(total)
    };

    const muerteDia = () => {
        datosApi.map(res => {
            newDeaths.push(res.NewDeaths)
        })
        let total = newDeaths.reduce((a, b) => a + b, 0);
        setdiaDeth(total);
    };


    const sumaContagio = () => {
        datosApi.map(res => {
            arreglo.push(res.TotalConfirmed)
        })
        let total = arreglo.reduce((a, b) => a + b, 0);
        setTotalConfirmado(total);
    };

    const confirmadoTolalesDia = () => {
        datosApi.map(res => {
            newConfirmed.push(res.NewConfirmed)
        })
        let total = newConfirmed.reduce((a, b) => a + b, 0);
        setConfirmadosNuevos(total);
    };

    /*   const confirmadoTolales = () => {
          datosApi.map(res => {
              totalConfirmed.push(res.TotalConfirmed)
          })
          let total = totalConfirmed.reduce((a, b) => a + b, 0);
          setConfirmadosNuevos(total);
      }; */





    return {
        sumaMuertesTotal, sumaMT, muerteDia, diaDeth, confirmadoTolalesDia,
        confirmadosNuevos, sumaMuertes: sumaContagio, totalConfirmado
    }

};

export default useOperaciones;