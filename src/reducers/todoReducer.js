const defaultState = {
    todos: [
    ]
};
export function todoList(state = defaultState, action) {
    console.log(action.payload);
    switch(action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.payload]};
        case 'REMOVE_TODO':
            return {...state, todos: state.todos.slice(0, action.payload).concat(state.todos.slice(action.payload + 1))};
        default:
            return state;
    }
}
