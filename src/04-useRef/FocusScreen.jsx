import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef  = useRef();
    console.log(inputRef);

    const onClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />
        <input 
            ref = {inputRef}
            type="text"
            className='form-control'
            placeholder='Ingrese su nombre' 
        />

        <button 
        className='btn btn-primary mt-2'
        onClick={ onClick }
        >Set focus</button>
    </>
  )
}

