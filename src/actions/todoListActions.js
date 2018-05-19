export const addToDo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
};

export const removeToDo = (todo) => {
    return {
        type: 'REMOVE_TODO',
        payload: todo
    };
};

