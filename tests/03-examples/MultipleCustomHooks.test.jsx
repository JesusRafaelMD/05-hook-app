// import { render, screen } from "@testing-library/react"
// import { MultipleCustomHooks } from "../../src/03-examples"
// import { useFetch } from "../../src/hooks";

// jest.mock('../../src/hooks/useFetch');

// describe('Pruebas en <MultipleCustomHooks/>>', () => { 
//     test('debe de mostrar el componente por defect', () => {
//         render (<MultipleCustomHooks/>);

//         expect( screen.getByText('Loading...'));
//         expect( screen.getByText('BreakingBad Quotes'));

//         const nextButton = screen.getByRole('button',  {name: 'Next quote'});
//         //expect(nextButton.disabled).toBeTruthy();
//         screen.debug();
//     });

//     test('debe de mostrar un Quote', () => {
//         useFetch.mockReturnValue({
//             data: [{author: 'Fernando', quote: 'Hola Mundo'}],
//             isLoading: false,
//             hasError: null
//         });

//         render(<MultipleCustomHooks/>); 
//         expect( screen.getByText('Hola Mundo')).toBeTruthy();
//         expect( screen.getByText('Fernando')).toBeTruthy();

//         const nextButton = screen.getByRole('Button', {name:"Next quote"});
//         expect(nextButton.disabled).toBeFalsy();
//     })

//  })