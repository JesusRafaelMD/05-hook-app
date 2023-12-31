import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo}) => {
    { /* { id: newDate()..., description:'', done:false } */ }

    const { description, onInputChange, onResetForm } = useForm({
        description : ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1) return ;

        const newTodo = {
            id : new Date().getTime(),
            done: false,
            description: description, 
        }

        onNewTodo(newTodo);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                name = "description"
                value = {description}
                onChange={ onInputChange }
            />
            <button type="submit"
                className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    )
}
