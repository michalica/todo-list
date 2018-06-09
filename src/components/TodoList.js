import React from 'react';
import Todo from './Todo';

//  import PropTypes from 'prop-types';

const TodoList = ({todos, addToDo, removeToDo}) => {
    return (
        <div>
            <h1>Todo List</h1>
            <input onKeyPress={(e => {e.key === 'Enter' ? addToDo(e.target.value) : false })} placeholder="add new todo" type="text"/>
            <ul>
                {todos
                    .map((todo, key) => {
                        return <Todo
                            index={key}
                            key={key}
                            todo={todo}
                            remove={removeToDo}
                        />;
                })}
            </ul>
        </div>
    );
};

export default TodoList;
