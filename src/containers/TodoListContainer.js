import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {addToDo, removeToDo} from '../actions/todoListActions';

const mapStateToProps = (state) => {
    return {
        todos: state.todoList.todos
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (todo) => dispatch(addToDo(todo)),
        removeToDo: (todo) => dispatch(removeToDo(todo))
    };
};
const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;
