const defaultState = {
    todos: [
        'work hard',
        'play hard'
    ]
};
export function todoList(state = defaultState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
