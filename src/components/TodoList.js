import React, {Component} from 'react';
import Todo from './Todo';

//  import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        const {todos, addToDo, removeToDo} = this.props;
        return (
            <div>
                <input onKeyPress={(e => {e.key === 'Enter' ? addToDo(e.target.value) : false })} placeholder="add new todo" type="text"/>
                <ul>
                    {todos
                        .map((todo, key) => {
                            return <Todo
                                key={key}
                                todo={todo}
                                remove={removeToDo}
                            />;
                    })}
                </ul>
            </div>
        );
    }
}

//  TodoList.propTypes = {};

export default TodoList;
