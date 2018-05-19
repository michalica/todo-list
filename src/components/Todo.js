import React from 'react';
//  import PropTypes from 'prop-types';

const Todo = ({todo, remove}) => {
    console.log(todo);
    return (
        <li onClick={() => remove(todo)}>
            {todo}
        </li>
    );
};

//  todo.propTypes = {};

export default Todo;
