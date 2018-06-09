import React from 'react';
//  import PropTypes from 'prop-types';

const Todo = ({index, todo, remove}) => {
    return (
        <li className="item" onClick={() => remove(index)}>
            {todo}
        </li>
    );
};

//  todo.propTypes = {};

export default Todo;
