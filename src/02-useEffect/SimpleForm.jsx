import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'strider',
        email: 'rafael@correo.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) =>
    {
        const { name, value } = target;
        setformState({
            ...formState, 
            [ name ]: value
        })
    }

    useEffect( () => {
        //console.log('useEffect called');
    }, [] );
    //arreglo vacio como argumento de useeffec porque solo quiero que se ejecute una vez.
    //sin el arreglo vacio, se ejecuta cada vez que el estado cambia i.e. cada vez que se escribe en los inputs
    
    useEffect( () => {
        //console.log('FormState Changed');
    }, [formState] );
    
    useEffect( () => {
        //console.log('Email Changed');
    }, [email] );


    


  return (
    <>
        <h1>Formulario Simple </h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder='Username'
            name='username' 
            value = { username }
            onChange={ onInputChange }
        />


        <input 
            type="email"
            className="form-control mt-2"
            placeholder='JesusRafael@correo.com'
            name='email' 
            value = { email }
            onChange={ onInputChange }
        />

        {
            (username === 'strider2' && <Message/>)
        }
    </>
  )
}
