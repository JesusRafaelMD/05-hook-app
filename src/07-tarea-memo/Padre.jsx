
import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    const incrementar = useCallback(
      (num) => {
        setValor ((counter) => counter + num)
        //Si se deja como setValor( valor + num ), valor siempre tendrá el valor incial, osea 0.
        //Si se pone en funcion de flecha recibiendo un parametro, el valor de num se actualiza sin recargar el componente
      },
      [],
    )

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
