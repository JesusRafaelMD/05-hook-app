

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    donde: false,
}]

const todoReducer = ( state = initialState, action = {}) => {

    if ( action.type === '[TODO] add todo' ){
        return [...state, action.payload]
    }

    return state;
}



const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    donde: true
}

let todos = todoReducer(newTodo);

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

console.log(todos)