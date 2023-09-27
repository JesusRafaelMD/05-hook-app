import { act, renderHook } from "@testing-library/react";
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Fernando',
        email: 'fernando@google.com'
    }

    test('debe de regresar los valores por defecto', () => { 
        const { result } = renderHook( ()  => useForm(initialForm)  );
        console.log(result.current)

        expect(result.current).toEqual({
            name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any( Function ),
        onResetForm: expect.any( Function ),
        });
     })

     test('Debe de cambiar el nombre del formulario', () => { 
        const { result } = renderHook( () => useForm(initialForm));

        const {onInputChange} = result.current;
        act( () => {
            onInputChange({ target: { name: 'name', value:'Juan'}});
        });

        expect(result.current.name).toBe ('Juan');
        expect(result.current.formState.name).toBe('Juan'); 

      })

      test('Debe de realizar el reset del formulario', () => { 
        const { result } = renderHook( () => useForm(initialForm));

        const {onInputChange, onResetForm} = result.current;
        act( () => {
            onInputChange({ target: { name: 'name', value:'Juan'}});
            onResetForm();
        });

        expect(result.current.name).toBe (initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name); 

      })
 })