const defaultState = {
    todos: [
    ]
};
export function todoList(state = defaultState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.payload]};
        case 'REMOVE_TODO':
            return {...state, todos: state.todos.filter(item => item !== action.payload)};
        default:
            return state;
    }
}
